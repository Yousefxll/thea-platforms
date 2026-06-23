/* ============================================================
   overlay.js — bilingual DOM glass panels over the WebGL canvas,
   top chrome (brand, chapters, language), bottom progress bar.
   The WebGL scene is language-agnostic; a lang toggle rebuilds
   ONLY the DOM here.
   ============================================================ */

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>';

const UI = {
  langBtn:   { ar: 'English', en: 'العربية' },
  cta:       { ar: 'اطلب عرضاً تجريبياً', en: 'Request a demo' },
  scroll:    { ar: 'مرّر للأسفل', en: 'Scroll to explore' },
  menu:      { ar: 'المنصات', en: 'Platforms' },
};

const GROUP_ORDER = [
  { key: 'Core Clinical Platforms', ar: 'سريرية', en: 'Clinical' },
  { key: 'Enterprise Platforms',    ar: 'مؤسسية', en: 'Enterprise' },
  { key: 'Specialty Modules',       ar: 'تخصصات', en: 'Specialties' },
  { key: 'Operations & Quality',    ar: 'عمليات', en: 'Operations' },
  { key: 'Platform / Infrastructure', ar: 'المنصّة', en: 'Platform' },
];

export function buildOverlay(scenes, { onLang } = {}) {
  let LANG = localStorage.getItem('thea-lang') || 'ar';
  const root = document.getElementById('panels');
  root.innerHTML = '';

  // ---- per-scene panels ----
  const panels = scenes.map((s) => {
    const el = document.createElement('article');
    el.className = `panel side-${s.side}`
      + (s.intro ? ' is-intro' : '')
      + (s.cta ? ' is-cta' : '')
      + (s.platformIntro ? ' is-platform' : '');
    el.style.setProperty('--accent', s.color);
    root.appendChild(el);
    return el;
  });

  function fillPanel(el, s) {
    const c = s.copy[LANG];
    const title = c.title.replace(/\n/g, '<br>');
    let inner;
    if (s.platformIntro) {
      const logo = s.logo ? `<img class="p-logo" src="${s.logo}" alt="" />` : '';
      const coming = s.coming ? `<span class="p-coming">${LANG === 'ar' ? 'قريباً' : 'Coming soon'}</span>` : '';
      const stats = (s.stats || []).map(st =>
        `<div class="p-stat"><div class="p-stat-v">${st.v}</div><div class="p-stat-l">${st[LANG]}</div></div>`).join('');
      const feats = (c.feats || []).map(f => `<li>${CHECK}<span>${f}</span></li>`).join('');
      inner = `
        ${logo}
        <span class="p-kicker">${c.kicker}${coming}</span>
        <h1 class="p-title">${title}</h1>
        <p class="p-tag">${c.tagline}</p>
        <p class="p-body">${c.body}</p>
        <ul class="p-feats wrap">${feats}</ul>
        ${stats ? `<div class="p-stats">${stats}</div>` : ''}
        ${s.intro ? `<div class="p-scrollhint">${UI.scroll[LANG]}<span class="mouse"><i></i></span></div>` : ''}`;
    } else if (s.cta) {
      const feats = (c.feats || []).map(f => `<a class="feat-mail" href="mailto:${f}">${f}</a>`).join('');
      inner = `
        <span class="p-kicker">${c.kicker}</span>
        <h1 class="p-title">${title}</h1>
        <p class="p-tag">${c.tagline}</p>
        <p class="p-body">${c.body}</p>
        <a class="p-btn" href="mailto:thea@thea.com.sa">${UI.cta[LANG]}</a>
        <div class="p-mail">${feats}</div>`;
    } else {
      const feats = (c.feats || []).map(f => `<li>${CHECK}<span>${f}</span></li>`).join('');
      inner = `
        <span class="p-kicker">${c.kicker}</span>
        <h2 class="p-title">${title}</h2>
        <p class="p-tag">${c.tagline}</p>
        <p class="p-body">${c.body}</p>
        <ul class="p-feats">${feats}</ul>`;
    }
    el.innerHTML = `<div class="p-inner">${inner}</div>`;
  }
  function fillAll() { scenes.forEach((s, i) => fillPanel(panels[i], s)); }

  // ---- top chrome (nav chapters = the platforms) ----
  const nav = document.getElementById('chrome-nav');
  const navPlatforms = scenes
    .map((s, i) => ({ s, i }))
    .filter(x => x.s.platformIntro && x.s.platform !== 'suite');
  function buildNav() {
    const chapters = navPlatforms.map(({ s, i }) =>
      `<a class="chap" data-jump="${i}" style="--accent:${s.color}">${s.copy[LANG].title}</a>`).join('');
    nav.innerHTML = `
      <a class="brand" data-jump="0"><span class="brand-mark"></span><span class="brand-name">THEA</span></a>
      <nav class="chaps">${chapters}</nav>
      <button class="lang-btn" id="lang-btn">${UI.langBtn[LANG]}</button>`;
    nav.querySelector('#lang-btn').addEventListener('click', toggleLang);
  }

  // ---- bottom progress ----
  const bar = document.getElementById('chrome-bar');
  bar.innerHTML = `<div class="bar-track"><div class="bar-fill" id="bar-fill"></div></div><div class="bar-count" id="bar-count"></div>`;
  const barFill = bar.querySelector('#bar-fill');
  const barCount = bar.querySelector('#bar-count');
  const isModule = s => !s.platformIntro && !s.cta;
  const moduleCount = scenes.filter(isModule).length;

  function applyDir() {
    document.documentElement.lang = LANG;
    document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  }
  function toggleLang() {
    LANG = LANG === 'ar' ? 'en' : 'ar';
    localStorage.setItem('thea-lang', LANG);
    applyDir(); fillAll(); buildNav();
    onLang && onLang(LANG);
  }

  applyDir(); fillAll(); buildNav();

  // ---- live update from scroll ----
  function setActive(sceneFloat, p) {
    for (let i = 0; i < panels.length; i++) {
      const sd = sceneFloat - i;                     // signed distance
      const op = Math.max(0, 1 - Math.abs(sd) / 0.55);
      const pan = panels[i];
      pan.style.opacity = op;
      pan.style.pointerEvents = op > 0.85 ? 'auto' : 'none';
      const inner = pan.firstElementChild;
      if (inner) {
        // light spiral: twists + slides in from a side, flat & readable when active
        const rotY = Math.max(-44, Math.min(44, sd * -34));
        const tx = sd * 48;
        const tz = -(1 - op) * 130;
        const ty = (1 - op) * 20;
        inner.style.transform = `translate3d(${tx}px, ${ty}px, ${tz}px) rotateY(${rotY}deg)`;
        inner.style.filter = op < 0.999 ? `blur(${(1 - op) * 4.5}px)` : 'none';
      }
    }
    barFill.style.width = (p * 100) + '%';
    const active = Math.round(sceneFloat);
    const s = scenes[active];
    if (s && isModule(s)) {
      const n = scenes.slice(0, active + 1).filter(isModule).length;
      barCount.textContent = `${String(n).padStart(2, '0')} / ${moduleCount}`;
      barCount.style.opacity = 1;
    } else {
      barCount.style.opacity = 0;
    }
  }

  return { panels, setActive, getLang: () => LANG };
}
