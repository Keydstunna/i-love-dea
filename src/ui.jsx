import { useState, useEffect, useRef } from 'react'
import { PAGES } from './data'

export function useInView() {
  const r = useRef(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const el = r.current
    if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect() } }, { threshold: 0.15 })
    o.observe(el)
    return () => o.disconnect()
  }, [])
  return [r, v]
}

// Same fade-up animation for everything.
export function Rv({ as: T = 'div', d = 0, className = '', children, ...p }) {
  const [r, v] = useInView()
  return <T ref={r} className={`rv ${v ? 'in' : ''} ${className}`} style={{ transitionDelay: d + 's' }} {...p}>{children}</T>
}

// Picture with a pretty placeholder if the file is missing.
export function Img({ src, ph = '', className = '' }) {
  const [bad, setBad] = useState(false)
  return (
    <div className={`img ${className}`}>
      {bad ? <span className="ph">{ph}</span> : <img src={src} alt={ph} loading="lazy" onError={() => setBad(true)} />}
    </div>
  )
}

export function Type({ text, go = true, speed = 32, onDone }) {
  const [n, setN] = useState(0)
  useEffect(() => { setN(0) }, [text])
  useEffect(() => {
    if (!go) return
    if (n >= text.length) { onDone && onDone(); return }
    const t = setTimeout(() => setN(n + 1), text[n] === '\n' ? 280 : speed)
    return () => clearTimeout(t)
  }, [go, n, text])
  return <span className="type">{text.slice(0, n)}<i className="caret" /></span>
}

export const Next = ({ go, to }) => (
  <Rv className="next">
    <button className="btn ghost" onClick={() => go(to)}>Next: {PAGES.find((p) => p[0] === to)[2]} →</button>
  </Rv>
)
