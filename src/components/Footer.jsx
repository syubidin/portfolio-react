import S from '../content.js';

export default function Footer() {
  return (
    <footer>
      <span>© 2026 {S.name}</span>
      <em>{S.footerNote}</em>
      <span>{S.coords}</span>
    </footer>
  );
}
