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
export const Torii = ({ s = 170, c = '#e0607e' }) => (
  <svg viewBox="0 0 120 100" width={s} fill={c} aria-hidden="true">
    <path d="M4 18Q60 6 116 18L112 28Q60 18 8 28Z" />
    <rect x="16" y="32" width="88" height="7" rx="2" />
    <rect x="24" y="28" width="9" height="70" />
    <rect x="87" y="28" width="9" height="70" />
    <rect x="55" y="22" width="10" height="14" />
  </svg>
)
export const Wave = ({ h = 80 }) => (
  <svg className="wave" width="100%" height={h} aria-hidden="true">
    <defs>
      <pattern id="sg" width="44" height="22" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="#f0a1b6" strokeWidth="1.3">
          {[18, 12, 6].map((r) => (
            <g key={r}><circle cx="22" cy="22" r={r} /><circle cx="0" cy="11" r={r} /><circle cx="44" cy="11" r={r} /></g>
          ))}
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#sg)" />
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
export const Car = ({ s = 90 }) => (
  <svg viewBox="0 0 120 50" width={s} aria-hidden="true">
    <path d="M6 36c0-6 4-9 12-10l14-12c3-3 8-4 14-4h22c8 0 14 3 20 10l12 5c6 2 10 5 10 11v4H6z" fill="#e0607e" />
    <path d="M38 16h20l8 12H30z" fill="#ffeaf0" />
    <path d="M70 18h8l8 8H72z" fill="#ffeaf0" />
    <circle cx="32" cy="40" r="9" fill="#4a2535" /><circle cx="92" cy="40" r="9" fill="#4a2535" />
    <circle cx="32" cy="40" r="4" fill="#f6b4c5" /><circle cx="92" cy="40" r="4" fill="#f6b4c5" />
  </svg>
)
export const Brick = ({ s = 64 }) => (
  <svg viewBox="0 0 80 70" width={s} aria-hidden="true">
    {[['#f6b4c5', 46], ['#fff0e6', 25], ['#e0607e', 4]].map(([c, y], k) => (
      <g key={k} transform={`translate(${k % 2 ? 12 : 0} ${y})`}>
        <rect y="7" width="60" height="18" rx="2" fill={c} stroke="#4a253533" />
        {[6, 24, 42].map((x) => <rect key={x} x={x} y="2" width="12" height="6" rx="2" fill={c} stroke="#4a253533" />)}
      </g>
    ))}
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
