import { Rv, Img, Next } from '../ui'
import { Ic, Eq } from '../art'
import { SONGS, A } from '../data'
import { usePlayer } from '../ctx'

const fmt = (t) => (isFinite(t) && t > 0 ? Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0') : '0:00')

export default function Songs({ go }) {
  const p = usePlayer()
  return (
    <main className="page songs">
      <Rv as="h2">Songs That Remind Me of You</Rv>
      <Rv as="p" className="sub">pick one, then press play</Rv>
      <div className="deckwrap">
        <Rv className="now">
          <div className={`frame ${p.on ? 'play' : ''}`}>
            <Img key={p.song.id} src={A('covers/' + p.song.id + '.jpg')} ph={p.song.t} className="cover" />
          </div>
          <Eq on={p.on} />
          <h3>{p.song.t}</h3>
          <p className="art">{p.song.a}</p>
          <div className="bar" onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); p.seek((e.clientX - r.left) / r.width) }}>
            <i style={{ width: (p.d ? (p.t / p.d) * 100 : 0) + '%' }} />
          </div>
          <div className="time"><span>{fmt(p.t)}</span><span>{fmt(p.d)}</span></div>
          <div className="ctl">
            <button onClick={p.prev} aria-label="Previous song"><Ic n="prev" /></button>
            <button className="big" onClick={p.toggle} aria-label="Play or pause"><Ic n={p.on ? 'pause' : 'play'} s={28} /></button>
            <button onClick={p.next} aria-label="Next song"><Ic n="next" /></button>
          </div>
        </Rv>
        <Rv d={0.15} className="list">
          {SONGS.map((s, k) => (
            <button key={s.id} className={k === p.i ? 'on' : ''} onClick={() => p.play(k)}>
              <span className="num">{'一二三四五'[k]}</span>
              <span className="meta"><b>{s.t}</b><small>{s.a}</small></span>
              {k === p.i && <Eq on={p.on} />}
            </button>
          ))}
        </Rv>
      </div>
      <Next go={go} to="photos" />
    </main>
  )
}
