import S from '../content.js';

export default function Footer() {
  const handleReplay = () => {
    try {
      sessionStorage.removeItem('intro_seen');
    } catch {
      /* storage blocked */
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.reload();
  };

  return (
    <footer>
      <span>© 2026 {S.name}</span>
      <em>
        {S.footerNote}{' '}
        <button
          type="button"
          onClick={handleReplay}
          className="footer-replay-btn"
          title="Replay intro animation"
          aria-label="Replay intro animation"
        >
          [Replay Intro ↺]
        </button>
      </em>
      <span>{S.coords}</span>
    </footer>
  );
}
