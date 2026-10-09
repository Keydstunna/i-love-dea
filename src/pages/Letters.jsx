import { useState, useEffect } from 'react'
import { Rv, Img, Type, Next } from '../ui'
import { Env } from '../art'
import { LETTERS, SONGS, NAME, FROM, A } from '../data'
import { useFx, usePlayer } from '../ctx'

function Letter({ l, close }) {
  const pl = usePlayer()
  const [start, setStart] = useState(false)
  const [done, setDone] = useState(false)
  useEffect(() => { const t = setTimeout(() => setStart(true), 900); return () => clearTimeout(t) }, [])
  return (
    <div className={`modal ${l.dark ? 'night' : ''}`} onClick={close}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={close} aria-label="Close letter">✕</button>
        <h4>{NAME},</h4>
        {l.photo && <Img src={A('photos/funny.jpg')} ph="Add photos/funny.jpg (your funniest photo)" className="funny" />}
        <p className="body"><Type text={l.body} go={start} onDone={() => setDone(true)} /></p>
        <div className={`sig ${done ? 'on' : ''}`}>— {FROM}</div>
        {l.playlist && (
          <div className={`miniplay ${done ? 'on' : ''}`}>
            <small>a little playlist for tonight</small>
            {SONGS.map((s, k) => (
              <button key={s.id} className={pl.on && pl.i === k ? 'on' : ''} onClick={() => pl.play(k)}>♪ {s.t}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Letters({ go }) {
  const [o, setO] = useState(null)
  const { burst } = useFx()
  return (
    <main className="page letters">
      <Rv as="h2">Open When…</Rv>
      <Rv as="p" className="sub">tap an envelope</Rv>
      <div className="envs">
        {LETTERS.map((l, i) => (
          <Rv key={l.k} d={i * 0.07}>
            <button className="envbtn" onClick={(e) => { setO(i); burst(e.clientX, e.clientY, 8) }}>
              <Env k={l.kanji} /><span>{l.k}</span>
            </button>
          </Rv>
        ))}
      </div>
      {o !== null && <Letter key={o} l={LETTERS[o]} close={() => setO(null)} />}
      <Next go={go} to="reasons" />
    </main>
  )
}
