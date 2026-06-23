/* ============================================================
   scroll.js — Lenis smooth scroll + ONE pinned GSAP ScrollTrigger
   that scrubs the master timeline. Single shared rAF clock.
   ============================================================ */

export function wireScroll({ engine, overlay, scenes, reduced }) {
  const lenis = new Lenis({ lerp: 0.085, smoothWheel: !reduced, wheelMultiplier: 1, touchMultiplier: 1.4 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));   // seconds -> ms; one clock
  gsap.ticker.lagSmoothing(0);

  let bandSum = 0;
  for (let i = 0; i < scenes.length - 1; i++) bandSum += (scenes[i].band || 0.8);

  const st = ScrollTrigger.create({
    trigger: '#pinned',
    start: 'top top',
    end: () => '+=' + Math.round(bandSum * innerHeight),
    scrub: reduced ? false : 1,
    pin: '#pinned',
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const sf = engine.setProgress(self.progress);
      overlay.setActive(sf, self.progress);
    },
    onToggle: (self) => engine.setVisible(self.isActive),
  });

  // chapter / brand jumps — map scene boundary -> actual ScrollTrigger scroll range
  const bnd = engine.boundaries;
  function jumpTo(i) {
    const target = st.start + (bnd[i] || 0) * (st.end - st.start);
    lenis.scrollTo(target, { duration: 1.4 });
  }
  document.querySelectorAll('[data-jump]').forEach(a =>
    a.addEventListener('click', (e) => { e.preventDefault(); jumpTo(+a.dataset.jump); }));
  // delegate (nav rebuilds on lang toggle)
  document.getElementById('chrome-nav').addEventListener('click', (e) => {
    const a = e.target.closest('[data-jump]');
    if (a) { e.preventDefault(); jumpTo(+a.dataset.jump); }
  });

  // initial paint
  engine.setProgress(0);
  overlay.setActive(0, 0);

  return { lenis, st, jumpTo };
}
