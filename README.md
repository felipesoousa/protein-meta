# 🥩 Meta Proteica

Aplicativo minimalista para controle de ingestão proteica diária no iOS através do **Scriptable**, integrado com a **Tabela TACO oficial (597 alimentos)**, conversão inteligente para medidas caseiras (ANVISA) e **Modo Noturno automático (6h - 18h)**.

---

## 📲 Como Instalar no iPhone (Apenas 1 Vez)

1. Baixe o aplicativo gratuito **[Scriptable na App Store](https://apps.apple.com/app/scriptable/id1405459188)**.
2. Abra o Scriptable, toque no botão **`+`** no canto superior direito para criar um novo script.
3. Nomeie como **`Meta Proteica`**.
4. Copie o código contido no arquivo [`launcher.js`](./launcher.js) deste repositório e cole dentro do script.
5. Toque no ícone de play ▶️ ou adicione como atalho na Tela de Início do iPhone.

---

## 🔄 Como Funcionam as Atualizações (OTA)

Você **nunca mais precisa colar código manualmente no Scriptable**. Toda vez que o aplicativo é aberto:
1. O **Launcher** consulta silenciosamente o arquivo `manifest.json` deste repositório.
2. Se houver uma nova versão de alimentos, cálculo ou interface no GitHub, ela é baixada e validada em segundo plano.
3. Se estiver sem internet, o aplicativo abre imediatamente utilizando a cópia local armazenada em cache.
4. Os seus dados pessoais e histórico diário permanecem preservados e nunca são alterados pelas atualizações.
