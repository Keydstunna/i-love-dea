import { createContext, useContext, useState, useRef, useCallback } from 'react'
import { Sakura, Rose } from './art'
import { SONGS, A } from './data'

const FxC = createContext(), PC = createContext()
export const useFx = () => useContext(FxC)
export const usePlayer = () => useContext(PC)

let uid = 0
// Sakura / rose particles (click bursts, confetti, falling roses)
export function FxProvider({ children }) {
  const [ps, setPs] = useState([])
  const add = useCallback((arr) => {
    setPs((p) => [...p.slice(-90), ...arr])
    const ids = arr.map((a) => a.id)
    setTimeout(() => setPs((p) => p.filter((x) => !ids.includes(x.id))), 4800)
  }, [])
  const burst = useCallback((x, y, n = 10) => add(Array.from({ length: n }, () => ({
    id: ++uid, k: 'b', x, y, dx: (Math.random() - 0.5) * 320, dy: -60 - Math.random() * 240,
    r: Math.random() * 360, s: 14 + Math.random() * 14,
  }))), [add])
  const rain = useCallback((n = 40) => add(Array.from({ length: n }, () => ({
    id: ++uid, k: 'r', x: Math.random() * window.innerWidth, y: -50, dx: (Math.random() - 0.5) * 200,
    dy: window.innerHeight + 100, r: Math.random() * 540, s: 22 + Math.random() * 22, d: Math.random() * 2, rose: Math.random() < 0.5,
  }))), [add])
  return (
    <FxC.Provider value={{ burst, rain }}>
      {children}
      <div className="fx" aria-hidden="true">
        {ps.map((p) => (
          <span key={p.id} className={`pt ${p.k}`}
            style={{ left: p.x, top: p.y, '--dx': p.dx + 'px', '--dy': p.dy + 'px', '--r': p.r + 'deg', animationDelay: (p.d || 0) + 's' }}>
            {p.rose ? <Rose s={p.s} /> : <Sakura s={p.s} />}
          </span>
        ))}
      </div>
    </FxC.Provider>
  )
}

// One audio player shared by the whole site
export function PlayerProvider({ children }) {
  const a = useRef(null)
  const [i, setI] = useState(0)
  const [on, setOn] = useState(false)
  const [t, setT] = useState(0)
  const [d, setD] = useState(0)
  const src = (n) => A('music/' + SONGS[n].id + '.mp3')
  const play = (n) => {
    const el = a.current
    if (n !== i || !el.getAttribute('src')) { setI(n); el.src = src(n) }
    el.play().catch(() => {})
  }
  const toggle = () => {
    const el = a.current
    if (!el.getAttribute('src')) el.src = src(i)
    el.paused ? el.play().catch(() => {}) : el.pause()
  }
  const step = (k) => play((i + k + SONGS.length) % SONGS.length)
  const seek = (f) => { const el = a.current; if (el.duration) el.currentTime = Math.max(0, Math.min(1, f)) * el.duration }
  return (
    <PC.Provider value={{ i, on, t, d, song: SONGS[i], play, toggle, next: () => step(1), prev: () => step(-1), seek }}>
      {children}
      <audio ref={a} preload="none" onPlay={() => setOn(true)} onPause={() => setOn(false)}
        onTimeUpdate={(e) => setT(e.target.currentTime)} onLoadedMetadata={(e) => setD(e.target.duration)} onEnded={() => step(1)} />
    </PC.Provider>
  )
}
