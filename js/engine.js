/* ============================================================
   engine.js — renderer + optional half-res bloom + single
   gsap.ticker render loop + setProgress() that maps overall
   scroll progress to a (possibly non-uniform) scene timeline.
   ============================================================ */
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { bindScene } from './particles.js';
import { buildEnvironment } from './environment.js';

export function createEngine(canvas, cloud, scenes, opts) {
  const { bloomOn = true, reduced = false } = opts || {};
  const n = scenes.length;

  // transition boundaries weighted by each scene's `band`
  const bnd = new Float32Array(n);
  let acc = 0;
  for (let i = 0; i < n - 1; i++) { bnd[i] = acc; acc += (scenes[i].band || 0.8); }
  bnd[n - 1] = acc;
  for (let i = 0; i < n; i++) bnd[i] /= acc || 1;

  const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 760 ? 1.25 : 1.75);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(dpr);
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;   // roll off highlights, no white blowout
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060a, 0.013);
  const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 200);

  // helical descent through a static spiral well (scaled to scene count)
  const DESCENT = Math.max(60, n * 1.7);
  const CAM_R = 10.5;
  const CAM_TURNS = Math.max(2.5, n * 0.11);
  const env = buildEnvironment({ height: DESCENT + 52, radius: 15.5, inner: 11.5 });
  scene.add(env.group);

  // hero morph cloud — 3D, self-rotating, drawn on top of the well
  const group = new THREE.Group();
  cloud.points.renderOrder = 10;
  group.add(cloud.points);
  scene.add(group);

  const accent = new THREE.Color();
  const _right = new THREE.Vector3();
  const sideOff = { left: 2.6, right: -2.6, center: 0 };

  let composer = null;
  if (bloomOn) {
    composer = new EffectComposer(renderer);
    composer.setPixelRatio(dpr);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.5, 0.4, 0.22));
    composer.addPass(new OutputPass());
  }

  const clock = new THREE.Clock();
  let boundIndex = -1, visible = true, curX = 0, sceneFloat = 0;
  let dirSign = (document.documentElement.dir === 'rtl') ? -1 : 1;
  const smooth = x => x * x * (3 - 2 * x);

  function progressToScene(p) {
    let i = 0;
    while (i < n - 2 && p >= bnd[i + 1]) i++;
    const span = (bnd[i + 1] - bnd[i]) || 1;
    const local = Math.min(1, Math.max(0, (p - bnd[i]) / span));
    return { i, local };
  }

  function setProgress(p) {
    const { i, local } = progressToScene(p);
    if (i !== boundIndex) { bindScene(cloud.geo, cloud.mat, scenes, i); boundIndex = i; }

    const hold = scenes[i].hold ?? 0.3;
    const eased = local < (1 - hold) ? smooth(local / (1 - hold)) : 1;
    cloud.mat.uniforms.uMorph.value = reduced ? Math.round(eased) : eased;

    sceneFloat = i + local;
    const j = Math.min(i + 1, n - 1);

    // accent colour follows the morph
    accent.copy(cloud.mat.uniforms.uColorA.value).lerp(cloud.mat.uniforms.uColorB.value, eased);
    env.update(accent);

    // --- helical camera: orbit the central axis while descending ---
    const ang = p * CAM_TURNS * Math.PI * 2;
    const camY = DESCENT / 2 - p * DESCENT;
    camera.position.set(Math.sin(ang) * CAM_R, camY + 1.7, Math.cos(ang) * CAM_R);
    const lookY = camY - 1.3;
    camera.lookAt(0, lookY, 0);
    camera.updateMatrixWorld();
    _right.setFromMatrixColumn(camera.matrixWorld, 0).normalize();

    // hero floats near the axis, nudged to the side opposite the text panel
    const sa = sideOff[scenes[i].side] ?? 0;
    const sb = sideOff[scenes[j].side] ?? 0;
    const tx = (sa + (sb - sa) * eased) * dirSign;
    curX += (tx - curX) * 0.12;
    group.position.set(0, lookY, 0).addScaledVector(_right, reduced ? tx : curX);

    return sceneFloat;
  }

  function render() {
    if (!visible) return;
    const t = clock.getElapsedTime();
    cloud.mat.uniforms.uTime.value = t;
    // hero faces the camera (readable) then turns in 3D — bounded so it
    // never goes fully edge-on: a solid that rotates around its own axis.
    const spin = Math.sin(t * 0.4) * 0.55 + Math.sin(sceneFloat * 1.3) * 0.3;
    group.quaternion.copy(camera.quaternion);
    group.rotateY(spin);
    group.rotateX(Math.sin(t * 0.3) * 0.08);
    if (composer) composer.render(); else renderer.render(scene, camera);
  }

  // single rAF shared with Lenis (added by scroll.js too — gsap dedupes by fn ref)
  gsap.ticker.add(render);
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; });

  let resizeTimer = 0;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      if (composer) composer.setSize(innerWidth, innerHeight);
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }, 160);
  });

  return {
    setProgress,
    get sceneFloat() { return sceneFloat; },
    setVisible(v) { visible = v; },
    renderNow() { visible = true; render(); },
    setDir(rtl) { dirSign = rtl ? -1 : 1; },
    boundaries: bnd,
    sceneCount: n,
  };
}
