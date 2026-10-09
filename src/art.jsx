// All the little SVG drawings live here.
export const Sakura = ({ s = 24, c = '#f6b4c5' }) => (
  <svg viewBox="-20 -20 40 40" width={s} height={s} aria-hidden="true">
    {[0, 72, 144, 216, 288].map((r) => (
      <path key={r} transform={`rotate(${r})`} d="M0-2C-9-8-7-17 0-17C7-17 9-8 0-2Z" fill={c} stroke="#e98fa8" strokeWidth=".6" />
    ))}
    <circle r="2.2" fill="#e0607e" />
  </svg>
)
export const Rose = ({ s = 60, c = '#e8708f' }) => (
  <svg viewBox="0 0 64 64" width={s} height={s} aria-hidden="true">
    <path d="M32 62V40" stroke="#7a9a6b" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 54c-9-1-14-6-16-12 7 0 13 3 16 12zM32 50c8-1 13-6 15-11-6 0-12 3-15 11z" fill="#8fae7e" />
    <circle cx="32" cy="24" r="19" fill={c} />
    <path d="M32 8c-9 3-12 12-6 18 4 4 13 3 13-5 0-5-6-8-10-4-2 2-1 6 3 6" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M15 22c3 12 22 15 33 3" fill="none" stroke="#a8325a" strokeOpacity=".3" strokeWidth="2" />
  </svg>
)
export const Tulip = ({ s = 60, c = '#f6b4c5' }) => (
  <svg viewBox="0 0 64 64" width={s} height={s} aria-hidden="true">
    <path d="M32 62V36" stroke="#7a9a6b" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 58c-11-2-15-11-15-18 9 2 13 9 15 18zM32 58c11-2 15-11 15-18-9 2-13 9-15 18z" fill="#8fae7e" />
    <path d="M17 12c-1 16 5 28 15 28s16-12 15-28l-8 6-7-10-7 10z" fill={c} />
    <path d="M32 8l-7 10c0 10 3 18 7 22 4-4 7-12 7-22z" fill="#fff" fillOpacity=".3" />
  </svg>
)
export const Heart = ({ s = 22, c = '#e0607e' }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} fill={c} aria-hidden="true">
    <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />
  </svg>
)
export const Hanko = ({ k = '愛', s = 44 }) => (
  <span className="hanko" style={{ width: s, height: s, fontSize: s * 0.58 }}>{k}</span>
)
export const Env = ({ k }) => (
  <svg viewBox="0 0 160 112" className="envsvg" aria-hidden="true">
    <rect x="6" y="16" width="148" height="92" rx="6" fill="#fffdf9" stroke="#e0607e" strokeWidth="2" />
    <path d="M6 108l56-44M154 108L98 64" stroke="#f0a1b6" strokeWidth="1.5" />
    <path className="flap" d="M6 20l74 52 74-52z" fill="#f9c9d6" stroke="#e0607e" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="80" cy="66" r="15" fill="#e0607e" />
    <text x="80" y="73" textAnchor="middle" fontSize="19" fill="#fff7ef" fontFamily="Shippori Mincho, serif">{k}</text>
  </svg>
)
const IC = {
  play: <path d="M7 4l13 8-13 8z" />, pause: <path d="M6 4h4v16H6zM14 4h4v16h-4z" />,
  prev: <path d="M6 5h2v14H6zM20 5v14L9 12z" />, next: <path d="M16 5h2v14h-2zM4 5l11 7-11 7z" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />,
  close: <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />,
  star: <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1-4.5-4.2 6.1-.8z" />,
}
export const Ic = ({ n, s = 22 }) => <svg viewBox="0 0 24 24" width={s} height={s} fill="currentColor" aria-hidden="true">{IC[n]}</svg>
export const Eq = ({ on }) => (
  <svg className={`eq ${on ? 'on' : ''}`} viewBox="0 0 44 24" width="44" height="24" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={k * 9 + 1} y="3" width="5" height="18" rx="2.5" style={{ animationDelay: k * 0.13 + 's' }} />)}
  </svg>
)

