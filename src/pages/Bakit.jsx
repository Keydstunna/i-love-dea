import { useState } from 'react'
import { useInView, Rv, Type, Next } from '../ui'
import { WHY, WHY_END } from '../data'

export default function Bakit({ go }) {
  const [ref, seen] = useInView()
  const [s, setS] = useState(0)
  return (
    <main className="page bakit">
      <Rv as="h2">Bakit Ako?</Rv>
      <Rv as="p" className="sub">an honest answer</Rv>
      <div ref={ref} className="paper">
        {WHY.map((t, i) => i <= s && (
          <p key={i} className="l">
            {i < s ? t : <Type text={t} go={seen} speed={36} onDone={() => setTimeout(() => setS(s + 1), 700)} />}
          </p>
        ))}
        {s >= WHY.length && <p className="end">{WHY_END}</p>}
      </div>
      <Next go={go} to="home" />
    </main>
  )
}