import { Heart } from '../art'
export default function Secret({ go }) {
  return (
    <main className="secretpg">
      <Heart s={64} c="#f6b4c5" />
      <h2>Ikaw lang talaga.</h2>
      <p>桜 · sakura · 愛</p>
      <button className="btn ghost" onClick={() => go('home')}>← Back</button>
    </main>
  )
}
