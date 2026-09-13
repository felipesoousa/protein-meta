// ==========================================================
// 🚀 Meta Proteica — Launcher Oficial (Scriptable)
// Instale apenas UMA vez no Scriptable. Atualizações via GitHub.
// ==========================================================

const GITHUB_USER = "felipesoousa";
const GITHUB_REPO = "protein-meta";
const BRANCH = "main";

const MANIFEST_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${BRANCH}/manifest.json`;

const fm = FileManager.local();
const libDir = fm.libraryDirectory();
const appPath = fm.joinPath(libDir, "_protein_meta_app.js");
const backupPath = fm.joinPath(libDir, "_protein_meta_app_backup.js");
const stagingPath = fm.joinPath(libDir, "_protein_meta_app_staging.js");
const versionPath = fm.joinPath(libDir, "protein_meta_version.txt");

let currentVersion = fm.fileExists(versionPath) ? fm.readString(versionPath).trim() : null;

// Verificação de Atualização com Cache-Busting (?t=timestamp)
try {
  const manifestReq = new Request(`${MANIFEST_URL}?t=${Date.now()}`);
  manifestReq.timeoutInterval = 6;
  const manifest = await manifestReq.loadJSON();

  const needsUpdate = !fm.fileExists(appPath) || currentVersion !== manifest.version;

  if (needsUpdate && manifest.appUrl) {
    const appReq = new Request(`${manifest.appUrl}?t=${Date.now()}`);
    appReq.timeoutInterval = 10;
    const newSource = await appReq.loadString();

    if (newSource && newSource.includes("module.exports.main")) {
      // 1. Grava no staging temporário
      fm.writeString(stagingPath, newSource);

      // 2. Valida se o módulo carrega sem erros de sintaxe
      try {
        const testModule = importModule(stagingPath);
        if (typeof testModule.main === "function") {
          // Backup da versão anterior
          if (fm.fileExists(appPath)) {
            if (fm.fileExists(backupPath)) fm.remove(backupPath);
            fm.copy(appPath, backupPath);
          }
          // Promove staging para produção
          if (fm.fileExists(appPath)) fm.remove(appPath);
          fm.move(stagingPath, appPath);
          fm.writeString(versionPath, manifest.version);
          console.log(`[Meta Proteica] Atualizado para versão ${manifest.version}`);
        } else {
          throw new Error("Módulo inválido");
        }
      } catch (err) {
        if (fm.fileExists(stagingPath)) fm.remove(stagingPath);
        console.error("[Meta Proteica] Falha na validação do novo código. Mantendo versão estável.");
      }
    }
  }
} catch (e) {
  console.log("[Meta Proteica] Offline ou GitHub inacessível. Usando versão local.");
}

// Execução com Fallback para backup se o app estiver ausente/corrompido
try {
  if (!fm.fileExists(appPath)) {
    if (fm.fileExists(backupPath)) {
      fm.copy(backupPath, appPath);
    } else {
      throw new Error("Não foi possível baixar o Meta Proteica pela primeira vez. Verifique sua conexão à internet.");
    }
  }

  const app = importModule(appPath);
  await app.main();
} catch (err) {
  const alert = new Alert();
  alert.title = "Meta Proteica";
  alert.message = err.message || "Erro inesperado ao abrir o app.";
  alert.addAction("OK");
  await alert.presentAlert();
}

Script.complete();
