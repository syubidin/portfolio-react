// Splits text into words, then characters, so anime.js can animate each letter.
export default function Split({ text }) {
  return text.split(' ').map((w, i) => (
    <span key={i}>
      {i > 0 && ' '}
      <span className="wd" aria-hidden="true">
        {[...w].map((c, j) => <span className="ch" key={j}>{c}</span>)}
      </span>
    </span>
  ));
}
