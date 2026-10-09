import { useState } from 'react'
import { Rv, Img } from '../ui'
import { Heart } from '../art'
import { FROM, PSALM, PROMISE, A } from '../data'
import { useFx } from '../ctx'

export default function MyPromise() {
  const { rain, burst } = useFx()
  const [yes, setYes] = useState(false)
  return (
    <main className="page bday">
      <Rv className="portrait"><Img src={A('photos/dea.jpg')} ph="Add photos/dea.jpg" /></Rv>
      <Rv as="h2" d={0.1}>My Promise to You</Rv>
      <Rv d={0.15} className="psalm">
        <mark>{PSALM[0]}</mark>
        <cite>{PSALM[1]}</cite>
      </Rv>
      <Rv d={0.2} className="letter">{PROMISE.map((p, i) => <p key={i}>{p}</p>)}</Rv>
      <Rv as="p" className="final">I LOVE YOU SO MUCH BABYY</Rv>
      <Rv className="ask">
        <button className="btn" onClick={(e) => { setYes(true); rain(70); burst(e.clientX, e.clientY, 30) }}>
          Will you let me keep choosing you?
        </button>
        {yes && <p className="yes">Thank you for letting me try. I'll keep choosing you, every single day. <Heart s={20} /> — {FROM}</p>}
      </Rv>
    </main>
  )
}