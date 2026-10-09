import { useState } from 'react'
import { Rv } from '../ui'
import { Ic } from '../art'
import { CHAPTERS, FROM } from '../data'
import { useFx } from '../ctx'

export default function Story({ go }) {
  const [c, setC] = useState(0)
  const [voted, setVoted] = useState({})
  const [size, setSize] = useState(1)
  const { burst } = useFx()
  const ch = CHAPTERS[c]
  const last = c === CHAPTERS.length - 1
  return (
    <main className="page story">
      <Rv as="h2" className="title">Our Story</Rv>
      <Rv as="p" className="sub">a reader's edition, written for you</Rv>
      <Rv className="reader">
        <nav className="toc" aria-label="Chapters">
          {CHAPTERS.map((x, i) => (
            <button key={i} className={i === c ? 'on' : ''} onClick={() => setC(i)}>
              <small>Chapter {i + 1}</small><span>{x.t}</span>
            </button>
          ))}
        </nav>
        <article key={c} className="chapter" style={{ fontSize: size + 'em' }}>
          <div className="prog"><i style={{ width: ((c + 1) / CHAPTERS.length) * 100 + '%' }} /></div>
          <header>
            <div><small>Chapter {c + 1}</small><h3>{ch.t}</h3></div>
            <div className="tools">
              <button onClick={() => setSize((s) => Math.max(0.9, +(s - 0.1).toFixed(1)))} aria-label="Smaller text">A−</button>
              <button onClick={() => setSize((s) => Math.min(1.4, +(s + 0.1).toFixed(1)))} aria-label="Bigger text">A+</button>
            </div>
          </header>
          <p className="line">{ch.q}</p>
          <p className="an"><b>{FROM}:</b> {ch.an}</p>
          <footer>
            <button className={`vote ${voted[c] ? 'on' : ''}`}
              onClick={(e) => { setVoted({ ...voted, [c]: !voted[c] }); if (!voted[c]) burst(e.clientX, e.clientY, 10) }}>
              <Ic n="star" s={18} /> {voted[c] ? 'Voted' : 'Vote'}
            </button>
            <div className="nav2">
              {c > 0 && <button className="btn ghost" onClick={() => setC(c - 1)}>← Previous</button>}
              {last
                ? <button className="btn" onClick={() => go('songs')}>Next: our songs →</button>
                : <button className="btn" onClick={() => setC(c + 1)}>Next chapter →</button>}
            </div>
          </footer>
        </article>
      </Rv>
    </main>
  )
}