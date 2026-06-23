/* ============================================================
   environment.js — a tall, STATIC spiral well (the staircase).
   The CAMERA travels a helical path through it (in engine.js),
   so the well spirals past => you feel yourself turning while
   descending. This module only builds geometry + follows the
   active accent colour.
   ============================================================ */
import * as THREE from 'three';

function softDot() {
  const s = 64, c = document.createElement('canvas'); c.width = c.height = s;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, s, s);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function buildEnvironment(opts = {}) {
  const H       = opts.height  ?? 116;   // total well height
  const R       = opts.radius  ?? 15.5;  // outer rail radius
  const Rin     = opts.inner   ?? 11.5;  // inner rail radius
  const perTurn = opts.perTurn ?? 12;    // world height of one coil = perTurn*gap
  const gap     = opts.gap     ?? 1.3;
  const STEPS   = Math.round(H / gap);
  const totalAng = STEPS * (Math.PI * 2 / perTurn);
  const tex = softDot();

  const group = new THREE.Group();

  // --- twin rails (dense, continuous) + treads ---
  const pos = [];
  const RAIL = 5200;
  for (let i = 0; i <= RAIL; i++) {
    const t = i / RAIL, ang = t * totalAng, y = H / 2 - t * H;
    pos.push(Math.cos(ang) * R,   y, Math.sin(ang) * R);
    pos.push(Math.cos(ang) * Rin, y, Math.sin(ang) * Rin);
  }
  for (let s = 0; s <= STEPS; s++) {
    const ang = s * (Math.PI * 2 / perTurn), y = H / 2 - s * gap;
    const ox = Math.cos(ang) * R,  oz = Math.sin(ang) * R;
    const ix = Math.cos(ang) * Rin, iz = Math.sin(ang) * Rin;
    const TP = 16;
    for (let k = 0; k < TP; k++) {
      const f = k / (TP - 1);
      pos.push(ix + (ox - ix) * f, y + (Math.random() - 0.5) * 0.06, iz + (oz - iz) * f);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.2, map: tex, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, opacity: 0.62, sizeAttenuation: true,
    color: new THREE.Color('#1fd6c5'),
  });
  const stair = new THREE.Points(geo, mat);
  stair.frustumCulled = false;
  group.add(stair);

  // --- ambient dust filling the shaft ---
  const DUST = opts.dust ?? 3400;
  const dpos = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) {
    const a = Math.random() * Math.PI * 2, rad = Rin * 0.2 + Math.random() * (R * 1.15);
    dpos[i*3]   = Math.cos(a) * rad;
    dpos[i*3+1] = (Math.random() - 0.5) * H;
    dpos[i*3+2] = Math.sin(a) * rad;
  }
  const dgeo = new THREE.BufferGeometry();
  dgeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  const dmat = new THREE.PointsMaterial({
    size: 0.09, map: tex, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, opacity: 0.42, sizeAttenuation: true,
    color: new THREE.Color('#7c8cff'),
  });
  const dust = new THREE.Points(dgeo, dmat);
  dust.frustumCulled = false;
  group.add(dust);

  const _c = new THREE.Color();
  function update(color) {
    if (!color) return;
    _c.copy(color);
    mat.color.lerp(_c, 0.05);
    dmat.color.lerp(_c, 0.03);
  }

  return { group, update, height: H };
}
