/* ============================================================
   glyph.js — turn any module symbol into EXACTLY N 3D points.
   Kinds: 'primitive' (ecg, helix, bedGrid, sphere, heart, ring),
          'svg' (stroke icon -> silhouette), 'emoji'/'text'.
   Output is always Float32Array(N*3), angle-sorted for morph
   coherence so particle index i is spatially stable scene-to-scene.
   ============================================================ */

const S = 256;        // raster size
const SCALE = 8;      // world units span

/* Lucide-style stroke icon markup (reused from the DOM site) */
const ICONS = {
  stethoscope: '<path d="M4 3v6a4 4 0 0 0 8 0V3M5 3H3m5 0h-1m1 14a4 4 0 0 0 8 0v-2"/><circle cx="20" cy="13" r="2"/>',
  scissors:    '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"/>',
  scan:        '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3.5"/>',
  pill:        '<path d="m10.5 20.5-7-7a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 0 1-7 7zM8.5 8.5l7 7"/>',
  wallet:      '<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3M3 7h16M16 12h5v4h-5a2 2 0 0 1 0-4z"/>',
  document:    '<path d="M14 3v5h5M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM8 13h8M8 17h8M8 9h2"/>',
  users:       '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  smartphone:  '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
};

let _cvs, _ctx;
function ctx2d() {
  if (!_ctx) {
    _cvs = (typeof OffscreenCanvas !== 'undefined')
      ? new OffscreenCanvas(S, S)
      : Object.assign(document.createElement('canvas'), { width: S, height: S });
    _ctx = _cvs.getContext('2d', { willReadFrequently: true });
  }
  return _ctx;
}

/* alpha-weighted sample of EXACTLY N pixels (with repetition for thin glyphs) -> 3D */
function readAlpha(ctx, N, depth) {
  const { data } = ctx.getImageData(0, 0, S, S);
  const px = [], w = [];
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const a = data[(y * S + x) * 4 + 3];
    if (a > 50) { px.push(x, y); w.push(a); }
  }
  const M = w.length;
  const out = new Float32Array(N * 3);
  if (M === 0) return primitive('ring', N, depth);       // safety net
  let total = 0; const cum = new Float32Array(M);
  for (let i = 0; i < M; i++) { total += w[i]; cum[i] = total; }
  for (let i = 0; i < N; i++) {
    const r = Math.random() * total;
    let lo = 0, hi = M - 1;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (cum[mid] < r) lo = mid + 1; else hi = mid; }
    const x = px[lo * 2] + (Math.random() - 0.5) * 1.4;
    const y = px[lo * 2 + 1] + (Math.random() - 0.5) * 1.4;
    out[i * 3]     =  (x / S - 0.5) * SCALE;
    out[i * 3 + 1] = -(y / S - 0.5) * SCALE;
    out[i * 3 + 2] =  (Math.random() - 0.5) * depth * SCALE;
  }
  return out;
}

/* draw a stroke icon as a white silhouette and sample it.
   Uses createImageBitmap (reliable even in a backgrounded tab); falls
   back to an Image load event, then to a primitive, never hanging. */
