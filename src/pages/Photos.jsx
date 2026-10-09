import { useState } from 'react'
import { Rv, Img, Next } from '../ui'
import { PHOTOS, A } from '../data'

export default function Photos({ go }) {
  const [o, setO] = useState(null)
  return (
    <main className="page photos">
      <Rv as="h2">Our Moments</Rv>
      <Rv as="p" className="sub">little memories, clipped on a string</Rv>
      <div className="string">
        <svg className="cord" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 2Q50 11 100 2" fill="none" stroke="#a8325a" strokeWidth=".5" vectorEffect="non-scaling-stroke" />
        </svg>
        {PHOTOS.map((p, i) => (
          <Rv key={p.f} d={i * 0.08}>
            <button className="pol" style={{ '--r': [-4, 3, -2, 4, -3, 2][i] + 'deg', '--d': -i * 0.7 + 's' }} onClick={() => setO(i)}>
              <i className="pin" />
              <Img src={A('photos/' + p.f)} ph={'Add photos/' + p.f} />
              <span>{p.c}</span>
            </button>
          </Rv>
        ))}
      </div>
      {o !== null && (
        <div className="modal" onClick={() => setO(null)}>
          <div className="lbc" onClick={(e) => e.stopPropagation()}>
            <Img src={A('photos/' + PHOTOS[o].f)} ph={'Add photos/' + PHOTOS[o].f} className="big" />
            <p>{PHOTOS[o].c}</p>
            <button className="btn ghost" onClick={() => setO(null)}>Close</button>
          </div>
        </div>
      )}
      <Next go={go} to="letters" />
    </main>
  )
}
