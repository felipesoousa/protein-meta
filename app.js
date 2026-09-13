module.exports.main = async function() {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <title>Meta de Proteínas</title>
  <style>
    :root {
      --bg: #f8fafc;
      --surface: #ffffff;
      --surface-subtle: #f1f5f9;
      --border: #e2e8f0;
      --border-focus: #10b981;
      --text: #0f172a;
      --text-muted: #64748b;
      --text-subtle: #94a3b8;
      
      --accent: #10b981;
      --accent-hover: #059669;
      --accent-bg: #ecfdf5;
      --accent-border: #a7f3d0;
      --accent-text: #065f46;
      
      --ring-track: #e2e8f0;
      --ring-done: #10b981;
      --ring-warn: #f59e0b;

      --card-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05);
      --dropdown-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    body.dark-mode {
      --bg: #090d16;
      --surface: #131b2e;
      --surface-subtle: #1e293b;
      --border: #1e293b;
      --border-focus: #10b981;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --text-subtle: #64748b;
      
      --accent: #10b981;
      --accent-hover: #34d399;
      --accent-bg: #064e3b33;
      --accent-border: #065f46;
      --accent-text: #6ee7b7;
      
      --ring-track: #1e293b;
      --ring-done: #10b981;
      --ring-warn: #fbbf24;

      --card-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.4);
      --dropdown-shadow: 0 15px 30px -5px rgb(0 0 0 / 0.6);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      -webkit-tap-highlight-color: transparent;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    header {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(12px);
    }
    .header-left { display: flex; align-items: baseline; gap: 8px; }
    header h1 { font-size: 16px; font-weight: 700; letter-spacing: -0.01em; color: var(--text); }
    .theme-indicator { font-size: 11px; font-weight: 600; color: var(--text-subtle); display: flex; align-items: center; gap: 4px; }
    
    .icon-btn {
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: 9px;
      padding: 6px 9px;
      font-size: 14px;
      color: var(--text-muted);
      cursor: pointer;
      line-height: 1;
    }
    .icon-btn:active { opacity: 0.7; }

    .container { max-width: 500px; margin: 0 auto; padding: 18px 16px 48px; }

    .progress-hero {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 24px 20px;
      text-align: center;
      box-shadow: var(--card-shadow);
      margin-bottom: 22px;
    }
    .ring-wrap {
      position: relative;
      width: 140px;
      height: 140px;
      margin: 0 auto 14px;
    }
    .ring-wrap svg { transform: rotate(-90deg); }
    .ring-bg { fill: none; stroke: var(--ring-track); stroke-width: 11; }
    .ring-fill {
      fill: none;
      stroke: var(--ring-done);
      stroke-width: 11;
      stroke-linecap: round;
      transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .ring-fill.warning { stroke: var(--ring-warn); }
    .ring-label {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .ring-label .pct { font-size: 30px; font-weight: 800; line-height: 1; color: var(--text); letter-spacing: -0.03em; }
    .ring-label .unit { font-size: 11px; color: var(--text-muted); margin-top: 3px; font-weight: 600; }
    
    .progress-sub { font-size: 14px; color: var(--text-muted); font-weight: 500; }
    .progress-sub span { font-weight: 700; color: var(--text); }
    
    .hero-actions { display: flex; justify-content: center; gap: 8px; margin-top: 14px; }
    .pill-btn {
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 6px 14px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
    }
    .pill-btn:active { background: var(--border); }

    .section-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-subtle);
      margin: 24px 0 10px 4px;
    }

    .food-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 24px;
    }
    .food-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 13px 14px;
      text-align: left;
      cursor: pointer;
      position: relative;
      box-shadow: var(--card-shadow);
      transition: border-color 0.15s ease;
      -webkit-appearance: none;
      appearance: none;
    }
    .food-btn.used {
      border-color: var(--accent);
      background: var(--accent-bg);
    }
    .food-btn .food-name { font-size: 13px; font-weight: 600; color: var(--text); padding-right: 18px; line-height: 1.3; }
    .food-btn .food-detail { font-size: 11px; color: var(--text-subtle); margin-top: 2px; }
    .food-btn .food-prot { font-size: 14px; font-weight: 800; color: var(--accent); margin-top: 6px; letter-spacing: -0.01em; }
    
    .food-btn .add-icon {
      position: absolute; top: 10px; right: 10px;
      width: 20px; height: 20px;
      background: var(--surface-subtle); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; color: var(--text-muted); line-height: 1;
    }
    .food-btn.used .add-icon {
      background: var(--accent);
      color: #fff;
    }
    .food-btn .used-badge {
      display: none;
      position: absolute; bottom: 8px; right: 10px;
      background: var(--accent); color: #fff;
      font-size: 10px; font-weight: 700;
      border-radius: 12px; padding: 2px 7px;
    }
    .food-btn.used .used-badge { display: block; }

    .taco-search-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px;
      box-shadow: var(--card-shadow);
      margin-bottom: 24px;
      position: relative;
    }
    .search-input-wrap { position: relative; width: 100%; }
    .search-input-wrap input {
      width: 100%;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 11px 14px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text);
      outline: none;
      background: var(--surface-subtle);
      transition: all 0.2s;
    }
    .search-input-wrap input:focus {
      border-color: var(--border-focus);
      background: var(--surface);
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
    }
    .search-input-wrap input::placeholder { color: var(--text-subtle); }

    .taco-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 6px);
      left: 0; right: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      max-height: 220px;
      overflow-y: auto;
      z-index: 500;
      box-shadow: var(--dropdown-shadow);
      -webkit-overflow-scrolling: touch;
    }
    .taco-item {
      padding: 11px 14px;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .taco-item:last-child { border-bottom: none; }
    .taco-item:active { background: var(--accent-bg); }
    .taco-item-name { font-size: 13px; font-weight: 600; color: var(--text); }
    .taco-item-prot { font-size: 13px; font-weight: 700; color: var(--accent); white-space: nowrap; }

    .portion-box {
      display: none;
      background: var(--accent-bg);
      border: 1px solid var(--accent-border);
      border-radius: 12px;
      padding: 14px;
      margin-top: 10px;
      animation: slideDown 0.2s ease;
    }
    .portion-box.open { display: block; }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-3px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .portion-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 6px;
    }
    .selected-title { font-size: 13px; font-weight: 700; color: var(--text); }
    .selected-rate { font-size: 11px; font-weight: 600; color: var(--accent-text); }

    .unit-pills-row { display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0 12px; }
    .unit-pill {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.15s;
    }
    .unit-pill.active {
      background: var(--accent);
      border-color: var(--accent);
      color: #fff;
    }

    .portion-actions-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .stepper {
      display: flex;
      align-items: center;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 9px;
      height: 38px;
      overflow: hidden;
    }
    .stepper button {
      width: 36px; height: 100%;
      background: none; border: none;
      font-size: 17px; font-weight: 700; color: var(--text);
      cursor: pointer;
    }
    .stepper button:active { background: var(--surface-subtle); }
    .stepper input {
      width: 42px; border: none;
      text-align: center; font-size: 15px; font-weight: 700;
      outline: none; background: none; color: var(--text);
    }

    .prot-result-display {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    .prot-result-display .caption {
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--accent-text);
      line-height: 1;
      margin-bottom: 3px;
    }
    .prot-result-display .value {
      font-size: 18px;
      font-weight: 800;
      color: var(--accent-text);
      line-height: 1;
      letter-spacing: -0.02em;
    }

    .add-taco-btn {
      height: 38px;
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 9px;
      padding: 0 16px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      white-space: nowrap;
      transition: background-color 0.15s;
    }
    .add-taco-btn:active { background: var(--accent-hover); }

    .history-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      box-shadow: var(--card-shadow);
      margin-bottom: 20px;
      overflow: hidden;
    }
    .history-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 13px 18px; border-bottom: 1px solid var(--border);
    }
    .history-header .h-title {
      font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-subtle);
    }
    .history-header .h-total { font-size: 13px; font-weight: 700; color: var(--accent); }
    .log-list { list-style: none; }
    .log-list li {
      border-bottom: 1px solid var(--border); padding: 11px 18px;
      display: flex; align-items: center; justify-content: space-between; gap: 8px;
    }
    .log-list li:last-child { border-bottom: none; }
    .log-left { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
    .log-time { font-size: 11px; color: var(--text-subtle); min-width: 34px; font-variant-numeric: tabular-nums; }
    .log-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
    .log-name { font-size: 13px; font-weight: 500; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .log-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
    .log-prot { font-size: 13px; font-weight: 700; color: var(--accent); }
    .del-btn { background: none; border: none; font-size: 13px; color: var(--text-subtle); cursor: pointer; padding: 2px 4px; }
    .empty-log { font-size: 13px; color: var(--text-subtle); text-align: center; padding: 24px 0; }

    .goal-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 18px;
      box-shadow: var(--dropdown-shadow);
      margin-bottom: 18px;
      display: none;
    }
    .goal-card.open { display: block; }
    .goal-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .goal-card-title { font-size: 14px; font-weight: 700; color: var(--text); }
    .badge-calc { background: var(--accent-bg); color: var(--accent); font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 10px; }
    
    .summary-hero {
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 14px;
      text-align: center;
      margin-bottom: 16px;
    }
    .summary-label { font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); margin-bottom: 3px; }
    .summary-number { font-size: 34px; font-weight: 800; color: var(--text); line-height: 1; letter-spacing: -0.02em; }
    .summary-unit { font-size: 14px; font-weight: 700; color: var(--accent); }
    .summary-formula { margin-top: 4px; font-size: 12px; color: var(--text-muted); }
    
    .control-block { margin-bottom: 14px; }
    .control-top { display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 12px; font-weight: 600; color: var(--text-muted); }
    .control-value-badge { font-weight: 800; color: var(--accent); }
    .control-value-badge.blue { color: #3b82f6; }
    .range-input {
      width: 100%; height: 5px; border-radius: 3px; background: var(--border);
      outline: none; margin: 6px 0; -webkit-appearance: none;
    }
    .range-input::-webkit-slider-thumb {
      -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%;
      background: var(--accent); border: 2px solid var(--surface); box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    }
    .range-input.blue::-webkit-slider-thumb { background: #3b82f6; }
    
    .save-goal-btn {
      width: 100%; background: var(--accent); color: #fff; font-size: 13px;
      font-weight: 700; border: none; border-radius: 10px; padding: 11px; cursor: pointer;
    }

    .modal-overlay {
      display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.6); z-index: 1000; align-items: center; justify-content: center; padding: 20px;
    }
    .modal-overlay.open { display: flex; }
    .modal-box {
      background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
      max-width: 300px; width: 100%; padding: 20px; text-align: center; box-shadow: var(--dropdown-shadow);
    }
    .modal-box h3 { font-size: 16px; font-weight: 700; margin-bottom: 6px; color: var(--text); }
    .modal-box p { font-size: 13px; color: var(--text-muted); margin-bottom: 18px; }
    .modal-actions { display: flex; gap: 8px; }
    .modal-btn { flex: 1; padding: 9px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; border: none; }
    .modal-btn.cancel { background: var(--surface-subtle); color: var(--text-muted); }
    .modal-btn.confirm { background: #ef4444; color: #fff; }
  </style>
</head>
<body>

<header>
  <div class="header-left">
    <h1>Meta Proteica</h1>
    <span class="theme-indicator" id="themeStatus"></span>
  </div>
  <div style="display:flex; align-items:center; gap:8px;">
    <span style="font-size:12px; color:var(--text-muted);" id="headerDate"></span>
    <button class="icon-btn" onclick="toggleThemeManual()" title="Alternar Modo Claro/Escuro" id="themeToggleBtn">☀️</button>
    <button class="icon-btn" onclick="toggleGoalCard()" title="Ajustar Meta">⚙️</button>
  </div>
</header>

<div class="container">
  <div class="goal-card" id="goalCard">
    <div class="goal-card-header">
      <div class="goal-card-title">Configurar Meta Diária</div>
      <span class="badge-calc">g/kg × kg</span>
    </div>
    <div class="summary-hero">
      <div class="summary-label">Meta Calculada</div>
      <div><span class="summary-number" id="calcGoalVal">100</span> <span class="summary-unit">g / dia</span></div>
      <div class="summary-formula"><span id="formulaRatio">2,0 g/kg</span> × <span id="formulaWeight">70 kg</span> = <span id="formulaGoal">140g</span></div>
    </div>
    <div class="control-block">
      <div class="control-top"><span>Ingestão Desejada</span><span class="control-value-badge" id="ratioBadge">2,0 g/kg</span></div>
      <input type="range" class="range-input" id="ratioSlider" min="1.0" max="2.0" step="0.1" value="2.0" />
    </div>
    <div class="control-block">
      <div class="control-top"><span>Peso Corporal</span><span class="control-value-badge blue" id="weightBadge">70 kg</span></div>
      <input type="range" class="range-input blue" id="weightSlider" min="40" max="100" step="1" value="70" />
    </div>
    <button class="save-goal-btn" onclick="saveCustomGoal()">✓ Aplicar Meta</button>
  </div>

  <div class="progress-hero">
    <div class="ring-wrap">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle class="ring-bg" cx="70" cy="70" r="58"/>
        <circle class="ring-fill" id="ringFill" cx="70" cy="70" r="58" stroke-dasharray="364.42" stroke-dashoffset="364.42"/>
      </svg>
      <div class="ring-label">
        <div class="pct" id="pctLabel">0%</div>
        <div class="unit" id="gramLabel">0 / 100g</div>
      </div>
    </div>
    <div class="progress-sub">Faltam <span id="remaining">100g</span> para a meta</div>
    <div class="hero-actions">
      <button class="pill-btn" onclick="toggleGoalCard()">⚙️ Meta</button>
      <button class="pill-btn" onclick="resetDay()">🔄 Resetar dia</button>
    </div>
  </div>

  <div class="section-label">Alimentos Rápidos</div>
  <div class="food-grid" id="foodGrid"></div>

  <div class="section-label">Buscar na TACO</div>
  <div class="taco-search-card">
    <div class="search-input-wrap">
      <input type="text" id="tacoSearchInput" placeholder="Buscar 597 alimentos (ex: ovo, pão, atum...)" autocomplete="off" oninput="onTacoSearch(this.value)"/>
      <div id="tacoDropdown" class="taco-dropdown"></div>
    </div>

    <div class="portion-box" id="portionBox">
      <div class="portion-header">
        <span class="selected-title" id="selectedFoodTitle">Alimento</span>
        <span class="selected-rate" id="selectedFoodRate">0,0g / 100g</span>
      </div>

      <div class="unit-pills-row" id="unitPillsRow"></div>

      <div class="portion-actions-row">
        <div class="stepper">
          <button onclick="changeQty(-1)">−</button>
          <input type="number" id="portionQtyInput" value="1" min="0.1" step="any" oninput="onQtyChange(this.value)"/>
          <button onclick="changeQty(1)">+</button>
        </div>

        <div class="prot-result-display">
          <span class="caption">Proteína</span>
          <span class="value" id="portionProtVal">0,0g</span>
        </div>

        <button class="add-taco-btn" onclick="commitTacoEntry()">+ Adicionar</button>
      </div>
    </div>
  </div>

  <div class="history-card">
    <div class="history-header">
      <span class="h-title">Histórico de Hoje</span>
      <span class="h-total" id="histTotal">0g registrados</span>
    </div>
    <ul class="log-list" id="logList"></ul>
    <div class="empty-log" id="emptyLog">Nenhum registro ainda hoje.</div>
  </div>
</div>

<script>
  let GOAL = 100;
  let USER_RATIO = 2.0;
  let USER_WEIGHT = 70;
  const CIRCUMFERENCE = 2 * Math.PI * 58;

  let isDarkMode = false;
  let manualThemeOverride = false;

  function checkAutoTheme() {
    if (manualThemeOverride) return;
    const hour = new Date().getHours();
    const shouldBeDark = (hour >= 18 || hour < 6);
    setTheme(shouldBeDark);
  }

  function setTheme(dark) {
    isDarkMode = dark;
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.getElementById("themeToggleBtn").textContent = isDarkMode ? "🌙" : "☀️";
    document.getElementById("themeStatus").textContent = isDarkMode ? "• Noite" : "• Dia";
  }

  function toggleThemeManual() {
    manualThemeOverride = true;
    setTheme(!isDarkMode);
  }

  const FOODS = [
    { name: "Frango grelhado",     detail: "70g (1 porção)",     prot: 22   },
    { name: "Leite desnatado",     detail: "200ml (1 copo)",     prot: 6.6  },
    { name: "Whey Protein",        detail: "50g (1 scoop)",      prot: 30   },
    { name: "Queijo Minas Frescal",detail: "60g (2 fatias)",     prot: 10.4 },
    { name: "Cottage",             detail: "50g (~2 col. sopa)", prot: 7    },
    { name: "Polenguinho",         detail: "20g (1 unidade)",    prot: 2    },
    { name: "Atum (escorrido)",    detail: "120g (1 lata)",      prot: 31   },
    { name: "Ovo médio",           detail: "45g",                prot: 6    },
    { name: "Ovo grande",          detail: "50g",                prot: 6.6  },
    { name: "Ovo jumbo / caipira", detail: "60g",                prot: 8    },
    { name: "YoPro 15g",           detail: "250ml (1 unidade)",  prot: 15   },
    { name: "Yakult",              detail: "80g (1 unidade)",    prot: 1    },
    { name: "Requeijão Cremoso",   detail: "15g (1 col. sopa)",  prot: 1.4  },
  ];

  const HOUSEHOLD_RULES = [
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

  const TACO_DATABASE = [[1, "Arroz, integral, cozido", 2.6, "Cereais e derivados"], [2, "Arroz, integral, cru", 7.3, "Cereais e derivados"], [3, "Arroz, tipo 1, cozido", 2.5, "Cereais e derivados"], [4, "Arroz, tipo 1, cru", 7.2, "Cereais e derivados"], [5, "Arroz, tipo 2, cozido", 2.6, "Cereais e derivados"], [6, "Arroz, tipo 2, cru", 7.2, "Cereais e derivados"], [7, "Aveia, flocos, crua", 13.9, "Cereais e derivados"], [8, "Biscoito, doce, maisena", 8.1, "Cereais e derivados"], [9, "Biscoito, doce, recheado com chocolate", 6.4, "Cereais e derivados"], [10, "Biscoito, doce, recheado com morango", 5.7, "Cereais e derivados"], [11, "Biscoito, doce, wafer, recheado de chocolate", 5.6, "Cereais e derivados"], [12, "Biscoito, doce, wafer, recheado de morango", 4.5, "Cereais e derivados"], [13, "Biscoito, salgado, cream cracker", 10.1, "Cereais e derivados"], [14, "Bolo, mistura para", 6.2, "Cereais e derivados"], [15, "Bolo, pronto, aipim", 4.4, "Cereais e derivados"], [16, "Bolo, pronto, chocolate", 6.2, "Cereais e derivados"], [17, "Bolo, pronto, coco", 5.7, "Cereais e derivados"], [18, "Bolo, pronto, milho", 4.8, "Cereais e derivados"], [19, "Canjica, branca, crua", 7.2, "Cereais e derivados"], [20, "Canjica, com leite integral", 2.4, "Cereais e derivados"], [21, "Cereais, milho, flocos, com sal", 7.3, "Cereais e derivados"], [22, "Cereais, milho, flocos, sem sal", 6.9, "Cereais e derivados"], [23, "Cereais, mingau, milho, infantil", 6.4, "Cereais e derivados"], [24, "Cereais, mistura para vitamina, trigo, cevada e aveia", 8.9, "Cereais e derivados"], [25, "Cereal matinal, milho", 7.2, "Cereais e derivados"], [26, "Cereal matinal, milho, açúcar", 4.7, "Cereais e derivados"], [27, "Creme de arroz, pó", 7.0, "Cereais e derivados"], [28, "Creme de milho, pó", 4.8, "Cereais e derivados"], [29, "Curau, milho verde", 2.4, "Cereais e derivados"], [30, "Curau, milho verde, mistura para", 2.2, "Cereais e derivados"], [31, "Farinha, de arroz, enriquecida", 1.3, "Cereais e derivados"], [32, "Farinha, de centeio, integral", 12.5, "Cereais e derivados"], [33, "Farinha, de milho, amarela", 7.2, "Cereais e derivados"], [34, "Farinha, de rosca", 11.4, "Cereais e derivados"], [35, "Farinha, de trigo", 9.8, "Cereais e derivados"], [36, "Farinha, láctea, de cereais", 11.9, "Cereais e derivados"], [37, "Lasanha, massa fresca, cozida", 5.8, "Cereais e derivados"], [38, "Lasanha, massa fresca, crua", 7.0, "Cereais e derivados"], [39, "Macarrão, instantâneo", 8.8, "Cereais e derivados"], [40, "Macarrão, trigo, cru", 10.0, "Cereais e derivados"], [41, "Macarrão, trigo, cru, com ovos", 10.3, "Cereais e derivados"], [42, "Milho, amido, cru", 0.6, "Cereais e derivados"], [43, "Milho, fubá, cru", 7.2, "Cereais e derivados"], [44, "Milho, verde, cru", 6.6, "Cereais e derivados"], [45, "Milho, verde, enlatado, drenado", 3.2, "Cereais e derivados"], [46, "Mingau tradicional, pó", 0.6, "Cereais e derivados"], [47, "Pamonha, barra para cozimento, pré-cozida", 2.6, "Cereais e derivados"], [48, "Pão, aveia, forma", 12.3, "Cereais e derivados"], [49, "Pão, de soja", 11.3, "Cereais e derivados"], [50, "Pão, glúten, forma", 12.0, "Cereais e derivados"], [51, "Pão, milho, forma", 8.3, "Cereais e derivados"], [52, "Pão, trigo, forma, integral", 9.4, "Cereais e derivados"], [53, "Pão, trigo, francês", 8.0, "Cereais e derivados"], [54, "Pão, trigo, sovado", 8.4, "Cereais e derivados"], [55, "Pastel, de carne, cru", 10.7, "Cereais e derivados"], [56, "Pastel, de carne, frito", 10.1, "Cereais e derivados"], [57, "Pastel, de queijo, cru", 9.9, "Cereais e derivados"], [58, "Pastel, de queijo, frito", 8.7, "Cereais e derivados"], [59, "Pastel, massa, crua", 6.9, "Cereais e derivados"], [60, "Pastel, massa, frita", 6.0, "Cereais e derivados"], [61, "Pipoca, com óleo de soja, sem sal", 9.9, "Cereais e derivados"], [62, "Polenta, pré-cozida", 2.3, "Cereais e derivados"], [63, "Torrada, pão francês", 10.5, "Cereais e derivados"], [64, "Abóbora, cabotian, cozida", 1.4, "Verduras, hortaliças e derivados"], [65, "Abóbora, cabotian, crua", 1.7, "Verduras, hortaliças e derivados"], [66, "Abóbora, menina brasileira, crua", 0.6, "Verduras, hortaliças e derivados"], [67, "Abóbora, moranga, crua", 1.0, "Verduras, hortaliças e derivados"], [68, "Abóbora, moranga, refogada", 0.4, "Verduras, hortaliças e derivados"], [69, "Abóbora, pescoço, crua", 0.7, "Verduras, hortaliças e derivados"], [70, "Abobrinha, italiana, cozida", 1.1, "Verduras, hortaliças e derivados"], [71, "Abobrinha, italiana, crua", 1.1, "Verduras, hortaliças e derivados"], [72, "Abobrinha, italiana, refogada", 1.1, "Verduras, hortaliças e derivados"], [73, "Abobrinha, paulista, crua", 0.6, "Verduras, hortaliças e derivados"], [74, "Acelga, crua", 1.4, "Verduras, hortaliças e derivados"], [75, "Agrião, cru", 2.7, "Verduras, hortaliças e derivados"], [76, "Aipo, cru", 0.8, "Verduras, hortaliças e derivados"], [77, "Alface, americana, crua", 0.6, "Verduras, hortaliças e derivados"], [78, "Alface, crespa, crua", 1.3, "Verduras, hortaliças e derivados"], [79, "Alface, lisa, crua", 1.7, "Verduras, hortaliças e derivados"], [80, "Alface, roxa, crua", 0.9, "Verduras, hortaliças e derivados"], [81, "Alfavaca, crua", 2.7, "Verduras, hortaliças e derivados"], [82, "Alho, cru", 7.0, "Verduras, hortaliças e derivados"], [83, "Alho-poró, cru", 1.4, "Verduras, hortaliças e derivados"], [84, "Almeirão, cru", 1.8, "Verduras, hortaliças e derivados"], [85, "Almeirão, refogado", 1.7, "Verduras, hortaliças e derivados"], [86, "Batata, baroa, cozida", 0.9, "Verduras, hortaliças e derivados"], [87, "Batata, baroa, crua", 1.0, "Verduras, hortaliças e derivados"], [88, "Batata, doce, cozida", 0.6, "Verduras, hortaliças e derivados"], [89, "Batata, doce, crua", 1.3, "Verduras, hortaliças e derivados"], [90, "Batata, frita, tipo chips, industrializada", 5.6, "Verduras, hortaliças e derivados"], [91, "Batata, inglesa, cozida", 1.2, "Verduras, hortaliças e derivados"], [92, "Batata, inglesa, crua", 1.8, "Verduras, hortaliças e derivados"], [93, "Batata, inglesa, frita", 5.0, "Verduras, hortaliças e derivados"], [94, "Batata, inglesa, sauté", 1.3, "Verduras, hortaliças e derivados"], [95, "Berinjela, cozida", 0.7, "Verduras, hortaliças e derivados"], [96, "Berinjela, crua", 1.2, "Verduras, hortaliças e derivados"], [97, "Beterraba, cozida", 1.3, "Verduras, hortaliças e derivados"], [98, "Beterraba, crua", 1.9, "Verduras, hortaliças e derivados"], [99, "Biscoito, polvilho doce", 1.3, "Verduras, hortaliças e derivados"], [100, "Brócolis, cozido", 2.1, "Verduras, hortaliças e derivados"], [101, "Brócolis, cru", 3.6, "Verduras, hortaliças e derivados"], [102, "Cará, cozido", 1.5, "Verduras, hortaliças e derivados"], [103, "Cará, cru", 2.3, "Verduras, hortaliças e derivados"], [104, "Caruru, cru", 3.2, "Verduras, hortaliças e derivados"], [105, "Catalonha, crua", 1.9, "Verduras, hortaliças e derivados"], [106, "Catalonha, refogada", 1.9, "Verduras, hortaliças e derivados"], [107, "Cebola, crua", 1.7, "Verduras, hortaliças e derivados"], [108, "Cebolinha, crua", 1.9, "Verduras, hortaliças e derivados"], [109, "Cenoura, cozida", 0.8, "Verduras, hortaliças e derivados"], [110, "Cenoura, crua", 1.3, "Verduras, hortaliças e derivados"], [111, "Chicória, crua", 1.1, "Verduras, hortaliças e derivados"], [112, "Chuchu, cozido", 0.4, "Verduras, hortaliças e derivados"], [113, "Chuchu, cru", 0.7, "Verduras, hortaliças e derivados"], [114, "Coentro, folhas desidratadas", 20.9, "Verduras, hortaliças e derivados"], [115, "Couve, manteiga, crua", 2.9, "Verduras, hortaliças e derivados"], [116, "Couve, manteiga, refogada ", 1.7, "Verduras, hortaliças e derivados"], [117, "Couve-flor, crua", 1.9, "Verduras, hortaliças e derivados"], [118, "Couve-flor, cozida", 1.2, "Verduras, hortaliças e derivados"], [119, "Espinafre, Nova Zelândia, cru", 2.0, "Verduras, hortaliças e derivados"], [120, "Espinafre, Nova Zelândia, refogado", 2.7, "Verduras, hortaliças e derivados"], [121, "Farinha, de mandioca, crua", 1.6, "Verduras, hortaliças e derivados"], [122, "Farinha, de mandioca, torrada", 1.2, "Verduras, hortaliças e derivados"], [123, "Farinha, de puba", 1.6, "Verduras, hortaliças e derivados"], [124, "Fécula, de mandioca", 0.5, "Verduras, hortaliças e derivados"], [125, "Feijão, broto, cru", 4.2, "Verduras, hortaliças e derivados"], [126, "Inhame, cru", 2.1, "Verduras, hortaliças e derivados"], [127, "Jiló, cru", 1.4, "Verduras, hortaliças e derivados"], [128, "Jurubeba, crua", 4.4, "Verduras, hortaliças e derivados"], [129, "Mandioca, cozida", 0.6, "Verduras, hortaliças e derivados"], [130, "Mandioca, crua", 1.1, "Verduras, hortaliças e derivados"], [131, "Mandioca, farofa, temperada", 2.1, "Verduras, hortaliças e derivados"], [132, "Mandioca, frita", 1.4, "Verduras, hortaliças e derivados"], [133, "Manjericão, cru", 2.0, "Verduras, hortaliças e derivados"], [134, "Maxixe, cru", 1.4, "Verduras, hortaliças e derivados"], [135, "Mostarda, folha, crua", 2.1, "Verduras, hortaliças e derivados"], [136, "Nhoque, batata, cozido", 5.9, "Verduras, hortaliças e derivados"], [137, "Nabo, cru", 1.2, "Verduras, hortaliças e derivados"], [138, "Palmito, juçara, em conserva", 1.8, "Verduras, hortaliças e derivados"], [139, "Palmito, pupunha, em conserva", 2.5, "Verduras, hortaliças e derivados"], [140, "Pão, de queijo, assado", 5.1, "Verduras, hortaliças e derivados"], [141, "Pão, de queijo, cru", 3.6, "Verduras, hortaliças e derivados"], [142, "Pepino, cru", 0.9, "Verduras, hortaliças e derivados"], [143, "Pimentão, amarelo, cru", 1.2, "Verduras, hortaliças e derivados"], [144, "Pimentão, verde, cru", 1.1, "Verduras, hortaliças e derivados"], [145, "Pimentão, vermelho, cru", 1.0, "Verduras, hortaliças e derivados"], [146, "Polvilho, doce", 0.4, "Verduras, hortaliças e derivados"], [147, "Quiabo, cru", 1.9, "Verduras, hortaliças e derivados"], [148, "Rabanete, cru", 1.4, "Verduras, hortaliças e derivados"], [149, "Repolho, branco, cru", 0.9, "Verduras, hortaliças e derivados"], [150, "Repolho, roxo, cru", 1.9, "Verduras, hortaliças e derivados"], [151, "Repolho, roxo, refogado", 1.8, "Verduras, hortaliças e derivados"], [152, "Rúcula, crua", 1.8, "Verduras, hortaliças e derivados"], [153, "Salsa, crua", 3.3, "Verduras, hortaliças e derivados"], [154, "Seleta de legumes, enlatada", 3.4, "Verduras, hortaliças e derivados"], [155, "Serralha, crua", 2.7, "Verduras, hortaliças e derivados"], [156, "Taioba, crua", 2.9, "Verduras, hortaliças e derivados"], [157, "Tomate, com semente, cru", 1.1, "Verduras, hortaliças e derivados"], [158, "Tomate, extrato", 2.4, "Verduras, hortaliças e derivados"], [159, "Tomate, molho industrializado", 1.4, "Verduras, hortaliças e derivados"], [160, "Tomate, purê", 1.4, "Verduras, hortaliças e derivados"], [161, "Tomate, salada", 0.8, "Verduras, hortaliças e derivados"], [162, "Vagem, crua", 1.8, "Verduras, hortaliças e derivados"], [163, "Abacate, cru", 1.2, "Frutas e derivados"], [164, "Abacaxi, cru", 0.9, "Frutas e derivados"], [165, "Abacaxi, polpa, congelada", 0.5, "Frutas e derivados"], [166, "Abiu, cru", 0.8, "Frutas e derivados"], [167, "Açaí, polpa, com xarope de guaraná e glucose", 0.7, "Frutas e derivados"], [168, "Açaí, polpa, congelada", 0.8, "Frutas e derivados"], [169, "Acerola, crua", 0.9, "Frutas e derivados"], [170, "Acerola, polpa, congelada", 0.6, "Frutas e derivados"], [171, "Ameixa, calda, enlatada ", 0.4, "Frutas e derivados"], [172, "Ameixa, crua", 0.8, "Frutas e derivados"], [173, "Ameixa, em calda, enlatada, drenada ", 1.0, "Frutas e derivados"], [174, "Atemóia, crua", 1.0, "Frutas e derivados"], [175, "Banana, da terra, crua", 1.4, "Frutas e derivados"], [176, "Banana, doce em barra", 2.2, "Frutas e derivados"], [177, "Banana, figo, crua", 1.1, "Frutas e derivados"], [178, "Banana, maçã, crua", 1.8, "Frutas e derivados"], [179, "Banana, nanica, crua", 1.4, "Frutas e derivados"], [180, "Banana, ouro, crua", 1.5, "Frutas e derivados"], [181, "Banana, pacova, crua", 1.2, "Frutas e derivados"], [182, "Banana, prata, crua", 1.3, "Frutas e derivados"], [183, "Cacau, cru", 1.0, "Frutas e derivados"], [184, "Cajá-Manga, cru", 1.3, "Frutas e derivados"], [185, "Cajá, polpa, congelada", 0.6, "Frutas e derivados"], [186, "Caju, cru", 1.0, "Frutas e derivados"], [187, "Caju, polpa, congelada", 0.5, "Frutas e derivados"], [188, "Caju, suco concentrado, envasado", 0.4, "Frutas e derivados"], [189, "Caqui, chocolate, cru", 0.4, "Frutas e derivados"], [190, "Carambola, crua", 0.9, "Frutas e derivados"], [191, "Ciriguela, crua", 1.4, "Frutas e derivados"], [192, "Cupuaçu, cru", 1.2, "Frutas e derivados"], [193, "Cupuaçu, polpa, congelada", 0.8, "Frutas e derivados"], [194, "Figo, cru", 1.0, "Frutas e derivados"], [195, "Figo, enlatado, em calda", 0.6, "Frutas e derivados"], [196, "Fruta-pão, crua", 1.1, "Frutas e derivados"], [197, "Goiaba, branca, com casca, crua", 0.9, "Frutas e derivados"], [198, "Goiaba, doce em pasta", 0.6, "Frutas e derivados"], [199, "Goiaba, doce, cascão", 0.4, "Frutas e derivados"], [200, "Goiaba, vermelha, com casca, crua", 1.1, "Frutas e derivados"], [201, "Graviola, crua", 0.8, "Frutas e derivados"], [202, "Graviola, polpa, congelada", 0.6, "Frutas e derivados"], [203, "Jabuticaba, crua", 0.6, "Frutas e derivados"], [204, "Jaca, crua", 1.4, "Frutas e derivados"], [205, "Jambo, cru", 0.9, "Frutas e derivados"], [206, "Jamelão, cru", 0.5, "Frutas e derivados"], [207, "Kiwi, cru", 1.3, "Frutas e derivados"], [208, "Laranja, baía, crua", 1.0, "Frutas e derivados"], [209, "Laranja, baía, suco", 0.7, "Frutas e derivados"], [210, "Laranja, da terra, crua", 1.1, "Frutas e derivados"], [211, "Laranja, da terra, suco", 0.7, "Frutas e derivados"], [212, "Laranja, lima, crua", 1.1, "Frutas e derivados"], [213, "Laranja, lima, suco", 0.7, "Frutas e derivados"], [214, "Laranja, pêra, crua", 1.0, "Frutas e derivados"], [215, "Laranja, pêra, suco", 0.7, "Frutas e derivados"], [216, "Laranja, valência, crua", 0.8, "Frutas e derivados"], [217, "Laranja, valência, suco", 0.5, "Frutas e derivados"], [218, "Limão, cravo, suco", 0.3, "Frutas e derivados"], [219, "Limão, galego, suco", 0.6, "Frutas e derivados"], [220, "Limão, tahiti, cru", 0.9, "Frutas e derivados"], [221, "Maçã, Argentina, com casca, crua", 0.2, "Frutas e derivados"], [222, "Maçã, Fuji, com casca, crua", 0.3, "Frutas e derivados"], [223, "Macaúba, crua", 2.1, "Frutas e derivados"], [224, " Mamão, doce em calda, drenado", 0.2, "Frutas e derivados"], [225, "Mamão, Formosa, cru", 0.8, "Frutas e derivados"], [226, "Mamão, Papaia, cru", 0.5, "Frutas e derivados"], [227, " Mamão verde, doce em calda, drenado", 0.3, "Frutas e derivados"], [228, "Manga, Haden, crua", 0.4, "Frutas e derivados"], [229, "Manga, Palmer, crua", 0.4, "Frutas e derivados"], [230, "Manga, polpa, congelada", 0.4, "Frutas e derivados"], [231, "Manga, Tommy Atkins, crua", 0.9, "Frutas e derivados"], [232, "Maracujá, cru", 2.0, "Frutas e derivados"], [233, "Maracujá, polpa, congelada", 0.8, "Frutas e derivados"], [234, "Maracujá, suco concentrado, envasado", 0.8, "Frutas e derivados"], [235, "Melancia, crua", 0.9, "Frutas e derivados"], [236, "Melão, cru", 0.7, "Frutas e derivados"], [237, "Mexerica, Murcote, crua", 0.9, "Frutas e derivados"], [238, "Mexerica, Rio, crua", 0.7, "Frutas e derivados"], [239, "Morango, cru", 0.9, "Frutas e derivados"], [240, "Nêspera, crua", 0.3, "Frutas e derivados"], [241, "Pequi, cru", 2.3, "Frutas e derivados"], [242, "Pêra, Park, crua", 0.2, "Frutas e derivados"], [243, "Pêra, Williams, crua", 0.6, "Frutas e derivados"], [244, "Pêssego, Aurora, cru", 0.8, "Frutas e derivados"], [245, "Pêssego, enlatado, em calda", 0.7, "Frutas e derivados"], [246, "Pinha, crua", 1.5, "Frutas e derivados"], [247, "Pitanga, crua", 0.9, "Frutas e derivados"], [248, "Pitanga, polpa, congelada", 0.3, "Frutas e derivados"], [249, "Romã, crua", 0.4, "Frutas e derivados"], [250, "Tamarindo, cru", 3.2, "Frutas e derivados"], [251, "Tangerina, Poncã, crua", 0.8, "Frutas e derivados"], [252, "Tangerina, Poncã, suco", 0.5, "Frutas e derivados"], [253, "Tucumã, cru", 2.1, "Frutas e derivados"], [254, "Umbu, cru", 0.8, "Frutas e derivados"], [255, "Umbu, polpa, congelada", 0.5, "Frutas e derivados"], [256, "Uva, Itália, crua", 0.7, "Frutas e derivados"], [257, "Uva, Rubi, crua", 0.6, "Frutas e derivados"], [258, "Uva, suco concentrado, envasado", 0.0, "Frutas e derivados"], [259, "Azeite, de dendê", 0.0, "Gorduras e óleos"], [260, "Azeite, de oliva, extra virgem", 0.0, "Gorduras e óleos"], [261, "Manteiga, com sal", 0.4, "Gorduras e óleos"], [262, "Manteiga, sem sal", 0.4, "Gorduras e óleos"], [263, "Margarina, com óleo hidrogenado, com sal (65% de lipídeos)", 0.0, "Gorduras e óleos"], [264, "Margarina, com óleo hidrogenado, sem sal (80% de lipídeos)", 0.0, "Gorduras e óleos"], [265, "Margarina, com óleo interesterificado, com sal (65%de lipídeos)", 0.0, "Gorduras e óleos"], [266, "Margarina, com óleo interesterificado, sem sal (65% de lipídeos)", 0.0, "Gorduras e óleos"], [267, "Óleo, de babaçu", 0.0, "Gorduras e óleos"], [268, "Óleo, de canola", 0.0, "Gorduras e óleos"], [269, "Óleo, de girassol", 0.0, "Gorduras e óleos"], [270, "Óleo, de milho", 0.0, "Gorduras e óleos"], [271, "Óleo, de pequi", 0.0, "Gorduras e óleos"], [272, "Óleo, de soja", 0.0, "Gorduras e óleos"], [273, "Abadejo, filé, congelado, assado", 23.5, "Pescados e frutos do mar"], [274, "Abadejo, filé, congelado,cozido", 19.3, "Pescados e frutos do mar"], [275, "Abadejo, filé, congelado, cru", 13.1, "Pescados e frutos do mar"], [276, "Abadejo, filé, congelado, grelhado", 27.6, "Pescados e frutos do mar"], [277, "Atum, conserva em óleo", 26.2, "Pescados e frutos do mar"], [278, "Atum, fresco, cru", 25.7, "Pescados e frutos do mar"], [279, "Bacalhau, salgado, cru", 29.0, "Pescados e frutos do mar"], [280, "Bacalhau, salgado, refogado", 24.0, "Pescados e frutos do mar"], [281, "Cação, posta, com farinha de trigo, frita", 25.0, "Pescados e frutos do mar"], [282, "Cação, posta, cozida", 25.6, "Pescados e frutos do mar"], [283, "Cação, posta, crua", 17.9, "Pescados e frutos do mar"], [284, "Camarão, Rio Grande, grande, cozido", 19.0, "Pescados e frutos do mar"], [285, "Camarão, Rio Grande, grande, cru", 10.0, "Pescados e frutos do mar"], [286, "Camarão, Sete Barbas, sem cabeça, com casca, frito", 18.4, "Pescados e frutos do mar"], [287, "Caranguejo, cozido", 18.5, "Pescados e frutos do mar"], [288, "Corimba, cru", 17.4, "Pescados e frutos do mar"], [289, "Corimbatá, assado", 19.9, "Pescados e frutos do mar"], [290, "Corimbatá, cozido", 20.1, "Pescados e frutos do mar"], [291, "Corvina de água doce, crua", 18.9, "Pescados e frutos do mar"], [292, "Corvina do mar, crua", 18.6, "Pescados e frutos do mar"], [293, "Corvina grande, assada", 26.8, "Pescados e frutos do mar"], [294, "Corvina grande, cozida", 23.4, "Pescados e frutos do mar"], [295, "Dourada de água doce, fresca", 18.8, "Pescados e frutos do mar"], [296, "Lambari, congelado, cru", 16.8, "Pescados e frutos do mar"], [297, "Lambari, congelado, frito", 28.4, "Pescados e frutos do mar"], [298, "Lambari, fresco, cru", 15.7, "Pescados e frutos do mar"], [299, "Manjuba, com farinha de trigo, frita", 23.4, "Pescados e frutos do mar"], [300, "Manjuba, frita", 30.1, "Pescados e frutos do mar"], [301, "Merluza, filé, assado", 26.6, "Pescados e frutos do mar"], [302, "Merluza, filé, cru", 16.6, "Pescados e frutos do mar"], [303, "Merluza, filé, frito", 26.9, "Pescados e frutos do mar"], [304, "Pescada, branca, crua", 16.3, "Pescados e frutos do mar"], [305, "Pescada, branca, frita", 27.4, "Pescados e frutos do mar"], [306, "Pescada, filé, com farinha de trigo, frito", 21.4, "Pescados e frutos do mar"], [307, "Pescada, filé, cru", 16.6, "Pescados e frutos do mar"], [308, "Pescada, filé, frito", 28.6, "Pescados e frutos do mar"], [309, "Pescada, filé, molho escabeche", 11.8, "Pescados e frutos do mar"], [310, "Pescadinha, crua", 15.5, "Pescados e frutos do mar"], [311, "Pintado, assado", 36.5, "Pescados e frutos do mar"], [312, "Pintado, cru", 18.6, "Pescados e frutos do mar"], [313, "Pintado, grelhado", 30.8, "Pescados e frutos do mar"], [314, "Porquinho, cru", 20.5, "Pescados e frutos do mar"], [315, "Salmão, filé, com pele, fresco,  grelhado", 23.9, "Pescados e frutos do mar"], [316, "Salmão, sem pele, fresco, cru", 19.3, "Pescados e frutos do mar"], [317, "Salmão, sem pele, fresco, grelhado", 26.1, "Pescados e frutos do mar"], [318, "Sardinha, assada", 32.2, "Pescados e frutos do mar"], [319, "Sardinha, conserva em óleo", 15.9, "Pescados e frutos do mar"], [320, "Sardinha, frita", 33.4, "Pescados e frutos do mar"], [321, "Sardinha, inteira, crua", 21.1, "Pescados e frutos do mar"], [322, "Tucunaré, filé, congelado, cru", 18.0, "Pescados e frutos do mar"], [323, "Apresuntado", 13.4, "Carnes e derivados"], [324, "Caldo de carne, tablete", 7.8, "Carnes e derivados"], [325, "Caldo de galinha, tablete", 6.3, "Carnes e derivados"], [326, "Carne, bovina, acém, moído, cozido", 26.7, "Carnes e derivados"], [327, "Carne, bovina, acém, moído, cru", 19.4, "Carnes e derivados"], [328, "Carne, bovina, acém, sem gordura, cozido", 27.3, "Carnes e derivados"], [329, "Carne, bovina, acém, sem gordura, cru", 20.8, "Carnes e derivados"], [330, "Carne, bovina, almôndegas, cruas", 12.3, "Carnes e derivados"], [331, "Carne, bovina, almôndegas, fritas", 18.2, "Carnes e derivados"], [332, "Carne, bovina, bucho, cozido", 21.6, "Carnes e derivados"], [333, "Carne, bovina, bucho, cru", 20.5, "Carnes e derivados"], [334, "Carne, bovina, capa de contra-filé, com gordura, crua", 19.2, "Carnes e derivados"], [335, "Carne, bovina, capa de contra-filé, com gordura, grelhada", 30.7, "Carnes e derivados"], [336, "Carne, bovina, capa de contra-filé, sem gordura, crua", 21.5, "Carnes e derivados"], [337, "Carne, bovina, capa de contra-filé, sem gordura, grelhada", 35.1, "Carnes e derivados"], [338, "Carne, bovina, charque, cozido", 36.4, "Carnes e derivados"], [339, "Carne, bovina, charque, cru", 22.7, "Carnes e derivados"], [340, "Carne, bovina, contra-filé, à milanesa", 20.6, "Carnes e derivados"], [341, "Carne, bovina, contra-filé de costela, cru", 19.8, "Carnes e derivados"], [342, "Carne, bovina, contra-filé de costela, grelhado", 29.9, "Carnes e derivados"], [343, "Carne, bovina, contra-filé, com gordura, cru", 21.1, "Carnes e derivados"], [344, "Carne, bovina, contra-filé, com gordura, grelhado", 32.4, "Carnes e derivados"], [345, "Carne, bovina, contra-filé, sem gordura, cru", 24.0, "Carnes e derivados"], [346, "Carne, bovina, contra-filé, sem gordura, grelhado", 35.9, "Carnes e derivados"], [347, "Carne, bovina, costela, assada", 28.8, "Carnes e derivados"], [348, "Carne, bovina, costela, crua", 16.7, "Carnes e derivados"], [349, "Carne, bovina, coxão duro, sem gordura, cozido", 31.9, "Carnes e derivados"], [350, "Carne, bovina, coxão duro, sem gordura, cru", 21.5, "Carnes e derivados"], [351, "Carne, bovina, coxão mole, sem gordura, cozido", 32.4, "Carnes e derivados"], [352, "Carne, bovina, coxão mole, sem gordura, cru", 21.2, "Carnes e derivados"], [353, "Carne, bovina, cupim, assado", 28.6, "Carnes e derivados"], [354, "Carne, bovina, cupim, cru", 19.5, "Carnes e derivados"], [355, "Carne, bovina, fígado, cru", 20.7, "Carnes e derivados"], [356, "Carne, bovina, fígado, grelhado", 29.9, "Carnes e derivados"], [357, "Carne, bovina, filé mingnon, sem gordura, cru", 21.6, "Carnes e derivados"], [358, "Carne, bovina, filé mingnon, sem gordura, grelhado", 32.8, "Carnes e derivados"], [359, "Carne, bovina, flanco, sem gordura, cozido", 29.4, "Carnes e derivados"], [360, "Carne, bovina, flanco, sem gordura, cru", 20.0, "Carnes e derivados"], [361, "Carne, bovina, fraldinha, com gordura, cozida", 24.2, "Carnes e derivados"], [362, "Carne, bovina, fraldinha, com gordura, crua", 17.6, "Carnes e derivados"], [363, "Carne, bovina, lagarto, cozido", 32.9, "Carnes e derivados"], [364, "Carne, bovina, lagarto, cru", 20.5, "Carnes e derivados"], [365, "Carne, bovina, língua, cozida", 21.4, "Carnes e derivados"], [366, "Carne, bovina, língua, crua", 17.1, "Carnes e derivados"], [367, "Carne, bovina, maminha, crua", 20.9, "Carnes e derivados"], [368, "Carne, bovina, maminha, grelhada", 30.7, "Carnes e derivados"], [369, "Carne, bovina, miolo de alcatra, sem gordura, cru", 21.6, "Carnes e derivados"], [370, "Carne, bovina, miolo de alcatra, sem gordura, grelhado", 31.9, "Carnes e derivados"], [371, "Carne, bovina, músculo, sem gordura, cozido", 31.2, "Carnes e derivados"], [372, "Carne, bovina, músculo, sem gordura, cru", 21.6, "Carnes e derivados"], [373, "Carne, bovina, paleta, com gordura, crua", 21.4, "Carnes e derivados"], [374, "Carne, bovina, paleta, sem gordura, cozida", 29.7, "Carnes e derivados"], [375, "Carne, bovina, paleta, sem gordura, crua", 21.0, "Carnes e derivados"], [376, "Carne, bovina, patinho, sem gordura, cru", 21.7, "Carnes e derivados"], [377, "Carne, bovina, patinho, sem gordura, grelhado", 35.9, "Carnes e derivados"], [378, "Carne, bovina, peito, sem gordura, cozido", 22.2, "Carnes e derivados"], [379, "Carne, bovina, peito, sem gordura, cru", 17.6, "Carnes e derivados"], [380, "Carne, bovina, picanha, com gordura, crua", 18.8, "Carnes e derivados"], [381, "Carne, bovina, picanha, com gordura, grelhada", 26.4, "Carnes e derivados"], [382, "Carne, bovina, picanha, sem gordura, crua", 21.2, "Carnes e derivados"], [383, "Carne, bovina, picanha, sem gordura, grelhada", 31.9, "Carnes e derivados"], [384, "Carne, bovina, seca, cozida", 26.9, "Carnes e derivados"], [385, "Carne, bovina, seca, crua", 19.7, "Carnes e derivados"], [386, "Coxinha de frango, frita", 9.6, "Carnes e derivados"], [387, "Croquete, de carne, cru", 12.0, "Carnes e derivados"], [388, "Croquete, de carne, frito", 16.9, "Carnes e derivados"], [389, "Empada de frango, pré-cozida, assada", 6.9, "Carnes e derivados"], [390, "Empada, de frango, pré-cozida", 7.3, "Carnes e derivados"], [391, "Frango, asa, com pele, crua", 18.1, "Carnes e derivados"], [392, "Frango, caipira, inteiro, com pele, cozido", 23.9, "Carnes e derivados"], [393, "Frango, caipira, inteiro, sem pele, cozido", 29.6, "Carnes e derivados"], [394, "Frango, coração, cru", 12.6, "Carnes e derivados"], [395, "Frango, coração, grelhado", 22.4, "Carnes e derivados"], [396, "Frango, coxa, com pele, assada", 28.5, "Carnes e derivados"], [397, "Frango, coxa, com pele, crua", 17.1, "Carnes e derivados"], [398, "Frango, coxa, sem pele, cozida", 26.9, "Carnes e derivados"], [399, "Frango, coxa, sem pele, crua", 17.8, "Carnes e derivados"], [400, "Frango, fígado, cru", 17.6, "Carnes e derivados"], [401, "Frango, filé, à milanesa", 28.5, "Carnes e derivados"], [402, "Frango, inteiro, com pele, cru", 16.4, "Carnes e derivados"], [403, "Frango, inteiro, sem pele, assado", 28.0, "Carnes e derivados"], [404, "Frango, inteiro, sem pele, cozido", 25.0, "Carnes e derivados"], [405, "Frango, inteiro, sem pele, cru", 20.6, "Carnes e derivados"], [406, "Frango, peito, com pele, assado", 33.4, "Carnes e derivados"], [407, "Frango, peito, com pele, cru", 20.8, "Carnes e derivados"], [408, "Frango, peito, sem pele, cozido", 31.5, "Carnes e derivados"], [409, "Frango, peito, sem pele, cru", 21.5, "Carnes e derivados"], [410, "Frango, peito, sem pele, grelhado", 32.0, "Carnes e derivados"], [411, "Frango, sobrecoxa, com pele, assada", 28.7, "Carnes e derivados"], [412, "Frango, sobrecoxa, com pele, crua", 15.5, "Carnes e derivados"], [413, "Frango, sobrecoxa, sem pele, assada", 29.2, "Carnes e derivados"], [414, "Frango, sobrecoxa, sem pele, crua", 17.6, "Carnes e derivados"], [415, "Hambúrguer, bovino, cru", 13.2, "Carnes e derivados"], [416, "Hambúrguer, bovino, frito", 20.0, "Carnes e derivados"], [417, "Hambúrguer, bovino, grelhado", 13.2, "Carnes e derivados"], [418, "Lingüiça, frango, crua", 14.2, "Carnes e derivados"], [419, "Lingüiça, frango, frita", 18.3, "Carnes e derivados"], [420, "Lingüiça, frango, grelhada", 18.2, "Carnes e derivados"], [421, "Lingüiça, porco, crua", 16.1, "Carnes e derivados"], [422, "Lingüiça, porco, frita", 20.5, "Carnes e derivados"], [423, "Lingüiça, porco, grelhada", 23.2, "Carnes e derivados"], [424, "Mortadela", 12.0, "Carnes e derivados"], [425, "Peru, congelado, assado", 26.2, "Carnes e derivados"], [426, "Peru, congelado, cru", 18.1, "Carnes e derivados"], [427, "Porco, bisteca, crua", 21.5, "Carnes e derivados"], [428, "Porco, bisteca, frita", 33.7, "Carnes e derivados"], [429, "Porco, bisteca, grelhada", 28.9, "Carnes e derivados"], [430, "Porco, costela, assada", 30.2, "Carnes e derivados"], [431, "Porco, costela, crua", 18.0, "Carnes e derivados"], [432, "Porco, lombo, assado", 35.7, "Carnes e derivados"], [433, "Porco, lombo, cru", 22.6, "Carnes e derivados"], [434, "Porco, orelha, salgada, crua", 18.5, "Carnes e derivados"], [435, "Porco, pernil, assado", 32.1, "Carnes e derivados"], [436, "Porco, pernil, cru", 20.1, "Carnes e derivados"], [437, "Porco, rabo, salgado, cru", 15.6, "Carnes e derivados"], [438, "Presunto, com capa de gordura", 14.4, "Carnes e derivados"], [439, "Presunto, sem capa de gordura", 14.3, "Carnes e derivados"], [440, "Quibe, assado", 14.6, "Carnes e derivados"], [441, "Quibe, cru", 12.4, "Carnes e derivados"], [442, "Quibe, frito", 14.9, "Carnes e derivados"], [443, "Salame", 25.8, "Carnes e derivados"], [444, "Toucinho, cru", 11.5, "Carnes e derivados"], [445, "Toucinho, frito", 27.3, "Carnes e derivados"], [446, "Bebida láctea, pêssego", 2.1, "Leite e derivados"], [447, "Creme de Leite", 1.5, "Leite e derivados"], [448, "Iogurte, natural", 4.1, "Leite e derivados"], [449, "Iogurte, natural, desnatado", 3.8, "Leite e derivados"], [450, "Iogurte, sabor abacaxi", 0.0, "Leite e derivados"], [451, "Iogurte, sabor morango", 2.7, "Leite e derivados"], [452, "Iogurte, sabor pêssego", 2.5, "Leite e derivados"], [453, "Leite, condensado", 7.7, "Leite e derivados"], [454, "Leite, de cabra", 3.1, "Leite e derivados"], [455, "Leite, de vaca, achocolatado", 2.1, "Leite e derivados"], [456, "Leite, de vaca, desnatado, pó", 34.7, "Leite e derivados"], [457, "Leite, de vaca, desnatado, UHT", 0.0, "Leite e derivados"], [458, "Leite, de vaca, integral", 0.0, "Leite e derivados"], [459, "Leite, de vaca, integral, pó", 25.4, "Leite e derivados"], [460, "Leite, fermentado", 1.9, "Leite e derivados"], [461, "Queijo, minas, frescal", 17.4, "Leite e derivados"], [462, "Queijo, minas, meia cura", 21.2, "Leite e derivados"], [463, "Queijo, mozarela", 22.6, "Leite e derivados"], [464, "Queijo, parmesão", 35.6, "Leite e derivados"], [465, "Queijo, pasteurizado", 9.4, "Leite e derivados"], [466, "Queijo, petit suisse, morango", 5.8, "Leite e derivados"], [467, "Queijo, prato", 22.7, "Leite e derivados"], [468, "Queijo, requeijão, cremoso", 9.6, "Leite e derivados"], [469, "Queijo, ricota", 12.6, "Leite e derivados"], [470, "Bebida isotônica, sabores variados", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [471, "Café, infusão 10%", 0.7, "Bebidas (alcoólicas e não alcoólicas)"], [472, "Cana, aguardente 1", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [473, "Cana, caldo de", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [474, "Cerveja, pilsen 2", 0.6, "Bebidas (alcoólicas e não alcoólicas)"], [475, "Chá, erva-doce, infusão 5%", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [476, "Chá, mate, infusão 5%", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [477, "Chá, preto, infusão 5%", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [478, "Coco, água de", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [479, "Refrigerante, tipo água tônica", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [480, "Refrigerante, tipo cola", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [481, "Refrigerante, tipo guaraná", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [482, "Refrigerante, tipo laranja", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [483, "Refrigerante, tipo limão", 0.0, "Bebidas (alcoólicas e não alcoólicas)"], [484, "Omelete, de queijo", 15.6, "Ovos e derivados"], [485, "Ovo, de codorna, inteiro, cru", 13.7, "Ovos e derivados"], [486, "Ovo, de galinha, clara, cozida/10minutos", 13.4, "Ovos e derivados"], [487, "Ovo, de galinha, gema, cozida/10minutos", 15.9, "Ovos e derivados"], [488, "Ovo, de galinha, inteiro, cozido/10minutos", 13.3, "Ovos e derivados"], [489, "Ovo, de galinha, inteiro, cru", 13.0, "Ovos e derivados"], [490, "Ovo, de galinha, inteiro, frito", 15.6, "Ovos e derivados"], [491, "Achocolatado, pó", 4.2, "Produtos açucarados"], [492, "Açúcar, cristal", 0.3, "Produtos açucarados"], [493, "Açúcar, mascavo", 0.8, "Produtos açucarados"], [494, "Açúcar, refinado", 0.3, "Produtos açucarados"], [495, "Chocolate, ao leite", 7.2, "Produtos açucarados"], [496, "Chocolate, ao leite, com castanha do Pará", 7.4, "Produtos açucarados"], [497, "Chocolate, ao leite, dietético", 6.9, "Produtos açucarados"], [498, "Chocolate, meio amargo", 4.9, "Produtos açucarados"], [499, "Cocada branca", 1.1, "Produtos açucarados"], [500, "Doce, de abóbora, cremoso", 0.9, "Produtos açucarados"], [501, "Doce, de leite, cremoso", 5.5, "Produtos açucarados"], [502, "Geléia, mocotó, natural", 2.1, "Produtos açucarados"], [503, "Glicose de milho", 0.0, "Produtos açucarados"], [504, "Maria mole", 3.8, "Produtos açucarados"], [505, "Maria mole, coco queimado", 3.9, "Produtos açucarados"], [506, "Marmelada", 0.4, "Produtos açucarados"], [507, "Mel, de abelha", 0.0, "Produtos açucarados"], [508, "Melado", 0.0, "Produtos açucarados"], [509, "Quindim", 4.7, "Produtos açucarados"], [510, "Rapadura", 1.0, "Produtos açucarados"], [511, "Café, pó, torrado", 14.7, "Miscelâneas"], [512, "Capuccino, pó", 11.3, "Miscelâneas"], [513, "Fermento em pó, químico", 0.5, "Miscelâneas"], [514, "Fermento, biológico, levedura, tablete", 17.0, "Miscelâneas"], [515, "Gelatina, sabores variados, pó", 8.9, "Miscelâneas"], [516, "Sal, dietético", 0.0, "Miscelâneas"], [517, "Sal, grosso", 0.0, "Miscelâneas"], [518, "Shoyu", 3.3, "Miscelâneas"], [519, "Tempero a base de sal", 2.7, "Miscelâneas"], [520, "Azeitona, preta, conserva", 1.2, "Outros alimentos industrializados"], [521, "Azeitona, verde, conserva", 0.9, "Outros alimentos industrializados"], [522, "Chantilly, spray, com gordura vegetal", 0.5, "Outros alimentos industrializados"], [523, "Leite, de coco", 1.0, "Outros alimentos industrializados"], [524, "Maionese, tradicional com ovos", 0.6, "Outros alimentos industrializados"], [525, "Acarajé", 8.3, "Alimentos preparados"], [526, "Arroz carreteiro", 10.8, "Alimentos preparados"], [527, "Baião de dois, arroz e feijão-de-corda", 6.2, "Alimentos preparados"], [528, "Barreado", 18.3, "Alimentos preparados"], [529, "Bife à cavalo, com contra filé", 23.7, "Alimentos preparados"], [530, "Bolinho de arroz", 8.0, "Alimentos preparados"], [531, "Camarão à baiana", 7.9, "Alimentos preparados"], [532, "Charuto, de repolho", 6.8, "Alimentos preparados"], [533, "Cuscuz, de milho, cozido com sal", 2.2, "Alimentos preparados"], [534, "Cuscuz, paulista", 2.6, "Alimentos preparados"], [535, "Cuxá, molho", 5.6, "Alimentos preparados"], [536, "Dobradinha", 19.8, "Alimentos preparados"], [537, "Estrogonofe de carne", 15.0, "Alimentos preparados"], [538, "Estrogonofe de frango", 17.6, "Alimentos preparados"], [539, "Feijão tropeiro mineiro", 10.2, "Alimentos preparados"], [540, "Feijoada", 8.7, "Alimentos preparados"], [541, "Frango, com açafrão", 9.7, "Alimentos preparados"], [542, "Macarrão, molho bolognesa", 4.9, "Alimentos preparados"], [543, "Maniçoba", 10.0, "Alimentos preparados"], [544, "Quibebe", 8.6, "Alimentos preparados"], [545, "Salada, de legumes, com maionese", 1.1, "Alimentos preparados"], [546, "Salada, de legumes, cozida no vapor", 2.0, "Alimentos preparados"], [547, "Salpicão, de frango", 13.9, "Alimentos preparados"], [548, "Sarapatel", 18.5, "Alimentos preparados"], [549, "Tabule", 2.0, "Alimentos preparados"], [550, "Tacacá", 7.0, "Alimentos preparados"], [551, "Tapioca, com manteiga", 0.1, "Alimentos preparados"], [552, "Tucupi, com pimenta-de-cheiro", 2.1, "Alimentos preparados"], [553, "Vaca atolada", 5.1, "Alimentos preparados"], [554, "Vatapá", 6.0, "Alimentos preparados"], [555, "Virado à paulista", 10.2, "Alimentos preparados"], [556, "Yakisoba", 7.5, "Alimentos preparados"], [557, "Amendoim, grão, cru", 27.2, "Leguminosas e derivados"], [558, "Amendoim, torrado, salgado", 22.5, "Leguminosas e derivados"], [559, "Ervilha, em vagem", 7.5, "Leguminosas e derivados"], [560, "Ervilha, enlatada, drenada", 4.6, "Leguminosas e derivados"], [561, "Feijão, carioca, cozido", 4.8, "Leguminosas e derivados"], [562, "Feijão, carioca, cru", 20.0, "Leguminosas e derivados"], [563, "Feijão, fradinho, cozido", 5.1, "Leguminosas e derivados"], [564, "Feijão, fradinho, cru", 20.2, "Leguminosas e derivados"], [565, "Feijão, jalo, cozido", 6.1, "Leguminosas e derivados"], [566, "Feijão, jalo, cru", 20.1, "Leguminosas e derivados"], [567, "Feijão, preto, cozido", 4.5, "Leguminosas e derivados"], [568, "Feijão, preto, cru", 21.3, "Leguminosas e derivados"], [569, "Feijão, rajado, cozido", 5.5, "Leguminosas e derivados"], [570, "Feijão, rajado, cru", 17.3, "Leguminosas e derivados"], [571, "Feijão, rosinha, cozido", 4.5, "Leguminosas e derivados"], [572, "Feijão, rosinha, cru", 20.9, "Leguminosas e derivados"], [573, "Feijão, roxo, cozido", 5.7, "Leguminosas e derivados"], [574, "Feijão, roxo, cru", 22.2, "Leguminosas e derivados"], [575, "Grão-de-bico, cru", 21.2, "Leguminosas e derivados"], [576, "Guandu, cru", 19.0, "Leguminosas e derivados"], [577, "Lentilha, cozida", 6.3, "Leguminosas e derivados"], [578, "Lentilha, crua", 23.2, "Leguminosas e derivados"], [579, "Paçoca, amendoim", 16.0, "Leguminosas e derivados"], [580, "Pé-de-moleque, amendoim", 13.2, "Leguminosas e derivados"], [581, "Soja, farinha", 36.0, "Leguminosas e derivados"], [582, "Soja, extrato solúvel, natural, fluido", 2.4, "Leguminosas e derivados"], [583, "Soja, extrato solúvel, pó", 35.7, "Leguminosas e derivados"], [584, "Soja, queijo (tofu)", 6.6, "Leguminosas e derivados"], [585, "Tremoço, cru", 33.6, "Leguminosas e derivados"], [586, "Tremoço, em conserva", 11.1, "Leguminosas e derivados"], [587, "Amêndoa, torrada, salgada", 18.6, "Nozes e sementes"], [588, "Castanha-de-caju, torrada, salgada", 18.5, "Nozes e sementes"], [589, "Castanha-do-Brasil, crua", 14.5, "Nozes e sementes"], [590, "Coco, cru", 3.7, "Nozes e sementes"], [591, "Coco,  verde, cru", 0.0, "Nozes e sementes"], [592, "Farinha, de mesocarpo de babaçu, crua", 1.4, "Nozes e sementes"], [593, "Gergelim, semente", 21.2, "Nozes e sementes"], [594, "Linhaça, semente", 14.1, "Nozes e sementes"], [595, "Pinhão, cozido", 3.0, "Nozes e sementes"], [596, "Pupunha, cozida", 2.5, "Nozes e sementes"], [597, "Noz, crua", 14.0, "Nozes e sementes"]];

  function fmt1(n) {
    return (Math.round(n * 10) / 10).toFixed(1).replace(".", ",");
  }

  function normalizeText(txt) {
    return (txt || "").toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "");
  }

  function resolveUnits(foodName) {
    const norm = normalizeText(foodName);
    for (let i = 0; i < HOUSEHOLD_RULES.length; i++) {
      const r = HOUSEHOLD_RULES[i];
      if (r.match.every(kw => norm.indexOf(kw) !== -1)) {
        return r.units.map(u => ({ id: u.id, label: u.label, factor_g: u.factor, default_qty: u.def, step: u.step }));
      }
    }
    return [{ id: "g", label: "gramas (g)", factor_g: 1, default_qty: 100, step: 10 }];
  }

  let curTacoFood = null;
  let curUnits = [];
  let curUnit = null;
  let curQty = 1;

  function onTacoSearch(query) {
    const dropdown = document.getElementById("tacoDropdown");
    const q = normalizeText(query.trim());
    if (!q || q.length < 2) {
      dropdown.style.display = "none";
      dropdown.innerHTML = "";
      return;
    }

    const terms = q.split(/\\s+/);
    const matches = [];
    for (let i = 0; i < TACO_DATABASE.length; i++) {
      const item = TACO_DATABASE[i];
      const normName = normalizeText(item[1]);
      if (terms.every(t => normName.indexOf(t) !== -1)) {
        matches.push(item);
        if (matches.length >= 20) break;
      }
    }

    if (matches.length === 0) {
      dropdown.innerHTML = "<div style='padding:12px; font-size:12px; color:var(--text-subtle); text-align:center;'>Nenhum alimento encontrado</div>";
      dropdown.style.display = "block";
      return;
    }

    dropdown.innerHTML = matches.map((item, idx) => {
      return "<div class='taco-item' onclick='selectTacoFood(" + idx + ")'>" +
        "<div class='taco-item-name'>" + item[1] + "</div>" +
        "<div class='taco-item-prot'>" + fmt1(item[2]) + "g/100g</div>" +
      "</div>";
    }).join("");
    window._tacoMatches = matches;
    dropdown.style.display = "block";
  }

  function selectTacoFood(idx) {
    if (!window._tacoMatches || !window._tacoMatches[idx]) return;
    const item = window._tacoMatches[idx];
    curTacoFood = { id: item[0], name: item[1], prot_100g: item[2] };

    document.getElementById("tacoSearchInput").value = curTacoFood.name;
    document.getElementById("tacoDropdown").style.display = "none";

    document.getElementById("selectedFoodTitle").textContent = curTacoFood.name;
    document.getElementById("selectedFoodRate").textContent = fmt1(curTacoFood.prot_100g) + "g prot / 100g";

    curUnits = resolveUnits(curTacoFood.name);
    curUnit = curUnits[0];
    curQty = curUnit.default_qty || 1;

    renderUnitPills();
    updatePortionCalc();

    document.getElementById("portionBox").classList.add("open");
  }

  function renderUnitPills() {
    const container = document.getElementById("unitPillsRow");
    container.innerHTML = "";
    curUnits.forEach(function(u) {
      const pill = document.createElement("div");
      pill.className = "unit-pill" + (u.id === curUnit.id ? " active" : "");
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
    const step = curUnit.step || 1;
    let next = curQty + (delta * step);
    if (next <= 0) next = step;
    curQty = Math.round(next * 10) / 10;
    updatePortionCalc();
  }

  function onQtyChange(val) {
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      curQty = num;
      updatePortionCalc(true);
    }
  }

  function updatePortionCalc(skipInputUpdate) {
    if (!skipInputUpdate) {
      document.getElementById("portionQtyInput").value = curQty;
    }
    if (!curTacoFood || !curUnit) return;
    const totalGrams = curQty * curUnit.factor_g;
    const totalProt = (totalGrams * curTacoFood.prot_100g) / 100;
    document.getElementById("portionProtVal").textContent = fmt1(totalProt) + "g";
  }

  function commitTacoEntry() {
    if (!curTacoFood || !curUnit || curQty <= 0) return;
    const totalGrams = curQty * curUnit.factor_g;
    const totalProt = (totalGrams * curTacoFood.prot_100g) / 100;

    const qtyStr = (curQty % 1 === 0 ? curQty : curQty.toFixed(1).replace(".", ","));
    const unitStr = curUnit.label.split(" ")[0];
    const nameStr = curTacoFood.name + " (" + qtyStr + " " + unitStr + ")";

    state.entries.push({
      name: nameStr,
      prot: totalProt,
      time: nowTime()
    });
    saveState(state);
    render();

    document.getElementById("tacoSearchInput").value = "";
    document.getElementById("portionBox").classList.remove("open");
    curTacoFood = null;
  }

  document.addEventListener("click", function(e) {
    const dd = document.getElementById("tacoDropdown");
    const inp = document.getElementById("tacoSearchInput");
    if (dd && !dd.contains(e.target) && e.target !== inp) {
      dd.style.display = "none";
    }
  });

  function buildGrid() {
    const grid = document.getElementById("foodGrid");
    grid.innerHTML = "";
    FOODS.forEach(function(f) {
      const btn = document.createElement("button");
      btn.className = "food-btn";
      btn.dataset.name = f.name;
      btn.innerHTML =
        "<div class='add-icon'>+</div>" +
        "<div class='food-name'>" + f.name + "</div>" +
        "<div class='food-detail'>" + f.detail + "</div>" +
        "<div class='food-prot'>" + fmt1(f.prot) + "g prot</div>" +
        "<div class='used-badge'></div>";
      btn.addEventListener("click", function() { addFood(f); });
      grid.appendChild(btn);
    });
  }

  const todayKey = function() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  function loadSettings() {
    try {
      const raw = localStorage.getItem("prot_settings");
      if (raw) {
        const p = JSON.parse(raw);
        if (p.goal) GOAL = p.goal;
        if (p.ratio) USER_RATIO = p.ratio;
        if (p.weight) USER_WEIGHT = p.weight;
      }
    } catch(e) {}
  }

  function saveSettings() {
    try {
      localStorage.setItem("prot_settings", JSON.stringify({
        goal: GOAL, ratio: USER_RATIO, weight: USER_WEIGHT
      }));
    } catch(e) {}
  }

  function loadState() {
    loadSettings();
    try {
      const raw = localStorage.getItem("prot_log");
      if (!raw) return { date: todayKey(), entries: [] };
      const s = JSON.parse(raw);
      if (s.date !== todayKey()) return { date: todayKey(), entries: [] };
      return s;
    } catch(e) { return { date: todayKey(), entries: [] }; }
  }

  function saveState(st) {
    try { localStorage.setItem("prot_log", JSON.stringify(st)); } catch(e) {}
  }

  let state = loadState();

  function totalProt() {
    return state.entries.reduce((s, e) => s + e.prot, 0);
  }

  function render() {
    const total = totalProt();
    const pct = Math.min(total / GOAL, 1);
    const offset = CIRCUMFERENCE * (1 - pct);

    const ring = document.getElementById("ringFill");
    ring.style.strokeDashoffset = offset;
    ring.className = "ring-fill" + (pct >= 1 ? " done" : pct >= 0.7 ? " warning" : "");

    document.getElementById("pctLabel").textContent = Math.round(pct * 100) + "%";
    document.getElementById("gramLabel").textContent = fmt1(total) + " / " + GOAL + "g";
    document.getElementById("remaining").textContent = fmt1(Math.max(GOAL - total, 0)) + "g";
    document.getElementById("histTotal").textContent = fmt1(total) + "g registrados";

    const list = document.getElementById("logList");
    const empty = document.getElementById("emptyLog");
    list.innerHTML = "";
    if (state.entries.length === 0) {
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
      const rev = state.entries.slice().reverse();
      rev.forEach(function(e, ri) {
        const idx = state.entries.length - 1 - ri;
        const li = document.createElement("li");
        li.innerHTML =
          "<div class='log-left'>" +
            "<span class='log-time'>" + (e.time || "") + "</span>" +
            "<span class='log-dot'></span>" +
            "<span class='log-name'>" + e.name + "</span>" +
          "</div>" +
          "<div class='log-right'>" +
            "<span class='log-prot'>+" + fmt1(e.prot) + "g</span>" +
            "<button class='del-btn' onclick='removeEntry(" + idx + ")'>✕</button>" +
          "</div>";
        list.appendChild(li);
      });
    }

    const countByName = {};
    state.entries.forEach(function(e) {
      countByName[e.name] = (countByName[e.name] || 0) + 1;
    });
    document.querySelectorAll(".food-btn").forEach(function(btn) {
      const name = btn.dataset.name;
      const count = countByName[name] || 0;
      const badge = btn.querySelector(".used-badge");
      if (count > 0) {
        btn.classList.add("used");
        badge.textContent = count === 1 ? "✓ adicionado" : "✓ " + count + "x";
      } else {
        btn.classList.remove("used");
        badge.textContent = "";
      }
    });
  }

  function nowTime() {
    return new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

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

  function resetDay() {
    document.getElementById("confirmModal").classList.add("open");
  }
  function closeResetModal() {
    document.getElementById("confirmModal").classList.remove("open");
  }
  function confirmResetDay() {
    closeResetModal();
    state = { date: todayKey(), entries: [] };
    saveState(state);
    render();
  }

  function toggleGoalCard() {
    const c = document.getElementById("goalCard");
    c.classList.toggle("open");
    if (c.classList.contains("open")) c.scrollIntoView({ behavior: "smooth" });
  }

  function updateGoalSliders() {
    const ratio = parseFloat(document.getElementById("ratioSlider").value);
    const weight = parseInt(document.getElementById("weightSlider").value, 10);
    const calculated = Math.round(ratio * weight);

    const ratioStr = ratio.toFixed(1).replace(".", ",") + " g/kg";
    const weightStr = weight + " kg";

    document.getElementById("ratioBadge").textContent = ratioStr;
    document.getElementById("weightBadge").textContent = weightStr;
    document.getElementById("calcGoalVal").textContent = calculated;
    document.getElementById("formulaRatio").textContent = ratioStr;
    document.getElementById("formulaWeight").textContent = weightStr;
    document.getElementById("formulaGoal").textContent = calculated + "g";
  }

  function saveCustomGoal() {
    const ratio = parseFloat(document.getElementById("ratioSlider").value);
    const weight = parseInt(document.getElementById("weightSlider").value, 10);
    USER_RATIO = ratio;
    USER_WEIGHT = weight;
    GOAL = Math.round(ratio * weight);
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

<div class="modal-overlay" id="confirmModal">
  <div class="modal-box">
    <h3>Resetar dia?</h3>
    <p>Todos os registros de hoje serão apagados.</p>
    <div class="modal-actions">
      <button class="modal-btn cancel" onclick="closeResetModal()">Cancelar</button>
      <button class="modal-btn confirm" onclick="confirmResetDay()">Sim, resetar</button>
    </div>
  </div>
</div>

</body>
</html>`;
  const wv = new WebView();
  await wv.loadHTML(html, "http://localhost");
  await wv.present(true);
};
