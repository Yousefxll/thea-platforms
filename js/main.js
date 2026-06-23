/* ============================================================
   main.js — boot orchestration + capability gate + fallback.
   ============================================================ */
import { SCENES } from './scenes.js';
import { buildTargets } from './glyph.js';
import { buildCloud } from './particles.js';
import { createEngine } from './engine.js';
import { wireScroll } from './scroll.js';
import { buildOverlay } from './overlay.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('gl');

function probeGL() {
  try { return canvas.getContext('webgl2') || canvas.getContext('webgl'); }
  catch { return null; }
}

function mountDomFallback() {
  document.documentElement.classList.add('no-webgl');
  const done = () => { if (window.theaRenderDom) window.theaRenderDom(); };
  if (window.theaRenderDom) return done();
  const s = document.createElement('script');
  s.src = './app.js'; s.onload = done; s.onerror = done;
  document.body.appendChild(s);
}

function setSplash(pct, label) {
  const el = document.getElementById('splash');
  if (!el) return;
  const b = el.querySelector('.splash-bar > i');
  if (b) b.style.width = pct + '%';
  const t = el.querySelector('.splash-pct');
  if (t) t.textContent = label != null ? label : Math.round(pct) + '%';
}

(async function boot() {
  if (reduced) { mountDomFallback(); return; }
  const gl = probeGL();
  if (!gl) { mountDomFallback(); return; }

  try {
    gsap.registerPlugin(ScrollTrigger);

    // capability tiering
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    const r = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : '';
    const mobile = innerWidth < 760 || matchMedia('(pointer:coarse)').matches;
    const weak = mobile || /Mali|Adreno [1-5]|PowerVR|Intel.*HD/i.test(r) || (navigator.deviceMemory || 8) <= 4;
    const N = mobile ? 16000 : weak ? 32000 : 56000;
    const bloomOn = !mobile;

    // total scroll length from per-scene bands
    let bandSum = 0;
    for (let i = 0; i < SCENES.length - 1; i++) bandSum += (SCENES[i].band || 0.8);
    document.documentElement.style.setProperty('--stage-h', (Math.max(8, bandSum) * 100) + 'vh');

    await (document.fonts ? document.fonts.ready : Promise.resolve());

    // sample every scene's silhouette once (svg decodes are async; no rAF
    // dependency so a backgrounded tab still finishes promptly)
    for (let i = 0; i < SCENES.length; i++) {
      // modest thickness: enough to read as 3D when it turns, thin enough to stay sharp
      const depth = SCENES[i].formation.kind === 'primitive' ? 0.26 : 0.2;
      SCENES[i].points = await buildTargets(SCENES[i].formation, N, depth);
      setSplash((i + 1) / SCENES.length * 100);
    }

    const cloud  = buildCloud(N, SCENES);
    const engine = createEngine(canvas, cloud, SCENES, { bloomOn, reduced });

    const overlay = buildOverlay(SCENES, {
      onLang: (lang) => {
        engine.setDir(lang === 'ar');
        ScrollTrigger.refresh();
      },
    });

    const ctl = wireScroll({ engine, overlay, scenes: SCENES, reduced });
    engine.setDir(document.documentElement.dir === 'rtl');
    window.__thea = { engine, overlay, scenes: SCENES, lenis: ctl.lenis, jump: ctl.jumpTo,
      preview(p) { const sf = engine.setProgress(p); overlay.setActive(sf, p); },
      goto(p) { const sf = engine.setProgress(p); overlay.setActive(sf, p); engine.renderNow(); return sf; } };

    ScrollTrigger.refresh();
    document.documentElement.classList.add('gl-ready');
    const sp = document.getElementById('splash');
    if (sp) { sp.classList.add('hide'); setTimeout(() => sp.remove(), 700); }

    canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());
  } catch (err) {
    console.error('[thea] engine init failed, falling back to DOM:', err);
    mountDomFallback();
  }
})();