async function svgPoints(icon, N, depth) {
  const inner = ICONS[icon] || ICONS.document;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="${S}" height="${S}">${inner}</svg>`;
  const ctx = ctx2d();
  ctx.clearRect(0, 0, S, S);
  let drawn = false;
  try {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const bmp = await createImageBitmap(blob);
    ctx.drawImage(bmp, 0, 0, S, S);
    if (bmp.close) bmp.close();
    drawn = true;
  } catch (e) { /* fall through */ }
  if (!drawn) {
    try {
      const img = new Image();
      await new Promise((res, rej) => {
        img.onload = res; img.onerror = rej; setTimeout(rej, 4000);
        img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      });
      ctx.drawImage(img, 0, 0, S, S);
      drawn = true;
    } catch (e) { /* fall through */ }
  }
  if (!drawn) return primitive('ring', N, depth);
  return readAlpha(ctx, N, depth);
}

/* draw an emoji / text glyph and sample it */
function textPoints(char, N, depth, emoji) {
  const ctx = ctx2d();
  ctx.clearRect(0, 0, S, S);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = (emoji ? '190px ' : 'bold 180px ') + 'system-ui,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  ctx.fillText(char, S / 2, S / 2 + 6);
  return readAlpha(ctx, N, depth);
}

/* parametric shapes */
function primitive(shape, N, depth) {
  const out = new Float32Array(N * 3);
  const Z = depth * SCALE;
  if (shape === 'ecg') {
    for (let k = 0; k < N; k++) {
      const t = k / N, x = (t - 0.5) * SCALE * 1.5;
      let y = 0;
      if (t > 0.44 && t < 0.5)  y = (t - 0.44) / 0.06 * SCALE * 0.55;
      else if (t >= 0.5 && t < 0.56) y = (0.56 - t) / 0.06 * SCALE * 0.55 - SCALE * 0.18;
      else if (t > 0.38 && t <= 0.44) y = -(t - 0.38) / 0.06 * SCALE * 0.12;
      out[k*3] = x; out[k*3+1] = y + (Math.random()-0.5)*0.05*SCALE; out[k*3+2] = (Math.random()-0.5)*Z;
    }
  } else if (shape === 'helix') {
    for (let k = 0; k < N; k++) {
      const t = k / N, ang = t * Math.PI * 9, strand = (k & 1) ? 0 : Math.PI;
      const rung = (k % 11 === 0);
      const r = rung ? (Math.random()) * SCALE * 0.34 : SCALE * 0.34;
      out[k*3] = Math.cos(ang + strand) * r;
      out[k*3+1] = (t - 0.5) * SCALE * 1.05;
      out[k*3+2] = Math.sin(ang + strand) * r;
    }
  } else if (shape === 'bedGrid') {
    const cols = 6, rows = 4;
    for (let k = 0; k < N; k++) {
      const c = (Math.random()*cols)|0, r = (Math.random()*rows)|0;
      out[k*3] = ((c/(cols-1)) - 0.5) * SCALE * 1.1 + (Math.random()-0.5)*0.18*SCALE;
      out[k*3+1] = ((r/(rows-1)) - 0.5) * SCALE * 0.7 + (Math.random()-0.5)*0.12*SCALE;
      out[k*3+2] = (Math.random()-0.5)*Z;
    }
  } else if (shape === 'sphere') {
    const gold = Math.PI * (3 - Math.sqrt(5));
    for (let k = 0; k < N; k++) {
      const y = 1 - (k / (N - 1)) * 2, r = Math.sqrt(1 - y*y), th = gold * k;
      const rad = SCALE * 0.45 * (0.94 + Math.random()*0.06);
      out[k*3] = Math.cos(th)*r*rad; out[k*3+1] = y*rad; out[k*3+2] = Math.sin(th)*r*rad;
    }
  } else if (shape === 'heart') {
    for (let k = 0; k < N; k++) {
      const t = Math.random() * Math.PI * 2;
      const sx = 16*Math.pow(Math.sin(t),3);
      const sy = 13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t);
      const j = Math.sqrt(Math.random());            // fill the whole heart, not just outline
      out[k*3] = sx/16 * SCALE*0.5 * j;
      out[k*3+1] = sy/16 * SCALE*0.5 * j + SCALE*0.05;
      out[k*3+2] = (Math.random()-0.5)*Z*1.3;
    }
  } else { // ring / default
    for (let k = 0; k < N; k++) {
      const a = Math.random()*Math.PI*2, rad = SCALE*0.42*(0.9+Math.random()*0.1);
      out[k*3] = Math.cos(a)*rad; out[k*3+1] = Math.sin(a)*rad; out[k*3+2] = (Math.random()-0.5)*Z;
    }
  }
  return out;
}

/* angle-from-centroid sort -> coherent morphs */
function sortByAngle(out, N) {
  let cx = 0, cy = 0;
  for (let i = 0; i < N; i++) { cx += out[i*3]; cy += out[i*3+1]; }
  cx /= N; cy /= N;
  const idx = new Array(N);
  for (let i = 0; i < N; i++) idx[i] = i;
  idx.sort((a, b) =>
    Math.atan2(out[a*3+1]-cy, out[a*3]-cx) - Math.atan2(out[b*3+1]-cy, out[b*3]-cx));
  const sorted = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const j = idx[i];
    sorted[i*3] = out[j*3]; sorted[i*3+1] = out[j*3+1]; sorted[i*3+2] = out[j*3+2];
  }
  return sorted;
}

/* build one scene's target points (async because svg decodes an image) */
export async function buildTargets(formation, N, depth) {
  let pts;
  if (formation.kind === 'primitive')      pts = primitive(formation.shape, N, depth);
  else if (formation.kind === 'svg')       pts = await svgPoints(formation.icon, N, depth);
  else if (formation.kind === 'emoji')     pts = textPoints(formation.char, N, depth, true);
  else                                     pts = textPoints(formation.char || '✦', N, depth, false);
  return sortByAngle(pts, N);
}
