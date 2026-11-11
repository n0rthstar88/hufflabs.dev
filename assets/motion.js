// Tells the stylesheet how far down the page the reader is (0 at the top,
// 1 at the bottom) so the background glows can follow the scroll.
(() => {
  const root = document.documentElement;
  let queued = false;
  const update = () => {
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty('--scroll', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
    queued = false;
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  update();
})();
