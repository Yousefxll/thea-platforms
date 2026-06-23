/* ============================================================
   particles.js — ONE persistent THREE.Points cloud.
   The morph between consecutive scenes runs entirely on the GPU
   via the uMorph uniform. CPU only swaps two cached Float32Arrays
   when the integer scene index changes.
   ============================================================ */
import * as THREE from 'three';

export function buildCloud(N, scenes) {
  const geo = new THREE.BufferGeometry();
  const a = scenes[0].points;
  const b = (scenes[1] || scenes[0]).points;
  const rand = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) rand[i] = Math.random();

  geo.setAttribute('position', new THREE.BufferAttribute(a.slice(), 3));
  geo.setAttribute('aTargetA', new THREE.BufferAttribute(a.slice(), 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('aTargetB', new THREE.BufferAttribute(b.slice(), 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('aRand',    new THREE.BufferAttribute(rand, 3));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 60);

  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uMorph:      { value: 0 },
      uTime:       { value: 0 },
      uSize:       { value: 17.0 },
      uSwirl:      { value: 1.0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.75) },
      uColorA:     { value: new THREE.Color(scenes[0].color) },
      uColorB:     { value: new THREE.Color((scenes[1] || scenes[0]).color) },
    },
    vertexShader: /* glsl */`
      attribute vec3 aTargetA;
      attribute vec3 aTargetB;
      attribute vec3 aRand;
      uniform float uMorph, uTime, uSize, uPixelRatio, uSwirl;
      varying float vM;
      varying float vR;
      void main(){
        float lo = aRand.x * 0.28;
        float m  = smoothstep(lo, 0.72 + lo, uMorph);   // staggered bloom
        vM = m; vR = aRand.z;
        vec3 p = mix(aTargetA, aTargetB, m);
        float burst = sin(m * 3.14159265);              // scatter then re-form
        float ph = aRand.y * 6.2831 + uTime * 0.5;
        p += vec3(cos(ph), sin(ph), sin(ph * 1.7)) * burst * uSwirl * (0.35 + aRand.z * 0.65);
        // gentle idle breathing
        p += vec3(0.0, sin(uTime * 0.6 + aRand.x * 6.28) * 0.04, 0.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * (0.45 + aRand.z) * uPixelRatio * (1.0 / max(0.1, -mv.z));
      }`,
    fragmentShader: /* glsl */`
      precision mediump float;
      uniform vec3 uColorA, uColorB;
      varying float vM;
      varying float vR;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float alpha = smoothstep(0.5, 0.16, d);          // crisper core, soft edge
        if (alpha < 0.02) discard;
        vec3 col = mix(uColorA, uColorB, vM);
        col += vR * 0.05;
        gl_FragColor = vec4(col, alpha * 0.6);
      }`,
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return { points, geo, mat };
}

/* swap target attributes + colors — called only when the scene index changes */
export function bindScene(geo, mat, scenes, i) {
  const j = Math.min(i + 1, scenes.length - 1);
  geo.attributes.aTargetA.array.set(scenes[i].points);
  geo.attributes.aTargetB.array.set(scenes[j].points);
  geo.attributes.aTargetA.needsUpdate = true;
  geo.attributes.aTargetB.needsUpdate = true;
  mat.uniforms.uColorA.value.set(scenes[i].color);
  mat.uniforms.uColorB.value.set(scenes[j].color);
}
