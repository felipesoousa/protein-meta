module.exports.main = async function() {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"/>
<title>Meta Proteica</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&family=Figtree:wght@400;600;700&display=swap');

:root {
  --bg: #f5ead8;
  --surface: #ebddc5;
  --surface-2: #f9f4ed;
  --text: #201e1d;
  --muted: #645c50;
  --subtle: #82796a;
  --divider: rgba(32,30,29,0.16);

  --accent: #c67139;
  --accent-100: #fff2eb;
  --accent-200: #ffe1d0;
  --accent-300: #ffc6a5;
  --accent-600: #b2622d;
  --accent-700: #8c491a;
  --accent-800: #643312;

  --sage: #7a8a5e;
  --sage-100: #f0fae1;
  --sage-200: #e1eecc;
  --sage-700: #56633f;

  --neutral-200: #eee7db;
  --neutral-300: #dcd3c4;

  --danger: #8c491a;

  --font-h: "Caprasimo", Georgia, system-ui, sans-serif;
  --font-b: "Figtree", -apple-system, system-ui, sans-serif;

  --r-sm: 12px;
  --r-md: 20px;
  --r-lg: 30px;

  --sh-sm: 0 1px 2px rgba(46,43,37,0.14);
  --sh-md: 0 3px 10px rgba(46,43,37,0.16);
  --sh-lg: 0 12px 32px rgba(46,43,37,0.22);
}

html[data-theme="dark"] {
  --bg: #1b1713;
  --surface: #2a241d;
  --surface-2: #332c23;
  --text: #f5ead8;
  --muted: #c0b6a5;
  --subtle: #a19786;
  --divider: rgba(245,234,216,0.16);

  --accent: #f6a06b;
  --accent-100: #3a2a1d;
  --accent-200: #4d3625;
  --accent-300: #7a4f2c;
  --accent-600: #ffc6a5;
  --accent-700: #ffc6a5;
  --accent-800: #ffe1d0;

  --sage: #aebf92;
  --sage-100: #2f3527;
  --sage-200: #3d472b;
  --sage-700: #ccdbb2;

  --neutral-200: #3a332a;
  --neutral-300: #4a4238;

  --danger: #f6a06b;

  --sh-sm: 0 1px 2px rgba(0,0,0,0.35);
  --sh-md: 0 3px 10px rgba(0,0,0,0.45);
  --sh-lg: 0 14px 36px rgba(0,0,0,0.55);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-b);
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  line-height: 1.5;
  min-height: 100vh;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
}
h1, h2, h3 { font-family: var(--font-h); font-weight: 400; line-height: 1.12; letter-spacing: -0.015em; }
input, button { font-family: inherit; color: inherit; }
:focus { outline: none; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
::selection { background: rgba(198,113,57,0.3); }
svg { display: block; }

/* ── header ── */
header {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; gap: 10px;
  padding: calc(14px + env(safe-area-inset-top)) 18px 14px;
  background: var(--bg);
}
header h1 { font-size: 23px; margin-right: auto; }
.hdr-date { font-size: 12px; color: var(--muted); text-transform: lowercase; }
.icon-btn {
  width: 44px; height: 44px; flex: none;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--divider); border-radius: 999px;
  background: transparent; color: var(--text); cursor: pointer;
}
.icon-btn:active { background: var(--surface); }

.wrap { max-width: 520px; margin: 0 auto; padding: 4px 18px calc(48px + env(safe-area-inset-bottom)); }

/* ── hero ring ── */
.hero {
  background: var(--surface); border-radius: var(--r-lg);
  box-shadow: var(--sh-sm);
  padding: 26px 20px 20px; text-align: center; margin-bottom: 26px;
}
.ring-wrap { position: relative; width: 176px; height: 176px; margin: 0 auto 16px; }
.ring-wrap svg { transform: rotate(-90deg); }
.ring-bg { fill: none; stroke: var(--neutral-300); stroke-width: 14; }
.ring-fill {
  fill: none; stroke: var(--accent); stroke-width: 14; stroke-linecap: round;
  transition: stroke-dashoffset .55s cubic-bezier(.4,0,.2,1), stroke .3s ease;
}
.ring-fill.done { stroke: var(--sage); }
.ring-label { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
.ring-label .pct { font-family: var(--font-h); font-size: 42px; line-height: 1; }
.ring-label .grams { font-size: 13px; font-weight: 600; color: var(--muted); margin-top: 5px; }
.hero-sub { font-size: 15px; color: var(--muted); }
.hero-sub b { color: var(--text); font-weight: 700; }
.hero-actions { display: flex; justify-content: center; gap: 10px; margin-top: 16px; }

/* ── buttons ── */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  min-height: 44px; padding: 0 18px;
  font-family: var(--font-h); font-size: 14px; line-height: 1;
  border: 1px solid transparent; border-radius: 999px;
  background: transparent; cursor: pointer;
}
.btn-primary { background: var(--accent); color: var(--bg); }
.btn-primary:active { background: var(--accent-600); }
.btn-secondary { border-color: var(--divider); color: var(--text); }
.btn-secondary:active { background: rgba(32,30,29,0.08); }
.btn-block { width: 100%; }
html[data-theme="dark"] .btn-primary { color: #1b1713; }

/* ── section labels ── */
.section-label {
  display: flex; align-items: baseline; justify-content: space-between; gap: 10px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--subtle); margin: 0 4px 12px;
}
.section-label span { letter-spacing: 0; text-transform: none; font-weight: 600; font-size: 11px; }

/* ── quick foods ── */
.food-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 28px; }
.food-btn {
  position: relative; text-align: left; cursor: pointer;
  background: var(--surface); border: 1px solid transparent;
  border-radius: var(--r-md); padding: 14px 15px 13px;
  box-shadow: var(--sh-sm); -webkit-appearance: none; appearance: none;
  min-height: 96px;
}
.food-btn:active { background: var(--neutral-200); }
.food-btn.used { background: var(--accent-100); border-color: var(--accent-300); }
.food-name { font-size: 14px; font-weight: 700; line-height: 1.25; padding-right: 26px; color: var(--text); }
.food-detail { font-size: 11px; color: var(--subtle); margin-top: 3px; }
.food-prot { font-family: var(--font-h); font-size: 16px; color: var(--accent-700); margin-top: 8px; }
.add-icon {
  position: absolute; top: 12px; right: 12px;
  width: 22px; height: 22px; border-radius: 999px;
  display: flex; align-items: center; justify-content: center;
  background: var(--surface-2); color: var(--muted);
}
.food-btn.used .add-icon { background: var(--accent); color: var(--bg); }
.used-badge {
  display: none; margin-top: 7px;
  font-size: 10px; font-weight: 700; letter-spacing: .02em;
  color: var(--accent-800); background: var(--accent-200);
  border-radius: 999px; padding: 2px 9px; width: fit-content;
}
.food-btn.used .used-badge { display: block; }

/* ── search card ── */
.card {
  background: var(--surface); border-radius: var(--r-lg);
  box-shadow: var(--sh-sm); padding: 16px; margin-bottom: 28px;
}
.search-wrap { position: relative; }
.search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--subtle); pointer-events: none; }
.search-input {
  width: 100%; min-height: 48px; padding: 0 44px 0 46px;
  font-size: 15px; background: var(--surface-2); color: var(--text);
  border: 1px solid var(--divider); border-radius: 999px;
  caret-color: var(--accent);
}
.search-input::placeholder { color: var(--subtle); }
.search-input:focus { border-color: var(--accent); }
.clear-btn {
  display: none; position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px; border-radius: 999px; border: none;
  background: var(--neutral-200); color: var(--muted);
  align-items: center; justify-content: center; cursor: pointer;
}

.dropdown {
  display: none; position: absolute; top: calc(100% + 8px); left: 0; right: 0; z-index: 400;
  background: var(--surface-2); border: 1px solid var(--divider);
  border-radius: var(--r-md); max-height: 260px; overflow-y: auto;
  box-shadow: var(--sh-lg); -webkit-overflow-scrolling: touch;
}
.taco-item {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 13px 16px; cursor: pointer; border-bottom: 1px solid var(--divider);
}
.taco-item:last-child { border-bottom: none; }
.taco-item:active { background: var(--accent-100); }
.taco-name { font-size: 14px; font-weight: 600; }
.taco-cat { font-size: 11px; color: var(--subtle); margin-top: 1px; }
.taco-val { font-family: var(--font-h); font-size: 13px; color: var(--accent-700); white-space: nowrap; }
.dropdown-empty { padding: 16px; font-size: 13px; color: var(--subtle); text-align: center; }

/* ── portion panel ── */
.portion {
  display: none; margin-top: 14px; padding: 16px;
  background: var(--sage-100); border-radius: var(--r-md);
}
.portion.open { display: block; animation: rise .22s ease; }
@keyframes rise { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }

.portion-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
.sel-name { font-family: var(--font-h); font-size: 16px; line-height: 1.2; }
.sel-rate { font-size: 11px; font-weight: 700; color: var(--sage-700); white-space: nowrap; }
.mini-label { font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--sage-700); margin-bottom: 7px; }
.pills { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 16px; }
.pill {
  min-height: 36px; display: inline-flex; align-items: center;
  padding: 0 14px; font-size: 13px; font-weight: 600;
  background: var(--surface-2); color: var(--muted);
  border: 1px solid var(--divider); border-radius: 999px; cursor: pointer;
}
.pill.active { background: var(--sage); border-color: var(--sage); color: var(--bg); }
html[data-theme="dark"] .pill.active { color: #1b1713; }

.portion-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.stepper {
  display: flex; align-items: center; height: 48px;
  background: var(--surface-2); border: 1px solid var(--divider);
  border-radius: 999px; overflow: hidden; flex: none;
}
.stepper button {
  width: 44px; height: 100%; border: none; background: none;
  font-size: 22px; font-weight: 700; cursor: pointer; color: var(--text);
}
.stepper button:active { background: var(--neutral-200); }
.stepper input {
  width: 46px; border: none; background: none; text-align: center;
  font-size: 17px; font-weight: 700; -moz-appearance: textfield;
}
.stepper input::-webkit-outer-spin-button, .stepper input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.prot-out { flex: 1 0 96px; min-width: 96px; text-align: center; }
.prot-out .cap { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--sage-700); }
.prot-out .val { font-family: var(--font-h); font-size: 21px; line-height: 1.1; color: var(--sage-700); }

