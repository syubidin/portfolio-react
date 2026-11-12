import { useEffect, useRef, useState } from 'react';

const NAV = [['who', 'Who'], ['work', 'Works'], ['trail', 'Trail'], ['kit', 'Kit'], ['hello', 'Hello']];

export default function Rail() {
  const meter = useRef(null);
  const progressLine = useRef(null);
  const [on, setOn] = useState('');

  useEffect(() => {
    const H = document.documentElement;
    try {
      const t = localStorage.getItem('theme');
      if (t) H.dataset.theme = t;
    } catch {
      /* storage blocked */
    }

    let tick = 0;
    const onScroll = () => {
      if (tick) return;
      tick = requestAnimationFrame(() => {
        tick = 0;
        const max = H.scrollHeight - innerHeight;
        const ratio = scrollY / (max || 1);
        const clamped = Math.min(1, Math.max(0, ratio));
        if (meter.current) {
          meter.current.textContent = ('00' + Math.round(ratio * 180)).slice(-3);
        }
        if (progressLine.current) {
          const isDesktop = window.innerWidth >= 900;
          progressLine.current.style.transform = isDesktop ? `scaleY(${clamped})` : `scaleX(${clamped})`;
        }
      });
    };
    addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (es) => es.forEach((x) => x.isIntersecting && setOn((prev) => (prev === x.target.id ? prev : x.target.id))),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('.sec').forEach((n) => io.observe(n));
    return () => {
      removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const H = document.documentElement;
    const dark = H.dataset.theme ? H.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches;
    H.dataset.theme = dark ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', H.dataset.theme);
    } catch {
      /* storage blocked */
    }
  };

  return (
    <header className="rail">
      <div className="rail-progress-bar" ref={progressLine} aria-hidden="true" />
      <a className="lg" href="#top" aria-label="Back to top">
        S/A
      </a>
      <nav aria-label="Sections">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={on === id ? 'on' : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <span className="el" aria-hidden="true">
        <span ref={meter}>000</span> m up
      </span>
      <button id="th" type="button" onClick={toggleTheme} aria-label="Switch between concrete and ink">
        ◐
      </button>
    </header>
  );
}
