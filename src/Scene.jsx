import { SakuraTree, Fuji, SunDisc, Cloud, Lantern, Crane } from './art'

// Fixed background. Every layer has its own speed (--k), so the scene moves with depth.
const L = ({ k, cls, children }) => (
  <div className={`px ${cls}`} style={{ '--k': k }}><div className="fl">{children}</div></div>
)

export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <L k={0.015} cls="sunp"><SunDisc /></L>
      <L k={0.03} cls="fuji"><Fuji /></L>
      <L k={0.05} cls="cloud c1"><Cloud /></L>
      <L k={0.08} cls="cloud c2"><Cloud s={130} /></L>
      <L k={0.06} cls="crane cr1"><Crane /></L>
      <L k={0.1} cls="crane cr2"><Crane s={44} /></L>
      <L k={0.16} cls="tree tl"><SakuraTree seed={7} /></L>
      <L k={0.22} cls="tree tr flip"><SakuraTree seed={19} /></L>
      <L k={0.26} cls="lan l1"><Lantern /></L>
      <L k={0.2} cls="lan l2"><Lantern s={44} /></L>
      <L k={0.3} cls="lan l3"><Lantern s={52} /></L>
    </div>
  )
}