/* ── goal panel ── */
.goal { display: none; }
.goal.open { display: block; }
.goal-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 14px; }
.goal-title { font-family: var(--font-h); font-size: 18px; }
.tag {
  font-size: 11px; padding: 4px 11px; border-radius: 999px;
  background: var(--accent-100); color: var(--accent-800);
}
.goal-summary {
  background: var(--surface-2); border-radius: var(--r-md);
  padding: 16px; text-align: center; margin-bottom: 18px;
}
.goal-summary .lbl { font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--subtle); }
.goal-summary .num { font-family: var(--font-h); font-size: 44px; line-height: 1.05; }
.goal-summary .unit { font-family: var(--font-h); font-size: 16px; color: var(--accent-700); }
.goal-summary .formula { font-size: 12px; color: var(--muted); margin-top: 2px; }
.control { margin-bottom: 18px; }
.control-top { display: flex; justify-content: space-between; gap: 10px; font-size: 13px; font-weight: 600; color: var(--muted); }
.control-val { font-family: var(--font-h); font-weight: 400; color: var(--accent-700); }
.control-val.sage { color: var(--sage-700); }
.range {
  width: 100%; height: 6px; border-radius: 999px; background: var(--neutral-300);
  -webkit-appearance: none; appearance: none; margin: 14px 0 2px;
}
.range::-webkit-slider-thumb {
  -webkit-appearance: none; width: 30px; height: 30px; border-radius: 999px;
  background: var(--accent); border: 3px solid var(--surface); box-shadow: var(--sh-sm);
}
.range.sage::-webkit-slider-thumb { background: var(--sage); }

