import { useState, useEffect } from 'react'
import { Rv } from '../ui'
import { Rose, Tulip, Torii, Wave } from '../art'
import { MET, NAME } from '../data'
import { useFx, usePlayer } from '../ctx'

const PINKS = ['#e8708f', '#f6b4c5', '#fff0e6', '#f08aa6', '#ffd6df']
const FLORA = Array.from({ length: 14 }, (_, i) => ({
  tulip: i % 2 === 1, c: PINKS[i % 5], x: (i * 7.3 + 3) % 96, s: 34 + (i % 4) * 12, dur: 16 + (i % 5) * 4, delay: -i * 2.3,
}))

function Flora() {
  return (
    <div className="flora" aria-hidden="true">
      {FLORA.map((f, i) => (
        <span key={i} style={{ left: f.x + '%', animationDuration: f.dur + 's', animationDelay: f.delay + 's' }}>
          {f.tulip ? <Tulip s={f.s} c={f.c} /> : <Rose s={f.s} c={f.c} />}
        </span>
      ))}
    </div>
  )
}

function Counter() {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])
  const ms = Math.max(0, now - MET)
  const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60
  return (
    <div className="counter">
      <p>
        You've had my heart for <b className="num">{d}</b> days, <b className="num">{h}</b> hours,{' '}
        <b className="num">{m}</b> minutes... and counting.
      </p>
      <small className="tick">{s}s</small>
    </div>
  )
}

export default function Home({ go }) {
  const { burst } = useFx()
  const pl = usePlayer()
  return (
    <main className="page home">
      <div className="sun" aria-hidden="true" />
      <Flora />
      <Rv className="kanji">出会い · deai</Rv>
      <Rv as="h1" d={0.1}>I fell in love with you on <em>May 18, 2024, 3:40 PM.</em></Rv>
      <Rv d={0.2}><Counter /></Rv>
      <Rv as="p" d={0.3} className="tag">{NAME}, you're my safe place</Rv>
      <Rv d={0.4}>
        <button className="btn" onClick={(e) => { burst(e.clientX, e.clientY, 18); if (!pl.on) pl.toggle(); go('story') }}>
          Start our story →
        </button>
      </Rv>
      <Rv d={0.5} className="gate"><Torii /></Rv>
      <Wave />
    </main>
  )
}