// ---------- Japanese scene (used by Scene.jsx) ----------
const rnd = (seed) => { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647 }
const BL = ['#f6b4c5', '#f9c9d6', '#ffd9e3', '#f08aa6', '#fbd5de']
const SPOTS = [[100, 256], [108, 206], [152, 180], [214, 190], [290, 168], [330, 200], [330, 250], [150, 236], [262, 232], [200, 146], [246, 116], [120, 140], [312, 140], [60, 230], [360, 170]]
export const SakuraTree = ({ seed = 7 }) => {
  const r = rnd(seed)
  const dots = SPOTS.flatMap(([x, y]) => Array.from({ length: 7 }, () => ({
    x: x + (r() - 0.5) * 70, y: y + (r() - 0.5) * 60, r: 14 + r() * 14, c: BL[(r() * 5) | 0], o: 0.55 + r() * 0.4,
  })))
  return (
    <svg viewBox="0 0 420 560" overflow="visible" aria-hidden="true">
      <path d="M178 700C186 560 186 440 192 360L226 360C228 440 228 560 244 700Z" fill="#8a5560" />
      <g fill="none" stroke="#8a5560" strokeLinecap="round">
        <path d="M204 380C190 330 150 296 100 256" strokeWidth="16" />
        <path d="M214 372C228 322 270 290 330 250" strokeWidth="14" />
        <path d="M198 340C196 290 200 240 214 190" strokeWidth="10" />
        <path d="M150 290C128 270 112 240 108 206" strokeWidth="7" />
        <path d="M274 296C296 270 320 236 330 200" strokeWidth="7" />
        <path d="M205 262C180 240 160 214 152 180" strokeWidth="6" />
        <path d="M206 250C240 224 266 196 290 168" strokeWidth="6" />
      </g>
      {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity={d.o} />)}
      {dots.filter((_, i) => i % 5 === 0).map((d, i) => <circle key={'h' + i} cx={d.x - 4} cy={d.y - 4} r="3" fill="#fff" opacity=".7" />)}
    </svg>
  )
}
export const Fuji = () => (
  <svg viewBox="0 0 600 220" width="100%" aria-hidden="true">
    <defs><linearGradient id="fj" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6b4c5" /><stop offset="1" stopColor="#fde6ea" /></linearGradient></defs>
    <path d="M0 220L205 44Q300 6 395 44L600 220Z" fill="url(#fj)" />
    <path d="M205 44Q300 6 395 44L362 62L332 46L303 74L272 48L240 66Z" fill="#fff" opacity=".9" />
  </svg>
)
export const SunDisc = () => (
  <svg viewBox="0 0 400 400" aria-hidden="true">
    <defs><radialGradient id="sd"><stop offset="0" stopColor="#ffc3d2" /><stop offset=".6" stopColor="#ffdbe3" /><stop offset="1" stopColor="#ffdbe3" stopOpacity="0" /></radialGradient></defs>
    <circle cx="200" cy="200" r="200" fill="url(#sd)" />
  </svg>
)
export const Cloud = ({ s = 180 }) => (
  <svg viewBox="0 0 200 70" width={s} aria-hidden="true">
    <g fill="#fff" opacity=".9"><circle cx="50" cy="44" r="22" /><circle cx="85" cy="34" r="28" /><circle cx="125" cy="42" r="24" /><circle cx="155" cy="48" r="16" /><rect x="40" y="44" width="125" height="20" rx="10" /></g>
    <path d="M62 50c8-6 16-6 20 0M110 52c8-6 16-6 20 0" stroke="#f0a1b6" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
)
export const Lantern = ({ s = 60 }) => (
  <svg viewBox="0 0 60 112" width={s} aria-hidden="true">
    <path d="M30 0v14" stroke="#a8325a" strokeWidth="2" />
    <rect x="18" y="12" width="24" height="6" rx="2" fill="#4a2535" />
    <ellipse cx="30" cy="48" rx="24" ry="32" fill="#f08aa6" />
    <path d="M30 16v64M16 26c6 14 6 38 0 52M44 26c-6 14-6 38 0 52" stroke="#fff" strokeOpacity=".4" fill="none" />
    <rect x="18" y="78" width="24" height="6" rx="2" fill="#4a2535" />
    <path d="M30 84v20M24 84l-3 16M36 84l3 16" stroke="#e0607e" strokeWidth="2" strokeLinecap="round" />
    <text x="30" y="55" textAnchor="middle" fontSize="20" fill="#fff7ef" fontFamily="Shippori Mincho, serif">愛</text>
  </svg>
)
export const Crane = ({ s = 64 }) => (
  <svg viewBox="0 0 80 60" width={s} aria-hidden="true">
    <path d="M30 34L24 10L44 31Z" fill="#f9c9d6" stroke="#e98fa8" strokeWidth=".8" />
    <path d="M18 36L50 30L66 40L34 46Z" fill="#fff" stroke="#e98fa8" strokeWidth=".8" />
    <path d="M34 33L52 6L56 31Z" fill="#ffd9e3" stroke="#e98fa8" strokeWidth=".8" />
    <path d="M18 36L6 22L10 20L22 33Z" fill="#fff" stroke="#e98fa8" strokeWidth=".8" />
    <path d="M6 22L1 23L10 20Z" fill="#e0607e" />
    <path d="M66 40L77 36L62 35Z" fill="#fff" stroke="#e98fa8" strokeWidth=".8" />
  </svg>
)