/* ── history ── */
.history { background: var(--surface); border-radius: var(--r-lg); box-shadow: var(--sh-sm); overflow: hidden; }
.history-head {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 15px 18px; border-bottom: 1px solid var(--divider);
}
.history-head .h-t { font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--subtle); }
.history-head .h-n { font-family: var(--font-h); font-size: 14px; color: var(--accent-700); }
.log-list { list-style: none; }
.log-list li {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 12px 18px; border-bottom: 1px solid var(--divider);
}
.log-list li:last-child { border-bottom: none; }
.log-left { display: flex; align-items: center; gap: 11px; flex: 1; min-width: 0; }
.log-time { font-size: 11px; color: var(--subtle); min-width: 34px; font-variant-numeric: tabular-nums; }
.log-dot { width: 8px; height: 8px; border-radius: 999px; background: var(--sage); flex: none; }
.log-name { font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.log-right { display: flex; align-items: center; gap: 4px; flex: none; }
.log-prot { font-family: var(--font-h); font-size: 14px; color: var(--accent-700); }
.del-btn {
  width: 40px; height: 40px; border: none; background: none; color: var(--subtle);
  display: flex; align-items: center; justify-content: center; cursor: pointer; border-radius: 999px;
}
.del-btn:active { background: var(--neutral-200); }
.empty-log { font-size: 14px; color: var(--subtle); text-align: center; padding: 30px 20px; }

/* ── modal ── */
.backdrop {
  display: none; position: fixed; inset: 0; z-index: 1000;
  background: rgba(46,43,37,0.55); padding: 24px;
  align-items: center; justify-content: center;
}
.backdrop.open { display: flex; }
.dialog {
  width: min(400px, 100%); background: var(--surface);
  border-radius: var(--r-lg); box-shadow: var(--sh-lg); padding: 22px;
}
.dialog h3 { font-size: 21px; margin-bottom: 8px; }
.dialog p { font-size: 14px; color: var(--muted); margin-bottom: 20px; }
.dialog-actions { display: flex; gap: 10px; }
.dialog-actions .btn { flex: 1; }
.btn-danger { background: var(--danger); color: var(--bg); }
html[data-theme="dark"] .btn-danger { color: #1b1713; }
</style>
</head>
<body>

<header>
  <h1>Meta Proteica</h1>
  <span class="hdr-date" id="headerDate"></span>
  <button class="icon-btn" id="themeBtn" onclick="toggleThemeManual()" aria-label="Alternar dia e noite"></button>
  <button class="icon-btn" onclick="toggleGoalCard()" aria-label="Ajustar meta">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  </button>
</header>

<div class="wrap">

  <div class="card goal" id="goalCard">
    <div class="goal-head">
      <div class="goal-title">Meta diária</div>
      <span class="tag">g/kg × kg</span>
    </div>
    <div class="goal-summary">
      <div class="lbl">Meta calculada</div>
      <div><span class="num" id="calcGoalVal">140</span> <span class="unit">g / dia</span></div>
      <div class="formula"><span id="formulaRatio">2,0 g/kg</span> × <span id="formulaWeight">70 kg</span></div>
    </div>
    <div class="control">
      <div class="control-top"><span>Ingestão desejada</span><span class="control-val" id="ratioBadge">2,0 g/kg</span></div>
      <input type="range" class="range" id="ratioSlider" min="1.0" max="2.0" step="0.1" value="2.0" />
    </div>
    <div class="control">
      <div class="control-top"><span>Peso corporal</span><span class="control-val sage" id="weightBadge">70 kg</span></div>
      <input type="range" class="range sage" id="weightSlider" min="40" max="100" step="1" value="70" />
    </div>
    <button class="btn btn-primary btn-block" onclick="saveCustomGoal()">Aplicar meta</button>
  </div>

  <div class="hero">
    <div class="ring-wrap">
      <svg width="176" height="176" viewBox="0 0 176 176">
        <circle class="ring-bg" cx="88" cy="88" r="74"/>
        <circle class="ring-fill" id="ringFill" cx="88" cy="88" r="74" stroke-dasharray="464.96" stroke-dashoffset="464.96"/>
      </svg>
      <div class="ring-label">
        <div class="pct" id="pctLabel">0%</div>
        <div class="grams" id="gramLabel">0 / 140 g</div>
      </div>
    </div>
    <div class="hero-sub">Faltam <b id="remaining">140 g</b> para a meta</div>
    <div class="hero-actions">
      <button class="btn btn-secondary" onclick="toggleGoalCard()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
        Meta
      </button>
      <button class="btn btn-secondary" onclick="resetDay()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>
        Resetar dia
      </button>
    </div>
  </div>

  <div class="section-label">Alimentos rápidos <span>1 toque adiciona</span></div>
  <div class="food-grid" id="foodGrid"></div>

  <div class="section-label">Buscar na TACO <span>597 alimentos</span></div>
  <div class="card">
    <div class="search-wrap">
      <span class="search-icon">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      </span>
      <input type="text" class="search-input" id="tacoSearchInput" placeholder="ovo, pão, atum…" autocomplete="off" oninput="onTacoSearch(this.value)"/>
      <button class="clear-btn" id="clearBtn" onclick="clearSearch()" aria-label="Limpar busca">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <div class="dropdown" id="tacoDropdown"></div>
    </div>

    <div class="portion" id="portionBox">
      <div class="portion-head">
        <div class="sel-name" id="selectedFoodTitle">Alimento</div>
        <div class="sel-rate" id="selectedFoodRate">0,0 g / 100 g</div>
      </div>
      <div class="mini-label">Medida caseira</div>
      <div class="pills" id="unitPillsRow"></div>
      <div class="portion-row">
        <div class="stepper">
          <button onclick="changeQty(-1)" aria-label="Diminuir">−</button>
          <input type="number" id="portionQtyInput" value="1" min="0.1" step="any" oninput="onQtyChange(this.value)"/>
          <button onclick="changeQty(1)" aria-label="Aumentar">+</button>
        </div>
        <div class="prot-out">
          <div class="cap">Proteína</div>
          <div class="val" id="portionProtVal">0,0g</div>
        </div>
      </div>
      <button class="btn btn-primary btn-block" onclick="commitTacoEntry()">Adicionar</button>
    </div>
  </div>

  <div class="history">
    <div class="history-head">
      <span class="h-t">Hoje</span>
      <span class="h-n" id="histTotal">0 g</span>
    </div>
    <ul class="log-list" id="logList"></ul>
    <div class="empty-log" id="emptyLog">Nada registrado ainda hoje.</div>
  </div>
</div>

<div class="backdrop" id="confirmModal">
  <div class="dialog">
    <h3>Resetar o dia?</h3>
    <p>Todos os registros de hoje serão apagados.</p>
    <div class="dialog-actions">
      <button class="btn btn-secondary" onclick="closeResetModal()">Cancelar</button>
      <button class="btn btn-danger" onclick="confirmResetDay()">Sim, resetar</button>
    </div>
  </div>
</div>

<script>
  var GOAL = 140;
  var USER_RATIO = 2.0;
  var USER_WEIGHT = 70;
  var CIRCUMFERENCE = 2 * Math.PI * 74;

  var SUN = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z"/></svg>';

  var isDarkMode = false;
  var manualThemeOverride = false;

  function checkAutoTheme() {
    if (manualThemeOverride) return;
    var hour = new Date().getHours();
    setTheme(hour >= 18 || hour < 6);
  }
  function setTheme(dark) {
    isDarkMode = dark;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    document.getElementById("themeBtn").innerHTML = dark ? MOON : SUN;
  }
  function toggleThemeManual() {
    manualThemeOverride = true;
    setTheme(!isDarkMode);
  }

  var FOODS = [
    { name: "Frango grelhado",     detail: "70 g (1 porção)",     prot: 22   },
    { name: "Leite desnatado",     detail: "200 ml (1 copo)",     prot: 6.6  },
    { name: "Whey Protein",        detail: "50 g (1 scoop)",      prot: 30   },
    { name: "Queijo Minas Frescal",detail: "60 g (2 fatias)",     prot: 10.4 },
    { name: "Cottage",             detail: "50 g (~2 col. sopa)", prot: 7    },
    { name: "Polenguinho",         detail: "20 g (1 unidade)",    prot: 2    },
    { name: "Atum (escorrido)",    detail: "120 g (1 lata)",      prot: 31   },
    { name: "Ovo médio",           detail: "45 g",                prot: 6    },
    { name: "Ovo grande",          detail: "50 g",                prot: 6.6  },
    { name: "Ovo jumbo / caipira", detail: "60 g",                prot: 8    },
    { name: "YoPro 15g",           detail: "250 ml (1 unidade)",  prot: 15   },
    { name: "Yakult",              detail: "80 g (1 unidade)",    prot: 1    },
    { name: "Requeijão Cremoso",   detail: "15 g (1 col. sopa)",  prot: 1.4  }
  ];

  var HOUSEHOLD_RULES = [
    { match: ["pao", "forma"], units: [{ id: "fatia", label: "fatia (25g)", factor: 25, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 50, step: 10 }] },
    { match: ["pao", "frances"], units: [{ id: "un", label: "unidade (50g)", factor: 50, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 50, step: 10 }] },
    { match: ["pao de queijo"], units: [{ id: "un", label: "unidade média (30g)", factor: 30, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 60, step: 10 }] },
    { match: ["torrada"], units: [{ id: "un", label: "unidade (10g)", factor: 10, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 30, step: 10 }] },
    { match: ["biscoito"], units: [{ id: "un", label: "unidade (~10g)", factor: 10, def: 3, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 30, step: 10 }] },
    { match: ["bolo"], units: [{ id: "fatia", label: "fatia média (60g)", factor: 60, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 60, step: 10 }] },
    { match: ["codorna"], units: [{ id: "un", label: "unidade (10g)", factor: 10, def: 5, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 50, step: 10 }] },
    { match: ["clara"], units: [{ id: "un", label: "clara (30g)", factor: 30, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["ovo"], units: [{ id: "un", label: "unidade média (50g)", factor: 50, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["queijo", "minas"], units: [{ id: "fatia", label: "fatia média (30g)", factor: 30, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 60, step: 10 }] },
    { match: ["queijo", "mussarela"], units: [{ id: "fatia", label: "fatia (15g)", factor: 15, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 30, step: 10 }] },
    { match: ["queijo", "prato"], units: [{ id: "fatia", label: "fatia (15g)", factor: 15, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 30, step: 10 }] },
    { match: ["queijo"], units: [{ id: "fatia", label: "fatia média (20g)", factor: 20, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 40, step: 10 }] },
    { match: ["cottage"], units: [{ id: "colher", label: "col. sopa (25g)", factor: 25, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 50, step: 10 }] },
    { match: ["polenguinho"], units: [{ id: "un", label: "unidade (20g)", factor: 20, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 20, step: 5 }] },
    { match: ["requeijao"], units: [{ id: "colher", label: "col. sopa (15g)", factor: 15, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 30, step: 5 }] },
    { match: ["iogurte"], units: [{ id: "pote", label: "pote/un (170g)", factor: 170, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 170, step: 10 }] },
    { match: ["leite"], units: [{ id: "copo", label: "copo (200ml)", factor: 200, def: 1, step: 1 }, { id: "ml", label: "mL", factor: 1, def: 200, step: 50 }, { id: "g", label: "gramas (g)", factor: 1, def: 200, step: 50 }] },
    { match: ["whey"], units: [{ id: "scoop", label: "scoop (30g)", factor: 30, def: 1, step: 0.5 }, { id: "g", label: "gramas (g)", factor: 1, def: 30, step: 5 }] },
    { match: ["yopro"], units: [{ id: "un", label: "garrafa (250ml)", factor: 250, def: 1, step: 1 }, { id: "ml", label: "mL", factor: 1, def: 250, step: 25 }] },
    { match: ["atum"], units: [{ id: "lata", label: "lata drenada (120g)", factor: 120, def: 1, step: 0.5 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["sardinha"], units: [{ id: "lata", label: "lata drenada (85g)", factor: 85, def: 1, step: 0.5 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["frango", "peito"], units: [{ id: "file", label: "filé médio (100g)", factor: 100, def: 1, step: 0.5 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["frango"], units: [{ id: "file", label: "filé / porção (100g)", factor: 100, def: 1, step: 0.5 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["patinho"], units: [{ id: "bife", label: "bife médio (100g)", factor: 100, def: 1, step: 0.5 }, { id: "colher", label: "col. sopa moída (25g)", factor: 25, def: 4, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["carne"], units: [{ id: "bife", label: "bife médio (100g)", factor: 100, def: 1, step: 0.5 }, { id: "colher", label: "col. sopa moída (25g)", factor: 25, def: 4, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["peixe"], units: [{ id: "file", label: "filé médio (100g)", factor: 100, def: 1, step: 0.5 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["arroz"], units: [{ id: "colher", label: "col. sopa cheia (25g)", factor: 25, def: 4, step: 1 }, { id: "escumadeira", label: "escumadeira (100g)", factor: 100, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["feijao"], units: [{ id: "concha", label: "concha média (130g)", factor: 130, def: 1, step: 0.5 }, { id: "colher", label: "col. sopa (20g)", factor: 20, def: 4, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["lentilha"], units: [{ id: "concha", label: "concha (130g)", factor: 130, def: 1, step: 0.5 }, { id: "colher", label: "col. sopa (20g)", factor: 20, def: 4, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["grao-de-bico"], units: [{ id: "concha", label: "concha (130g)", factor: 130, def: 1, step: 0.5 }, { id: "colher", label: "col. sopa (20g)", factor: 20, def: 4, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 100, step: 10 }] },
    { match: ["aveia"], units: [{ id: "colher", label: "col. sopa (15g)", factor: 15, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 30, step: 5 }] },
    { match: ["granola"], units: [{ id: "colher", label: "col. sopa (20g)", factor: 20, def: 2, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 40, step: 5 }] },
    { match: ["banana"], units: [{ id: "un", label: "unidade média (70g)", factor: 70, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 70, step: 10 }] },
    { match: ["maca"], units: [{ id: "un", label: "unidade média (130g)", factor: 130, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 130, step: 10 }] },
    { match: ["laranja"], units: [{ id: "un", label: "unidade média (120g)", factor: 120, def: 1, step: 1 }, { id: "g", label: "gramas (g)", factor: 1, def: 120, step: 10 }] }
  ];

  var TACO_DATABASE = [[1, "Arroz, integral, cozido", 2.6, "Cereais e derivados"], [2, "Arroz, integral, cru", 7.3, "Cereais e derivados"], [3, "Arroz, tipo 1, cozido", 2.5, "Cereais e derivados"], [4, "Arroz, tipo 1, cru", 7.2, "Cereais e derivados"], [5, "Arroz, tipo 2, cozido", 2.6, "Cereais e derivados"], [6, "Arroz, tipo 2, cru", 7.2, "Cereais e derivados"], [7, "Aveia, flocos, crua", 13.9, "Cereais e derivados"], [8, "Biscoito, doce, maisena", 8.1, "Cereais e derivados"], [9, "Biscoito, doce, recheado com chocolate", 6.4, "Cereais e derivados"], [10, "Biscoito, doce, recheado com morango", 5.7, "Cereais e derivados"], [11, "Biscoito, doce, wafer, recheado de chocolate", 5.6, "Cereais e derivados"], [12, "Biscoito, doce, wafer, recheado de morango", 4.5, "Cereais e derivados"], [13, "Biscoito, salgado, cream cracker", 10.1, "Cereais e derivados"], [14, "Bolo, mistura para", 6.2, "Cereais e derivados"], [15, "Bolo, pronto, aipim", 4.4, "Cereais e derivados"], [16, "Bolo, pronto, chocolate", 6.2, "Cereais e derivados"], [17, "Bolo, pronto, coco", 5.7, "Cereais e derivados"], [18, "Bolo, pronto, milho", 4.8, "Cereais e derivados"], [19, "Canjica, branca, crua", 7.2, "Cereais e derivados"], [20, "Canjica, com leite integral", 2.4, "Cereais e derivados"], [21, "Cereais, milho, flocos, com sal", 7.3, "Cereais e derivados"], [22, "Cereais, milho, flocos, sem sal", 6.9, "Cereais e derivados"], [23, "Cereais, mingau, milho, infantil", 6.4, "Cereais e derivados"], [24, "Cereais, mistura para vitamina, trigo, cevada e aveia", 8.9, "Cereais e derivados"], [25, "Cereal matinal, milho", 7.2, "Cereais e derivados"], [26, "Cereal matinal, milho, açúcar", 4.7, "Cereais e derivados"], [27, "Creme de arroz, pó", 7.0, "Cereais e derivados"], [28, "Creme de milho, pó", 4.8, "Cereais e derivados"], [29, "Curau, milho verde", 2.4, "Cereais e derivados"], [30, "Curau, milho verde, mistura para", 2.2, "Cereais e derivados"], [31, "Farinha, de arroz, enriquecida", 1.3, "Cereais e derivados"], [32, "Farinha, de centeio, integral", 12.5, "Cereais e derivados"], [33, "Farinha, de milho, amarela", 7.2, "Cereais e derivados"], [34, "Farinha, de rosca", 11.4, "Cereais e derivados"], [35, "Farinha, de trigo", 9.8, "Cereais e derivados"], [36, "Farinha, láctea, de cereais", 11.9, "Cereais e derivados"], [37, "Lasanha, massa fresca, cozida", 5.8, "Cereais e derivados"], [38, "Lasanha, massa fresca, crua", 7.0, "Cereais e derivados"], [39, "Macarrão, instantâneo", 8.8, "Cereais e derivados"], [40, "Macarrão, trigo, cru", 10.0, "Cereais e derivados"], [41, "Macarrão, trigo, cru, com ovos", 10.3, "Cereais e derivados"], [42, "Milho, amido, cru", 0.6, "Cereais e derivados"], [43, "Milho, fubá, cru", 7.2, "Cereais e derivados"], [44, "Milho, verde, cru", 6.6, "Cereais e derivados"], [45, "Milho, verde, enlatado, drenado", 3.2, "Cereais e derivados"], [46, "Mingau tradicional, pó", 0.6, "Cereais e derivados"], [47, "Pamonha, barra para cozimento, pré-cozida", 2.6, "Cereais e derivados"], [48, "Pão, aveia, forma", 12.3, "Cereais e derivados"], [49, "Pão, de soja", 11.3, "Cereais e derivados"], [50, "Pão, glúten, forma", 12.0, "Cereais e derivados"], [51, "Pão, milho, forma", 8.3, "Cereais e derivados"], [52, "Pão, trigo, forma, integral", 9.4, "Cereais e derivados"], [53, "Pão, trigo, francês", 8.0, "Cereais e derivados"], [54, "Pão, trigo, sovado", 8.4, "Cereais e derivados"], [55, "Pastel, de carne, cru", 10.7, "Cereais e derivados"], [56, "Pastel, de carne, frito", 10.1, "Cereais e derivados"], [57, "Pastel, de queijo, cru", 9.9, "Cereais e derivados"], [58, "Pastel, de queijo, frito", 8.7, "Cereais e derivados"], [59, "Pastel, massa, crua", 6.9, "Cereais e derivados"], [60, "Pastel, massa, frita", 6.0, "Cereais e derivados"], [61, "Pipoca, com óleo de soja, sem sal", 9.9, "Cereais e derivados"], [62, "Polenta, pré-cozida", 2.3, "Cereais e derivados"], [63, "Torrada, pão francês", 10.5, "Cereais e derivados"], [64, "Abóbora, cabotian, cozida", 1.4, "Verduras, hortaliças e derivados"], [65, "Abóbora, cabotian, crua", 1.7, "Verduras, hortaliças e derivados"], [66, "Abóbora, menina brasileira, crua", 0.6, "Verduras, hortaliças e derivados"], [67, "Abóbora, moranga, crua", 1.0, "Verduras, hortaliças e derivados"], [68, "Abóbora, moranga, refogada", 0.4, "Verduras, hortaliças e derivados"], [69, "Abóbora, pescoço, crua", 0.7, "Verduras, hortaliças e derivados"], [70, "Abobrinha, italiana, cozida", 1.1, "Verduras, hortaliças e derivados"], [71, "Abobrinha, italiana, crua", 1.1, "Verduras, hortaliças e derivados"], [72, "Abobrinha, italiana, refogada", 1.1, "Verduras, hortaliças e derivados"], [73, "Abobrinha, paulista, crua", 0.6, "Verduras, hortaliças e derivados"], [74, "Acelga, crua", 1.4, "Verduras, hortaliças e derivados"], [75, "Agrião, cru", 2.7, "Verduras, hortaliças e derivados"], [76, "Aipo, cru", 0.8, "Verduras, hortaliças e derivados"], [77, "Alface, americana, crua", 0.6, "Verduras, hortaliças e derivados"], [78, "Alface, crespa, crua", 1.3, "Verduras, hortaliças e derivados"], [79, "Alface, lisa, crua", 1.7, "Verduras, hortaliças e derivados"], [80, "Alface, roxa, crua", 0.9, "Verduras, hortaliças e derivados"], [81, "Alfavaca, crua", 2.7, "Verduras, hortaliças e derivados"], [82, "Alho, cru", 7.0, "Verduras, hortaliças e derivados"], [83, "Alho-poró, cru", 1.4, "Verduras, hortaliças e derivados"], [84, "Almeirão, cru", 1.8, "Verduras, hortaliças e derivados"], [85, "Almeirão, refogado", 1.7, "Verduras, hortaliças e derivados"], [86, "Batata, baroa, cozida", 0.9, "Verduras, hortaliças e derivados"], [87, "Batata, baroa, crua", 1.0, "Verduras, hortaliças e derivados"], [88, "Batata, doce, cozida", 0.6, "Verduras, hortaliças e derivados"], [89, "Batata, doce, crua", 1.3, "Verduras, hortaliças e derivados"], [90, "Batata, frita, tipo chips, industrializada", 5.6, "Verduras, hortaliças e derivados"], [91, "Batata, inglesa, cozida", 1.2, "Verduras, hortaliças e derivados"], [92, "Batata, inglesa, crua", 1.8, "Verduras, hortaliças e derivados"], [93, "Batata, inglesa, frita", 5.0, "Verduras, hortaliças e derivados"], [94, "Batata, inglesa, sauté", 1.3, "Verduras, hortaliças e derivados"], [95, "Berinjela, cozida", 0.7, "Verduras, hortaliças e derivados"], [96, "Berinjela, crua", 1.2, "Verduras, hortaliças e derivados"], [97, "Beterraba, cozida", 1.3, "Verduras, hortaliças e derivados"], [98, "Beterraba, crua", 1.9, "Verduras, hortaliças e derivados"], [99, "Biscoito, polvilho doce", 1.3, "Verduras, hortaliças e derivados"], [100, "Brócolis, cozido", 2.1, "Verduras, hortaliças e derivados"], [101, "Brócolis, cru", 3.6, "Verduras, hortaliças e derivados"], [102, "Cará, cozido", 1.5, "Verduras, hortaliças e derivados"], [103, "Cará, cru", 2.3, "Verduras, hortaliças e derivados"], [104, "Caruru, cru", 3.2, "Verduras, hortaliças e derivados"], [105, "Catalonha, crua", 1.9, "Verduras, hortaliças e derivados"], [106, "Catalonha, refogada", 1.9, "Verduras, hortaliças e derivados"], [107, "Cebola, crua", 1.7, "Verduras, hortaliças e derivados"], [108, "Cebolinha, crua", 1.9, "Verduras, hortaliças e derivados"], [109, "Cenoura, cozida", 0.8, "Verduras, hortaliças e derivados"], [110, "Cenoura, crua", 1.3, "Verduras, hortaliças e derivados"], [111, "Chicória, crua", 1.1, "Verduras, hortaliças e derivados"], [112, "Chuchu, cozido", 0.4, "Verduras, hortaliças e derivados"], [113, "Chuchu, cru", 0.7, "Verduras, hortaliças e derivados"], [114, "Coentro, folhas desidratadas", 20.9, "Verduras, hortaliças e derivados"], [115, "Couve, manteiga, crua", 2.9, "Verduras, hortaliças e derivados"], [116, "Couve, manteiga, refogada ", 1.7, "Verduras, hortaliças e derivados"], [117, "Couve-flor, crua", 1.9, "Verduras, hortaliças e derivados"], [118, "Couve-flor, cozida", 1.2, "Verduras, hortaliças e derivados"], [119, "Espinafre, Nova Zelândia, cru", 2.0, "Verduras, hortaliças e derivados"], [120, "Espinafre, Nova Zelândia, refogado", 2.7, "Verduras, hortaliças e derivados"], [121, "Farinha, de mandioca, crua", 1.6, "Verduras, hortaliças e derivados"], [122, "Farinha, de mandioca, torrada", 1.2, "Verduras, hortaliças e derivados"], [123, "Farinha, de puba", 1.6, "Verduras, hortaliças e derivados"], [124, "Fécula, de mandioca", 0.5, "Verduras, hortaliças e derivados"], [125, "Feijão, broto, cru", 4.2, "Verduras, hortaliças e derivados"], [126, "Inhame, cru", 2.1, "Verduras, hortaliças e derivados"], [127, "Jiló, cru", 1.4, "Verduras, hortaliças e derivados"], [128, "Jurubeba, crua", 4.4, "Verduras, hortaliças e derivados"], [129, "Mandioca, cozida", 0.6, "Verduras, hortaliças e derivados"], [130, "Mandioca, crua", 1.1, "Verduras, hortaliças e derivados"], [131, "Mandioca, farofa, temperada", 2.1, "Verduras, hortaliças e derivados"], [132, "Mandioca, frita", 1.4, "Verduras, hortaliças e derivados"], [133, "Manjericão, cru", 2.0, "Verduras, hortaliças e derivados"], [134, "Maxixe, cru", 1.4, "Verduras, hortaliças e derivados"], [135, "Mostarda, folha, crua", 2.1, "Verduras, hortaliças e derivados"], [136, "Nhoque, batata, cozido", 5.9, "Verduras, hortaliças e derivados"], [137, "Nabo, cru", 1.2, "Verduras, hortaliças e derivados"], [138, "Palmito, juçara, em conserva", 1.8, "Verduras, hortaliças e derivados"], [139, "Palmito, pupunha, em conserva", 2.5, "Verduras, hortaliças e derivados"], [140, "Pão, de queijo, assado", 5.1, "Verduras, hortaliças e derivados"], [141, "Pão, de queijo, cru", 3.6, "Verduras, hortaliças e derivados"], [142, "Pepino, cru", 0.9, "Verduras, hortaliças e derivados"], [143, "Pimentão, amarelo, cru", 1.2, "Verduras, hortaliças e derivados"], [144, "Pimentão, verde, cru", 1.1, "Verduras, hortaliças e derivados"], [145, "Pimentão, vermelho, cru", 1.0, "Verduras, hortaliças e derivados"], [146, "Polvilho, doce", 0.4, "Verduras, hortaliças e derivados"], [147, "Quiabo, cru", 1.9, "Verduras, hortaliças e derivados"], [148, "Rabanete, cru", 1.4, "Verduras, hortaliças e derivados"], [149, "Repolho, branco, cru", 0.9, "Verduras, hortaliças e derivados"], [150, "Repolho, roxo, cru", 1.9, "Verduras, hortaliças e derivados"], [151, "Repolho, roxo, refogado", 1.8, "Verduras, hortaliças e derivados"], [152, "Rúcula, crua", 1.8, "Verduras, hortaliças e derivados"], [153, "Salsa, crua", 3.3, "Verduras, hortaliças e derivados"], [154, "Seleta de legumes, enlatada", 3.4, "Verduras, hortaliças e derivados"], [155, "Serralha, crua", 2.7, "Verduras, hortaliças e derivados"], [156, "Taioba, crua", 2.9, "Verduras, hortaliças e derivados"], [157, "Tomate, com semente, cru", 1.1, "Verduras, hortaliças e derivados"], [158, "Tomate, extrato", 2.4, "Verduras, hortaliças e derivados"], [159, "Tomate, molho industrializado", 1.4, "Verduras, hortaliças e derivados"], [160, "Tomate, purê", 1.4, "Verduras, hortaliças e derivados"], [161, "Tomate, salada", 0.8, "Verduras, hortaliças e derivados"], [162, "Vagem, crua", 1.8, "Verduras, hortaliças e derivados"], [163, "Abacate, cru", 1.2, "Frutas e derivados"], [164, "Abacaxi, cru", 0.9, "Frutas e derivados"], [165, "Abacaxi, polpa, congelada", 0.5, "Frutas e derivados"], [166, "Abiu, cru", 0.8, "Frutas e derivados"], [167, "Açaí, polpa, com xarope de guaraná e glucose", 0.7, "Frutas e derivados"], [168, "Açaí, polpa, congelada", 0.8, "Frutas e derivados"], [169, "Acerola, crua", 0.9, "Frutas e derivados"], [170, "Acerola, polpa, congelada", 0.6, "Frutas e derivados"], [171, "Ameixa, calda, enlatada ", 0.4, "Frutas e derivados"], [172, "Ameixa, crua", 0.8, "Frutas e derivados"], [173, "Ameixa, em calda, enlatada, drenada ", 1.0, "Frutas e derivados"], [174, "Atemóia, crua", 1.0, "Frutas e derivados"], [175, "Banana, da terra, crua", 1.4, "Frutas e derivados"], [176, "Banana, doce em barra", 2.2, "Frutas e derivados"], [177, "Banana, figo, crua", 1.1, "Frutas e derivados"], [178, "Banana, maçã, crua", 1.8, "Frutas e derivados"], [179, "Banana, nanica, crua", 1.4, "Frutas e derivados"], [180, "Banana, ouro, crua", 1.5, "Frutas e derivados"], [181, "Banana, pacova, crua", 1.2, "Frutas e derivados"], [182, "Banana, prata, crua", 1.3, "Frutas e derivados"], [183, "Cacau, cru", 1.0, "Frutas e derivados"], [184, "Cajá-Manga, cru", 1.3, "Frutas e derivados"], [185, "Cajá, polpa, congelada", 0.6, "Frutas e derivados"], [186, "Caju, cru", 1.0, "Frutas e derivados"], [187, "Caju, polpa, congelada", 0.5, "Frutas e derivados"], [188, "Caju, suco concentrado, envasado", 0.4, "Frutas e derivados"], [189, "Caqui, chocolate, cru", 0.4, "Frutas e derivados"], [190, "Carambola, crua", 0.9, "Frutas e derivados"], [191, "Ciriguela, crua", 1.4, "Frutas e derivados"], [192, "Cupuaçu, cru", 1.2, "Frutas e derivados"], [193, "Cupuaçu, polpa, congelada", 0.8, "Frutas e derivados"], [194, "Figo, cru", 1.0, "Frutas e derivados"], [195, "Figo, enlatado, em calda", 0.6, "Frutas e derivados"], [196, "Fruta-pão, crua", 1.1, "Frutas e derivados"], [197, "Goiaba, branca, com casca, crua", 0.9, "Frutas e derivados"], [198, "Goiaba, doce em pasta", 0.6, "Frutas e derivados"], [199, "Goiaba, doce, cascão", 0.4, "Frutas e derivados"], [200, "Goiaba, vermelha, com casca, crua", 1.1, "Frutas e derivados"], [201, "Graviola, crua", 0.8, "Frutas e derivados"], [202, "Graviola, polpa, congelada", 0.6, "Frutas e derivados"], [203, "Jabuticaba, crua", 0.6, "Frutas e derivados"], [204, "Jaca, crua", 1.4, "Frutas e derivados"], [205, "Jambo, cru", 0.9, "Frutas e derivados"], [206, "Jamelão, cru", 0.5, "Frutas e derivados"], [207, "Kiwi, cru", 1.3, "Frutas e derivados"], [208, "Laranja, baía, crua", 1.0, "Frutas e derivados"], [209, "Laranja, baía, suco", 0.7, "Frutas e derivados"], [210, "Laranja, da terra, crua", 1.1, "Frutas e derivados"], [211, "Laranja, da terra, suco", 0.7, "Frutas e derivados"], [212, "Laranja, lima, crua", 1.1, "Frutas e derivados"], [213, "Laranja, lima, suco", 0.7, "Frutas e derivados"], [214, "Laranja, pêra, crua", 1.0, "Frutas e derivados"], [215, "Laranja, pêra, suco", 0.7, "Frutas e derivados"], [216, "Laranja, valência, crua", 0.8, "Frutas e derivados"], [217, "Laranja, valência, suco", 0.5, "Frutas e derivados"], [218, "Limão, cravo, suco", 0.3, "Frutas e derivados"], [219, "Limão, galego, suco", 0.6, "Frutas e derivados"], [220, "Limão, tahiti, cru", 0.9, "Frutas e derivados"], [221, "Maçã, Argentina, com casca, crua", 0.2, "Frutas e derivados"], [222, "Maçã, Fuji, com casca, crua", 0.3, "Frutas e derivados"], [223, "Macaúba, crua", 2.1, "Frutas e derivados"], [224, " Mamão, doce em calda, drenado", 0.2, "Frutas e derivados"], [225, "Mamão, Formosa, cru", 0.8, "Frutas e derivados"], [226, "Mamão, Papaia, cru", 0.5, "Frutas e derivados"], [227, " Mamão verde, doce em calda, drenado", 0.3, "Frutas e derivados"], [228, "Manga, Haden, crua", 0.4, "Frutas e derivados"], [229, "Manga, Palmer, crua", 0.4, "Frutas e derivados"], [230, "Manga, polpa, congelada", 0.4, "Frutas e derivados"], [231, "Manga, Tommy Atkins, crua", 0.9, "Frutas e derivados"], [232, "Maracujá, cru", 2.0, "Frutas e derivados"], [233, "Maracujá, polpa, congelada", 0.8, "Frutas e derivados"], [234, "Maracujá, suco concentrado, envasado", 0.8, "Frutas e derivados"], [235, "Melancia, crua", 0.9, "Frutas e derivados"], [236, "Melão, cru", 0.7, "Frutas e derivados"], [237, "Mexerica, Murcote, crua", 0.9, "Frutas e derivados"], [238, "Mexerica, Rio, crua", 0.7, "Frutas e derivados"], [239, "Morango, cru", 0.9, "Frutas e derivados"], [240, "Nêspera, crua", 0.3, "Frutas e derivados"], [241, "Pequi, cru", 2.3, "Frutas e derivados"], [242, "Pêra, Park, crua", 0.2, "Frutas e derivados"], [243, "Pêra, Williams, crua", 0.6, "Frutas e derivados"], [244, "Pêssego, Aurora, cru", 0.8, "Frutas e derivados"], [245, "Pêssego, enlatado, em calda", 0.7, "Frutas e derivados"], [246, "Pinha, crua", 1.5, "Frutas e derivados"], [247, "Pitanga, crua", 0.9, "Frutas e derivados"], [248, "Pitanga, polpa, congelada", 0.3, "Frutas e derivados"], [249, "Romã, crua", 0.4, "Frutas e derivados"], [250, "Tamarindo, cru", 3.2, "Frutas e derivados"], [251, "Tangerina, Poncã, crua", 0.8, "Frutas e derivados"], [252, "Tangerina, Poncã, suco", 0.5, "Frutas e derivados"], [253, "Tucumã, cru", 2.1, "Frutas e derivados"], [254, "Umbu, cru", 0.8, "Frutas e derivados"], [255, "Umbu, polpa, congelada", 0.5, "Frutas e derivados"], [256, "Uva, Itália, crua", 0.7, "Frutas e derivados"], [257, "Uva, Rubi, crua", 0.6, "Frutas e derivados"], [258, "Uva, suco concentrado, envasado", 0.0, "Frutas e derivados"], [259, "Azeite, de dendê", 0.0, "Gorduras e óleos"], [260, "Azeite, de oliva, extra virgem", 0.0, "Gorduras e óleos"], [261, "Manteiga, com sal", 0.4, "Gorduras e óleos"], [262, "Manteiga, sem sal", 0.4, "Gorduras e óleos"], [263, "Margarina, com óleo hidrogenado, com sal (65% de lipídeos)", 0.0, "Gorduras e óleos"], [264, "Margarina, com óleo hidrogenado, sem sal (80% de lipídeos)", 0.0, "Gorduras e óleos"], [265, "Margarina, com óleo interesterificado, com sal (65%de lipídeos)", 0.0, "Gorduras e óleos"], [266, "Margarina, com óleo interesterificado, sem sal (65% de lipídeos)", 0.0, "Gorduras e óleos"], [267, "Óleo, de babaçu", 0.0, "Gorduras e óleos"], [268, "Óleo, de canola", 0.0, "Gorduras e óleos"], [269, "Óleo, de girassol", 0.0, "Gorduras e óleos"], [270, "Óleo, de milho", 0.0, "Gorduras e óleos"], [271, "Óleo, de pequi", 0.0, "Gorduras e óleos"], [272, "Óleo, de soja", 0.0, "Gorduras e óleos"], [273, "Abadejo, filé, congelado, assado", 23.5, "Pescados e frutos do mar"], [274, "Abadejo, filé, congelado,cozido", 19.3, "Pescados e frutos do mar"], [275, "Abadejo, filé, congelado, cru", 13.1, "Pescados e frutos do mar"], [276, "Abadejo, filé, congelado, grelhado", 27.6, "Pescados e frutos do mar"], [277, "Atum, conserva em óleo", 26.2, "Pescados e frutos do mar"], [278, "Atum, fresco, cru", 25.7, "Pescados e frutos do mar"], [279, "Bacalhau, salgado, cru", 29.0, "Pescados e frutos do mar"], [280, "Bacalhau, salgado, refogado", 24.0, "Pescados e frutos do mar"], [281, "Cação, posta, com farinha de trigo, frita", 25.0, "Pescados e frutos do mar"], [282, "Cação, posta, cozida", 25.6, "Pescados e frutos do mar"], [283, "Cação, posta, crua", 17.9, "Pescados e frutos do mar"], [284, "Camarão, Rio Grande, grande, cozido", 19.0, "Pescados e frutos do mar"], [285, "Camarão, Rio Grande, grande, cru", 10.0, "Pescados e frutos do mar"], [286, "Camarão, Sete Barbas, sem cabeça, com casca, frito", 18.4, "Pescados e frutos do mar"], [287, "Caranguejo, cozido", 18.5, "Pescados e frutos do mar"], [288, "Corimba, cru", 17.4, "Pescados e frutos do mar"], [289, "Corimbatá, assado", 19.9, "Pescados e frutos do mar"], [290, "Corimbatá, cozido", 20.1, "Pescados e frutos do mar"], [291, "Corvina de água doce, crua", 18.9, "Pescados e frutos do mar"], [292, "Corvina do mar, crua", 18.6, "Pescados e frutos do mar"], [293, "Corvina grande, assada", 26.8, "Pescados e frutos do mar"], [294, "Corvina grande, cozida", 23.4, "Pescados e frutos do mar"], [295, "Dourada de água doce, fresca", 18.8, "Pescados e frutos do mar"], [296, "Lambari, congelado, cru", 16.8, "Pescados e frutos do mar"], [297, "Lambari, congelado, frito", 28.4, "Pescados e frutos do mar"], [298, "Lambari, fresco, cru", 15.7, "Pescados e frutos do mar"], [299, "Manjuba, com farinha de trigo, frita", 23.4, "Pescados e frutos do mar"], [300, "Manjuba, frita", 30.1, "Pescados e frutos do mar"], [301, "Merluza, filé, assado", 26.6, "Pescados e frutos do mar"], [302, "Merluza, filé, cru", 16.6, "Pescados e frutos do mar"], [303, "Merluza, filé, frito", 26.9, "Pescados e frutos do mar"], [304, "Pescada, branca, crua", 16.3, "Pescados e frutos do mar"], [305, "Pescada, branca, frita", 27.4, "Pescados e frutos do mar"], [306, "Pescada, filé, com farinha de trigo, frito", 21.4, "Pescados e frutos do mar"], [307, "Pescada, filé, cru", 16.6, "Pescados e frutos do mar"], [308, "Pescada, filé, frito", 28.6, "Pescados e frutos do mar"], [309, "Pescada, filé, molho escabeche", 11.8, "Pescados e frutos do mar"], [310, "Pescadinha, crua", 15.5, "Pescados e frutos do mar"], [311, "Pintado, assado", 36.5, "Pescados e frutos do mar"], [312, "Pintado, cru", 18.6, "Pescados e frutos do mar"], [313, "Pintado, grelhado", 30.8, "Pescados e frutos do mar"], [314, "Porquinho, cru", 20.5, "Pescados e frutos do mar"], [315, "Salmão, filé, com pele, fresco,  grelhado", 23.9, "Pescados e frutos do mar"], [316, "Salmão, sem pele, fresco, cru", 19.3, "Pescados e frutos do mar"], [317, "Salmão, sem pele, fresco, grelhado", 26.1, "Pescados e frutos do mar"], [318, "Sardinha, assada", 32.2, "Pescados e frutos do mar"], [319, "Sardinha, conserva em óleo", 15.9, "Pescados e frutos do mar"], [320, "Sardinha, frita", 33.4, "Pescados e frutos do mar"], [321, "Sardinha, inteira, crua", 21.1, "Pescados e frutos do mar"], [322, "Tucunaré, filé, congelado, cru", 18.0, "Pescados e frutos do mar"], [323, "Apresuntado", 13.4, "Carnes e derivados"], [324, "Caldo de carne, tablete", 7.8, "Carnes e derivados"], [325, "Caldo de galinha, tablete", 6.3, "Carnes e derivados"], [326, "Carne, bovina, acém, moído, cozido", 26.7, "Carnes e derivados"], [327, "Carne, bovina, acém, moído, cru", 19.4, "Carnes e derivados"], [328, "Carne, bovina, acém, sem gordura, cozido", 27.3, "Carnes e derivados"], [329, "Carne, bovina, acém, sem gordura, cru", 20.8, "Carnes e derivados"], [330, "Carne, bovina, almôndegas, cruas", 12.3, "Carnes e derivados"], [331, "Carne, bovina, almôndegas, fritas", 18.2, "Carnes e derivados"], [332, "Carne, bovina, bucho, cozido", 21.6, "Carnes e derivados"], [333, "Carne, bovina, bucho, cru", 20.5, "Carnes e derivados"], [334, "Carne, bovina, capa de contra-filé, com gordura, crua", 19.2, "Carnes e derivados"], [335, "Carne, bovina, capa de contra-filé, com gordura, grelhada", 30.7, "Carnes e derivados"], [336, "Carne, bovina, capa de contra-filé, sem gordura, crua", 21.5, "Carnes e derivados"], [337, "Carne, bovina, capa de contra-filé, sem gordura, grelhada", 35.1, "Carnes e derivados"], [338, "Carne, bovina, charque, cozido", 36.4, "Carnes e derivados"], [339, "Carne, bovina, charque, cru", 22.7, "Carnes e derivados"], [340, "Carne, bovina, contra-filé, à milanesa", 20.6, "Carnes e derivados"], [341, "Carne, bovina, contra-filé de costela, cru", 19.8, "Carnes e derivados"], [342, "Carne, bovina, contra-filé de costela, grelhado", 29.9, "Carnes e derivados"], [343, "Carne, bovina, contra-filé, com gordura, cru", 21.1, "Carnes e derivados"], [344, "Carne, bovina, contra-filé, com gordura, grelhado", 32.4, "Carnes e derivados"], [345, "Carne, bovina, contra-filé, sem gordura, cru", 24.0, "Carnes e derivados"], [346, "Carne, bovina, contra-filé, sem gordura, grelhado", 35.9, "Carnes e derivados"], [347, "Carne, bovina, costela, assada", 28.8, "Carnes e derivados"], [348, "Carne, bovina, costela, crua", 16.7, "Carnes e derivados"], [349, "Carne, bovina, coxão duro, sem gordura, cozido", 31.9, "Carnes e derivados"], [350, "Carne, bovina, coxão duro, sem gordura, cru", 21.5, "Carnes e derivados"], [351, "Carne, bovina, coxão mole, sem gordura, cozido", 32.4, "Carnes e derivados"], [352, "Carne, bovina, coxão mole, sem gordura, cru", 21.2, "Carnes e derivados"], [353, "Carne, bovina, cupim, assado", 28.6, "Carnes e derivados"], [354, "Carne, bovina, cupim, cru", 19.5, "Carnes e derivados"], [355, "Carne, bovina, fígado, cru", 20.7, "Carnes e derivados"], [356, "Carne, bovina, fígado, grelhado", 29.9, "Carnes e derivados"], [357, "Carne, bovina, filé mingnon, sem gordura, cru", 21.6, "Carnes e derivados"], [358, "Carne, bovina, filé mingnon, sem gordura, grelhado", 32.8, "Carnes e derivados"], [359, "Carne, bovina, flanco, sem gordura, cozido", 29.4, "Carnes e derivados"], [360, "Carne, bovina, flanco, sem gordura, cru", 20.0, "Carnes e derivados"], [361, "Carne, bovina, fraldinha, com gordura, cozida", 24.2, "Carnes e derivados"], [362, "Carne, bovina, fraldinha, com gordura, crua", 17.6, "Carnes e derivados"], [363, "Carne, bovina, lagarto, cozido", 32.9, "Carnes e derivados"], [364, "Carne, bovina, lagarto, cru", 20.5, "Carnes e derivados"], [365, "Carne, bovina, língua, cozida", 21.4, "Carnes e derivados"], [366, "Carne, bovina, língua, crua", 17.1, "Carnes e derivados"], [367, "Carne, bovina, maminha, crua", 20.9, "Carnes e derivados"], [368, "Carne, bovina, maminha, grelhada", 30.7, "Carnes e derivados"], [369, "Carne, bovina, miolo de alcatra, sem gordura, cru", 21.6, "Carnes e derivados"], [370, "Carne, bovina, miolo de alcatra, sem gordura, grelhado", 31.9, "Carnes e derivados"], [371, "Carne, bovina, músculo, sem gordura, cozido", 31.2, "Carnes e derivados"], [372, "Carne, bovina, músculo, sem gordura, cru", 21.6, "Carnes e derivados"], [373, "Carne, bovina, paleta, com gordura, crua", 21.4, "Carnes e derivados"], [374, "Carne, bovina, paleta, sem gordura, cozida", 29.7, "Carnes e derivados"], [375, "Carne, bovina, paleta, sem gordura, crua", 21.0, "Carnes e derivados"], [376, "Carne, bovina, patinho, sem gordura, cru", 21.7, "Carnes e derivados"], [377, "Carne, bovina, patinho, sem gordura, grelhado", 35.9, "Carnes e derivados"], [378, "Carne, bovina, peito, sem gordura, cozido", 22.2, "Carnes e derivados"], [379, "Carne, bovina, peito, sem gordura, cru", 17.6, "Carnes e derivados"], [380, "Carne, bovina, picanha, com gordura, crua", 18.8, "Carnes e derivados"], [381, "Carne, bovina, picanha, com gordura, grelhada", 26.4, "Carnes e derivados"], [382, "Carne, bovina, picanha, sem gordura, crua", 21.2, "Carnes e derivados"], [383, "Carne, bovina, picanha, sem gordura, grelhada", 31.9, "Carnes e derivados"], [384, "Carne, bovina, seca, cozida", 26.9, "Carnes e derivados"], [385, "Carne, bovina, seca, crua", 19.7, "Carnes e derivados"], [386, "Coxinha de frango, frita", 9.6, "Carnes e derivados"], [387, "Croquete, de carne, cru", 12.0, "Carnes e derivados"], [388, "Croquete, de carne, frito", 16.9, "Carnes e derivados"], [389, "Empada de frango, pré-cozida, assada", 6.9, "Carnes e derivados"], [390, "Empada, de frango, pré-cozida", 7.3, "Carnes e derivados"], [391, "Frango, asa, com pele, crua", 18.1, "Carnes e derivados"], [392, "Frango, caipira, inteiro, com pele, cozido", 23.9, "Carnes e derivados"], [393, "Frango, caipira, inteiro, sem pele, cozido", 29.6, "Carnes e derivados"], [394, "Frango, coração, cru", 12.6, "Carnes e derivados"], [395, "Frango, coração, grelhado", 22.4, "Carnes e derivados"], [396, "Frango, coxa, com pele, assada", 28.5, "Carnes e derivados"], [397, "Frango, coxa, com pele, crua", 17.1, "Carnes e derivados"], [398, "Frango, coxa, sem pele, cozida", 26.9, "Carnes e derivados"], [399, "Frango, coxa, sem pele, crua", 17.8, "Carnes e derivados"], [400, "Frango, fígado, cru", 17.6, "Carnes e derivados"], [401, "Frango, filé, à milanesa", 28.5, "Carnes e derivados"], [402, "Frango, inteiro, com pele, cru", 16.4, "Carnes e derivados"], [403, "Frango, inteiro, sem pele, assado", 28.0, "Carnes e derivados"], [404, "Frango, inteiro, sem pele, cozido", 25.0, "Carnes e derivados"], [405, "Frango, inteiro, sem pele, cru", 20.6, "Carnes e derivados"], [406, "Frango, peito, com pele, assado", 33.4, "Carnes e derivados"], [407, "Frango, peito, com pele, cru", 20.8, "Carnes e derivados"], [408, "Frango, peito, sem pele, cozido", 31.5, "Carnes e derivados"], [409, "Frango, peito, sem pele, cru", 21.5, "Carnes e derivados"], [410, "Frango, peito, sem pele, grelhado", 32.0, "Carnes e derivados"], [411, "Frango, sobrecoxa, com pele, assada", 28.7, "Carnes e derivados"], [412, "Frango, sobrecoxa, com pele, crua", 15.5, "Carnes e derivados"], [413, "Frango, sobrecoxa, sem pele, assada", 29.2, "Carnes e derivados"], [414, "Frango, sobrecoxa, sem pele, crua", 17.6, "Carnes e derivados"], [415, "Hambúrguer, bovino, cru", 13.2, "Carnes e derivados"], [416, "Hambúrguer, bovino, frito", 20.0, "Carnes e derivados"], [417, "Hambúrguer, bovino, grelhado", 13.2, "Carnes e derivados"], [418, "Lingüiça, frango, crua", 14.2, "Carnes e derivados"], [419, "Lingüiça, frango, frita", 18.3, "Carnes e derivados"], [420, "Lingüiça, frango, grelhada", 18.2, "Carnes e derivados"], [421, "Lingüiça, porco, crua", 16.1, "Carnes e derivados"], [422, "Lingüiça, porco, frita", 20.5, "Carnes e derivados"], [423, "Lingüiça, porco, grelhada", 23.2, "Carnes e derivados"], [424, "Mortadela", 12.0, "Carnes e derivados"], [425, "Peru, congelado, assado", 26.2, "Carnes e derivados"], [426, "Peru, congelado, cru", 18.1, "Carnes e derivados"], [427, "Porco, bisteca, crua", 21.5, "Carnes e derivados"], [428, "Porco, bisteca, frita", 33.7, "Carnes e derivados"], [429, "Porco, bisteca, grelhada", 28.9, "Carnes e derivados"], [430, "Porco, costela, assada", 30.2, "Carnes e derivados"], [431, "Porco, costela, crua", 18.0, "Carnes e derivados"], [432, "Porco, lombo, assado", 35.7, "Carnes e derivados"], [433, "Porco, lombo, cru", 22.6, "Carnes e derivados"], [434, "Porco, orelha, salgada, crua", 18.5, "Carnes e derivados"], [435, "Porco, pernil, assado", 32.1, "Carnes e derivados"], [436, "Porco, pernil, cru", 20.1, "Carnes e derivados"], [437, "Porco, rabo, salgado, cru", 15.6, "Carnes e derivados"], [438, "Presunto, com capa de gordura", 14.4, "Carnes e derivados"], [439, "Presunto, sem capa de gordura", 14.3, "Carnes e derivados"], [440, "Quibe, assado", 14.6, "Carnes e derivados"], [441, "Quibe, cru", 12.4, "Carnes e derivados"], [442, "Quibe, frito", 14.9, "Carnes e derivados"], [443, "Salame", 25.8, "Carnes e derivados"], [444, "Toucinho, cru", 11.5, "Carnes e derivados"], [445, "Toucinho, frito", 27.3, "Carnes e derivados"], [446, "Bebida láctea, pêssego", 2.1, "Leite e derivados"], [447, "Creme de Leite", 1.5, "Leite e derivados"], [448, "Iogurte, natural", 4.1, "Leite e derivados"], [449, "Iogurte, natural, desnatado", 3.8, "Leite e derivados"], [450, "Iogurte, sabor abacaxi", 2.6, "Leite e derivados"], [451, "Iogurte, sabor morango", 2.7, "Leite e derivados"], [452, "Iogurte, sabor pêssego", 2.5, "Leite e derivados"], [453, "Leite, condensado", 7.7, "Leite e derivados"], [454, "Leite, de cabra", 3.1, "Leite e derivados"], [455, "Leite, de vaca, achocolatado", 2.1, "Leite e derivados"], [456, "Leite, de vaca, desnatado, pó", 34.7, "Leite e derivados"], [457, "Leite, de vaca, desnatado, UHT", 3.0, "Leite e derivados"], [458, "Leite, de vaca, integral", 3.2, "Leite e derivados"], [459, "Leite, de vaca, integral, pó", 25.4, "Leite e derivados"], [460, "Leite, fermentado", 1.9, "Leite e derivados"], [461, "Queijo, minas, frescal", 17.4, "Leite e derivados"], [462, "Queijo, minas, meia cura", 21.2, "Leite e derivados"], [463, "Queijo, mozarela", 22.6, "Leite e derivados"], [464, "Queijo, parmesão", 35.6, "Leite e derivados"], [465, "Queijo, pasteurizado", 9.4, "Leite e derivados"], [466, "Queijo, petit suisse, morango", 5.8, "Leite e derivados"], [467, "Queijo, prato", 22.7, "Leite e derivados"], [468, "Queijo, requeijão, cremoso", 9.6, "Leite e derivados"], [469, "Queijo, ricota", 12.6, "Leite e derivados"], [470, "Bebida isotônica, sabores variados", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [471, "Café, infusão 10%", 0.7, "Bebidas (alcoólicas e não alcoólicas)"], [472, "Cana, aguardente 1", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [473, "Cana, caldo de", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [474, "Cerveja, pilsen 2", 0.6, "Bebidas (alcoólicas e não alcoólicas)"], [475, "Chá, erva-doce, infusão 5%", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [476, "Chá, mate, infusão 5%", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [477, "Chá, preto, infusão 5%", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [478, "Coco, água de", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [479, "Refrigerante, tipo água tônica", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [480, "Refrigerante, tipo cola", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [481, "Refrigerante, tipo guaraná", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [482, "Refrigerante, tipo laranja", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [483, "Refrigerante, tipo limão", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [484, "Omelete, de queijo", 15.6, "Ovos e derivados"], [485, "Ovo, de codorna, inteiro, cru", 13.7, "Ovos e derivados"], [486, "Ovo, de galinha, clara, cozida/10minutos", 13.4, "Ovos e derivados"], [487, "Ovo, de galinha, gema, cozida/10minutos", 15.9, "Ovos e derivados"], [488, "Ovo, de galinha, inteiro, cozido/10minutos", 13.3, "Ovos e derivados"], [489, "Ovo, de galinha, inteiro, cru", 13.0, "Ovos e derivados"], [490, "Ovo, de galinha, inteiro, frito", 15.6, "Ovos e derivados"], [491, "Achocolatado, pó", 4.2, "Produtos açucarados"], [492, "Açúcar, cristal", 0.3, "Produtos açucarados"], [493, "Açúcar, mascavo", 0.8, "Produtos açucarados"], [494, "Açúcar, refinado", 0.3, "Produtos açucarados"], [495, "Chocolate, ao leite", 7.2, "Produtos açucarados"], [496, "Chocolate, ao leite, com castanha do Pará", 7.4, "Produtos açucarados"], [497, "Chocolate, ao leite, dietético", 6.9, "Produtos açucarados"], [498, "Chocolate, meio amargo", 4.9, "Produtos açucarados"], [499, "Cocada branca", 1.1, "Produtos açucarados"], [500, "Doce, de abóbora, cremoso", 0.9, "Produtos açucarados"], [501, "Doce, de leite, cremoso", 5.5, "Produtos açucarados"], [502, "Geléia, mocotó, natural", 2.1, "Produtos açucarados"], [503, "Glicose de milho", 0.0, "Produtos açucarados"], [504, "Maria mole", 3.8, "Produtos açucarados"], [505, "Maria mole, coco queimado", 3.9, "Produtos açucarados"], [506, "Marmelada", 0.4, "Produtos açucarados"], [507, "Mel, de abelha", 0.0, "Produtos açucarados"], [508, "Melado", 0.0, "Produtos açucarados"], [509, "Quindim", 4.7, "Produtos açucarados"], [510, "Rapadura", 1.0, "Produtos açucarados"], [511, "Café, pó, torrado", 14.7, "Miscelâneas"], [512, "Capuccino, pó", 11.3, "Miscelâneas"], [513, "Fermento em pó, químico", 0.5, "Miscelâneas"], [514, "Fermento, biológico, levedura, tablete", 17.0, "Miscelâneas"], [515, "Gelatina, sabores variados, pó", 8.9, "Miscelâneas"], [516, "Sal, dietético", 0.0, "Miscelâneas"], [517, "Sal, grosso", 0.0, "Miscelâneas"], [518, "Shoyu", 3.3, "Miscelâneas"], [519, "Tempero a base de sal", 2.7, "Miscelâneas"], [520, "Azeitona, preta, conserva", 1.2, "Outros alimentos industrializados"], [521, "Azeitona, verde, conserva", 0.9, "Outros alimentos industrializados"], [522, "Chantilly, spray, com gordura vegetal", 0.5, "Outros alimentos industrializados"], [523, "Leite, de coco", 1.0, "Outros alimentos industrializados"], [524, "Maionese, tradicional com ovos", 0.6, "Outros alimentos industrializados"], [525, "Acarajé", 8.3, "Alimentos preparados"], [526, "Arroz carreteiro", 10.8, "Alimentos preparados"], [527, "Baião de dois, arroz e feijão-de-corda", 6.2, "Alimentos preparados"], [528, "Barreado", 18.3, "Alimentos preparados"], [529, "Bife à cavalo, com contra filé", 23.7, "Alimentos preparados"], [530, "Bolinho de arroz", 8.0, "Alimentos preparados"], [531, "Camarão à baiana", 7.9, "Alimentos preparados"], [532, "Charuto, de repolho", 6.8, "Alimentos preparados"], [533, "Cuscuz, de milho, cozido com sal", 2.2, "Alimentos preparados"], [534, "Cuscuz, paulista", 2.6, "Alimentos preparados"], [535, "Cuxá, molho", 5.6, "Alimentos preparados"], [536, "Dobradinha", 19.8, "Alimentos preparados"], [537, "Estrogonofe de carne", 15.0, "Alimentos preparados"], [538, "Estrogonofe de frango", 17.6, "Alimentos preparados"], [539, "Feijão tropeiro mineiro", 10.2, "Alimentos preparados"], [540, "Feijoada", 8.7, "Alimentos preparados"], [541, "Frango, com açafrão", 9.7, "Alimentos preparados"], [542, "Macarrão, molho bolognesa", 4.9, "Alimentos preparados"], [543, "Maniçoba", 10.0, "Alimentos preparados"], [544, "Quibebe", 8.6, "Alimentos preparados"], [545, "Salada, de legumes, com maionese", 1.1, "Alimentos preparados"], [546, "Salada, de legumes, cozida no vapor", 2.0, "Alimentos preparados"], [547, "Salpicão, de frango", 13.9, "Alimentos preparados"], [548, "Sarapatel", 18.5, "Alimentos preparados"], [549, "Tabule", 2.0, "Alimentos preparados"], [550, "Tacacá", 7.0, "Alimentos preparados"], [551, "Tapioca, com manteiga", 0.1, "Alimentos preparados"], [552, "Tucupi, com pimenta-de-cheiro", 2.1, "Alimentos preparados"], [553, "Vaca atolada", 5.1, "Alimentos preparados"], [554, "Vatapá", 6.0, "Alimentos preparados"], [555, "Virado à paulista", 10.2, "Alimentos preparados"], [556, "Yakisoba", 7.5, "Alimentos preparados"], [557, "Amendoim, grão, cru", 27.2, "Leguminosas e derivados"], [558, "Amendoim, torrado, salgado", 22.5, "Leguminosas e derivados"], [559, "Ervilha, em vagem", 7.5, "Leguminosas e derivados"], [560, "Ervilha, enlatada, drenada", 4.6, "Leguminosas e derivados"], [561, "Feijão, carioca, cozido", 4.8, "Leguminosas e derivados"], [562, "Feijão, carioca, cru", 20.0, "Leguminosas e derivados"], [563, "Feijão, fradinho, cozido", 5.1, "Leguminosas e derivados"], [564, "Feijão, fradinho, cru", 20.2, "Leguminosas e derivados"], [565, "Feijão, jalo, cozido", 6.1, "Leguminosas e derivados"], [566, "Feijão, jalo, cru", 20.1, "Leguminosas e derivados"], [567, "Feijão, preto, cozido", 4.5, "Leguminosas e derivados"], [568, "Feijão, preto, cru", 21.3, "Leguminosas e derivados"], [569, "Feijão, rajado, cozido", 5.5, "Leguminosas e derivados"], [570, "Feijão, rajado, cru", 17.3, "Leguminosas e derivados"], [571, "Feijão, rosinha, cozido", 4.5, "Leguminosas e derivados"], [572, "Feijão, rosinha, cru", 20.9, "Leguminosas e derivados"], [573, "Feijão, roxo, cozido", 5.7, "Leguminosas e derivados"], [574, "Feijão, roxo, cru", 22.2, "Leguminosas e derivados"], [575, "Grão-de-bico, cru", 21.2, "Leguminosas e derivados"], [576, "Guandu, cru", 19.0, "Leguminosas e derivados"], [577, "Lentilha, cozida", 6.3, "Leguminosas e derivados"], [578, "Lentilha, crua", 23.2, "Leguminosas e derivados"], [579, "Paçoca, amendoim", 16.0, "Leguminosas e derivados"], [580, "Pé-de-moleque, amendoim", 13.2, "Leguminosas e derivados"], [581, "Soja, farinha", 36.0, "Leguminosas e derivados"], [582, "Soja, extrato solúvel, natural, fluido", 2.4, "Leguminosas e derivados"], [583, "Soja, extrato solúvel, pó", 35.7, "Leguminosas e derivados"], [584, "Soja, queijo (tofu)", 6.6, "Leguminosas e derivados"], [585, "Tremoço, cru", 33.6, "Leguminosas e derivados"], [586, "Tremoço, em conserva", 11.1, "Leguminosas e derivados"], [587, "Amêndoa, torrada, salgada", 18.6, "Nozes e sementes"], [588, "Castanha-de-caju, torrada, salgada", 18.5, "Nozes e sementes"], [589, "Castanha-do-Brasil, crua", 14.5, "Nozes e sementes"], [590, "Coco, cru", 3.7, "Nozes e sementes"], [591, "Coco,  verde, cru", 0.0, "Nozes e sementes"], [592, "Farinha, de mesocarpo de babaçu, crua", 1.4, "Nozes e sementes"], [593, "Gergelim, semente", 21.2, "Nozes e sementes"], [594, "Linhaça, semente", 14.1, "Nozes e sementes"], [595, "Pinhão, cozido", 3.0, "Nozes e sementes"], [596, "Pupunha, cozida", 2.5, "Nozes e sementes"], [597, "Noz, crua", 14.0, "Nozes e sementes"]];

  function fmt1(n) { return (Math.round(n * 10) / 10).toFixed(1).replace(".", ","); }
  function normalizeText(txt) { return (txt || "").toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, ""); }

  function resolveUnits(foodName) {
    var norm = normalizeText(foodName);
    for (var i = 0; i < HOUSEHOLD_RULES.length; i++) {
      var r = HOUSEHOLD_RULES[i];
      var ok = true;
      for (var k = 0; k < r.match.length; k++) { if (norm.indexOf(r.match[k]) === -1) { ok = false; break; } }
      if (ok) return r.units.map(function(u) { return { id: u.id, label: u.label, factor_g: u.factor, default_qty: u.def, step: u.step }; });
    }
    return [{ id: "g", label: "gramas (g)", factor_g: 1, default_qty: 100, step: 10 }];
  }

  var curTacoFood = null, curUnits = [], curUnit = null, curQty = 1;

  function onTacoSearch(query) {
    var dropdown = document.getElementById("tacoDropdown");
    document.getElementById("clearBtn").style.display = query.length ? "flex" : "none";
    var q = normalizeText(query.trim());
    if (!q || q.length < 2) { dropdown.style.display = "none"; dropdown.innerHTML = ""; return; }

    var terms = q.split(/\\s+/);
    var matches = [];
    for (var i = 0; i < TACO_DATABASE.length; i++) {
      var item = TACO_DATABASE[i];
      var normName = normalizeText(item[1]);
      var normCat = normalizeText(item[3]);
      var all = true;
      for (var t = 0; t < terms.length; t++) {
        if (normName.indexOf(terms[t]) === -1 && normCat.indexOf(terms[t]) === -1) { all = false; break; }
      }
      if (all) { matches.push(item); if (matches.length >= 20) break; }
    }

    if (matches.length === 0) {
      dropdown.innerHTML = '<div class="dropdown-empty">Nenhum alimento encontrado</div>';
      dropdown.style.display = "block";
      return;
    }

    dropdown.innerHTML = matches.map(function(item, idx) {
      return '<div class="taco-item" onclick="selectTacoFood(' + idx + ')">' +
        '<div><div class="taco-name">' + item[1] + '</div><div class="taco-cat">' + (item[3] || "TACO") + '</div></div>' +
        '<div class="taco-val">' + fmt1(item[2]) + ' g/100g</div>' +
      '</div>';
    }).join("");
    window._tacoMatches = matches;
    dropdown.style.display = "block";
  }

  function clearSearch() {
    document.getElementById("tacoSearchInput").value = "";
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("tacoDropdown").style.display = "none";
    document.getElementById("portionBox").classList.remove("open");
    curTacoFood = null;
  }

  function selectTacoFood(idx) {
    if (!window._tacoMatches || !window._tacoMatches[idx]) return;
    var item = window._tacoMatches[idx];
    curTacoFood = { id: item[0], name: item[1], prot_100g: item[2] };

    document.getElementById("tacoSearchInput").value = curTacoFood.name;
    document.getElementById("clearBtn").style.display = "flex";
    document.getElementById("tacoDropdown").style.display = "none";
    document.getElementById("selectedFoodTitle").textContent = curTacoFood.name;
    document.getElementById("selectedFoodRate").textContent = fmt1(curTacoFood.prot_100g) + " g / 100 g";

    curUnits = resolveUnits(curTacoFood.name);
    curUnit = curUnits[0];
    curQty = curUnit.default_qty || 1;

    renderUnitPills();
    updatePortionCalc();
    document.getElementById("portionBox").classList.add("open");
  }

  function renderUnitPills() {
    var container = document.getElementById("unitPillsRow");
    container.innerHTML = "";
    curUnits.forEach(function(u) {
      var pill = document.createElement("div");
      pill.className = "pill" + (u.id === curUnit.id ? " active" : "");
      pill.textContent = u.label;
      pill.onclick = function() {
        curUnit = u;
        curQty = u.default_qty || 1;
        renderUnitPills();
        updatePortionCalc();
      };
      container.appendChild(pill);
    });
  }

  function changeQty(delta) {
    var step = curUnit.step || 1;
    var next = curQty + (delta * step);
    if (next <= 0) next = step;
    curQty = Math.round(next * 10) / 10;
    updatePortionCalc();
  }

  function onQtyChange(val) {
    var num = parseFloat(val);
    if (!isNaN(num) && num > 0) { curQty = num; updatePortionCalc(true); }
  }

  function updatePortionCalc(skipInputUpdate) {
    if (!skipInputUpdate) document.getElementById("portionQtyInput").value = curQty;
    if (!curTacoFood || !curUnit) return;
    var totalProt = (curQty * curUnit.factor_g * curTacoFood.prot_100g) / 100;
    document.getElementById("portionProtVal").textContent = fmt1(totalProt) + "g";
  }

  function commitTacoEntry() {
    if (!curTacoFood || !curUnit || curQty <= 0) return;
    var totalProt = (curQty * curUnit.factor_g * curTacoFood.prot_100g) / 100;
    var qtyStr = (curQty % 1 === 0 ? curQty : curQty.toFixed(1).replace(".", ","));
    var unitStr = curUnit.label.split(" ")[0];
    state.entries.push({ name: curTacoFood.name + " (" + qtyStr + " " + unitStr + ")", prot: totalProt, time: nowTime() });
    saveState(state);
    render();
    clearSearch();
  }

  document.addEventListener("click", function(e) {
    var dd = document.getElementById("tacoDropdown");
    var inp = document.getElementById("tacoSearchInput");
    if (dd && !dd.contains(e.target) && e.target !== inp) dd.style.display = "none";
  });

  function buildGrid() {
    var grid = document.getElementById("foodGrid");
    grid.innerHTML = "";
    FOODS.forEach(function(f) {
      var btn = document.createElement("button");
      btn.className = "food-btn";
      btn.dataset.name = f.name;
      btn.innerHTML =
        '<div class="add-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div>' +
        '<div class="food-name">' + f.name + '</div>' +
        '<div class="food-detail">' + f.detail + '</div>' +
        '<div class="food-prot">' + fmt1(f.prot) + ' g</div>' +
        '<div class="used-badge"></div>';
      btn.addEventListener("click", function() { addFood(f); });
      grid.appendChild(btn);
    });
  }

  function todayKey() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function loadSettings() {
    try {
      var raw = localStorage.getItem("prot_settings");
      if (raw) {
        var p = JSON.parse(raw);
        if (p.goal) GOAL = p.goal;
        if (p.ratio) USER_RATIO = p.ratio;
        if (p.weight) USER_WEIGHT = p.weight;
      }
    } catch(e) {}
  }
  function saveSettings() {
    try { localStorage.setItem("prot_settings", JSON.stringify({ goal: GOAL, ratio: USER_RATIO, weight: USER_WEIGHT })); } catch(e) {}
  }
  function loadState() {
    loadSettings();
    try {
      var raw = localStorage.getItem("prot_log");
      if (!raw) return { date: todayKey(), entries: [] };
      var s = JSON.parse(raw);
      if (s.date !== todayKey()) return { date: todayKey(), entries: [] };
      return s;
    } catch(e) { return { date: todayKey(), entries: [] }; }
  }
  function saveState(st) {
    try { localStorage.setItem("prot_log", JSON.stringify(st)); } catch(e) {}
  }

  var state = loadState();

  function totalProt() { return state.entries.reduce(function(s, e) { return s + e.prot; }, 0); }

  function render() {
    var total = totalProt();
    var pct = Math.min(total / GOAL, 1);
    var ring = document.getElementById("ringFill");
    ring.style.strokeDashoffset = CIRCUMFERENCE * (1 - pct);
    ring.className = "ring-fill" + (pct >= 1 ? " done" : "");

    document.getElementById("pctLabel").textContent = Math.round(pct * 100) + "%";
    document.getElementById("gramLabel").textContent = fmt1(total) + " / " + GOAL + " g";
    document.getElementById("remaining").textContent = fmt1(Math.max(GOAL - total, 0)) + " g";
    document.getElementById("histTotal").textContent = fmt1(total) + " g";

    var list = document.getElementById("logList");
    var empty = document.getElementById("emptyLog");
    list.innerHTML = "";
    if (state.entries.length === 0) {
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
      state.entries.slice().reverse().forEach(function(e, ri) {
        var idx = state.entries.length - 1 - ri;
        var li = document.createElement("li");
        li.innerHTML =
          '<div class="log-left">' +
            '<span class="log-time">' + (e.time || "") + '</span>' +
            '<span class="log-dot"></span>' +
            '<span class="log-name">' + e.name + '</span>' +
          '</div>' +
          '<div class="log-right">' +
            '<span class="log-prot">+' + fmt1(e.prot) + ' g</span>' +
            '<button class="del-btn" onclick="removeEntry(' + idx + ')" aria-label="Remover">' +
              '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
            '</button>' +
          '</div>';
        list.appendChild(li);
      });
    }

    var countByName = {};
    state.entries.forEach(function(e) { countByName[e.name] = (countByName[e.name] || 0) + 1; });
    var btns = document.querySelectorAll(".food-btn");
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      var count = countByName[btn.dataset.name] || 0;
      var badge = btn.querySelector(".used-badge");
      if (count > 0) {
        btn.classList.add("used");
        badge.textContent = count === 1 ? "adicionado" : count + "×";
      } else {
        btn.classList.remove("used");
        badge.textContent = "";
      }
    }
  }

  function nowTime() { return new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }); }

  function addFood(food) {
    state.entries.push({ name: food.name, prot: food.prot, time: nowTime() });
    saveState(state);
    render();
  }
  function removeEntry(i) {
    state.entries.splice(i, 1);
    saveState(state);
    render();
  }
  function resetDay() { document.getElementById("confirmModal").classList.add("open"); }
  function closeResetModal() { document.getElementById("confirmModal").classList.remove("open"); }
  function confirmResetDay() {
    closeResetModal();
    state = { date: todayKey(), entries: [] };
    saveState(state);
    render();
  }

  function toggleGoalCard() {
    var c = document.getElementById("goalCard");
    c.classList.toggle("open");
    if (c.classList.contains("open")) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateGoalSliders() {
    var ratio = parseFloat(document.getElementById("ratioSlider").value);
    var weight = parseInt(document.getElementById("weightSlider").value, 10);
    var calculated = Math.round(ratio * weight);
    var ratioStr = ratio.toFixed(1).replace(".", ",") + " g/kg";
    var weightStr = weight + " kg";
    document.getElementById("ratioBadge").textContent = ratioStr;
    document.getElementById("weightBadge").textContent = weightStr;
    document.getElementById("calcGoalVal").textContent = calculated;
    document.getElementById("formulaRatio").textContent = ratioStr;
    document.getElementById("formulaWeight").textContent = weightStr;
  }

  function saveCustomGoal() {
    USER_RATIO = parseFloat(document.getElementById("ratioSlider").value);
    USER_WEIGHT = parseInt(document.getElementById("weightSlider").value, 10);
    GOAL = Math.round(USER_RATIO * USER_WEIGHT);
    saveSettings();
    render();
    document.getElementById("goalCard").classList.remove("open");
  }

  function setDate() {
    document.getElementById("headerDate").textContent =
      new Date().toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "short" });
  }

  buildGrid();
  document.getElementById("ratioSlider").addEventListener("input", updateGoalSliders);
  document.getElementById("weightSlider").addEventListener("input", updateGoalSliders);
  document.getElementById("ratioSlider").value = USER_RATIO;
  document.getElementById("weightSlider").value = USER_WEIGHT;
  updateGoalSliders();
  setDate();
  checkAutoTheme();
  render();
</script>
</body>
</html>
`;
  const wv = new WebView();
  await wv.loadHTML(html, "http://localhost");
  await wv.present(true);
};
