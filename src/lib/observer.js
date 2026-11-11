// Shared IntersectionObserver singleton for reveal animations
const callbacks = new WeakMap();
let io = null;

function getObserver() {
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            io.unobserve(entry.target);
            callbacks.delete(entry.target);
            cb(entry.target);
          }
        }
      });
    }, { threshold: 0.15 });
  }
  return io;
}

export function observeOnce(el, cb) {
  callbacks.set(el, cb);
  getObserver().observe(el);
  return () => {
    getObserver().unobserve(el);
    callbacks.delete(el);
  };
}
