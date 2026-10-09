import { useState } from 'react'
import { Rv, Next } from '../ui'
import { Hanko } from '../art'
import { REASONS, DOING, COMPLIMENTS } from '../data'
import { useFx } from '../ctx'

export default function Reasons({ go }) {
  const [f, setF] = useState({})
  const [c, setC] = useState(-1)
  const { burst } = useFx()
  const flip = (i, e) => { setF({ ...f, [i]: !f[i] }); if (!f[i]) burst(e.clientX, e.clientY, 6) }
  const compliment = (e) => {
    let n
    do { n = Math.floor(Math.random() * COMPLIMENTS.length) } while (n === c)
    setC(n); burst(e.clientX, e.clientY, 14)
  }
  return (
    <main className="page reasons">
      <Rv as="h2">Why I Love You</Rv>
      <Rv as="p" className="sub">tap a card to flip it</Rv>
      <div className="fcs">
        {REASONS.map((r, i) => (
          <Rv key={i} d={(i % 4) * 0.07}>
            <button className={`fc ${f[i] ? 'f' : ''}`} onClick={(e) => flip(i, e)} aria-label={`Reason ${i + 1}`}>
              <span className="fi">
                <span className="front"><b>{i + 1}</b><small>理由</small></span>
                <span className="back">{r}</span>
              </span>
            </button>
          </Rv>
        ))}
      </div>

      <Rv as="h2" className="mt">Things I Do For You</Rv>
      <Rv as="p" className="sub">my love language, in small actions</Rv>
      <div className="doing">
        {DOING.map(([k, t, d], i) => (
          <Rv key={t} d={i * 0.08} className="card">
            <Hanko k={k} s={46} /><h4>{t}</h4><p>{d}</p>
          </Rv>
        ))}
      </div>
      <Rv className="comp">
        <button className="btn" onClick={compliment}>Tap for a compliment</button>
        {c >= 0 && <p key={c} className="say">{COMPLIMENTS[c]}</p>}
      </Rv>
      <Next go={go} to="bakit" />
    </main>
  )
}
