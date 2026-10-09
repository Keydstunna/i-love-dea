import { useState } from 'react'
import { FxProvider, PlayerProvider, useFx, usePlayer } from './ctx'
import { Sakura, Hanko, Ic, Heart, Car, Brick } from './art'
import { PAGES } from './data'
import Home from './pages/Home'
import Story from './pages/Story'
import Songs from './pages/Songs'
import Photos from './pages/Photos'
import Letters from './pages/Letters'
import Reasons from './pages/Reasons'
import Bakit from './pages/Bakit'
import Birthday from './pages/Birthday'
import Secret from './pages/Secret'

const ROUTES = { home: Home, story: Story, songs: Songs, photos: Photos, letters: Letters, reasons: Reasons, bakit: Bakit, birthday: Birthday, secret: Secret }

// Sakura petals that fall on every page
const Petals = () => (
  <div className="petals" aria-hidden="true">
    {Array.from({ length: 12 }, (_, i) => (
      <span key={i} style={{ left: i * 8 + 3 + '%', animationDelay: -i * 1.9 + 's', animationDuration: 14 + (i % 5) * 3 + 's' }}>
        <Sakura s={14 + (i % 3) * 7} />
      </span>
    ))}
  </div>
)

function MiniPlayer({ go }) {
  const p = usePlayer()
  return (
    <div className="mini">
      <button onClick={p.toggle} aria-label="Play or pause music"><Ic n={p.on ? 'pause' : 'play'} s={20} /></button>
      <button className="mt" onClick={() => go('songs')}><b>{p.song.t}</b><small>{p.song.a}</small></button>
    </div>
  )
}

function Footer({ go }) {
  const [zoom, setZoom] = useState(false)
  return (
    <footer className="foot">
      <div className="toys">
        <Brick />
        <button className={`car ${zoom ? 'zoom' : ''}`} aria-label="Hot Wheels car"
          onClick={() => { setZoom(true); setTimeout(() => setZoom(false), 2200) }}><Car /></button>
      </div>
      <p>made with love · 愛を込めて</p>
      <button className="secret" onClick={() => go('secret')} aria-label="A secret"><Heart s={20} /></button>
    </footer>
  )
}

function Shell() {
  const initial = location.hash.slice(1)
  const [route, setRoute] = useState(ROUTES[initial] ? initial : 'home')
  const [shut, setShut] = useState(false)
  const [menu, setMenu] = useState(false)
  const { burst } = useFx()

  // The shoji doors close, the page changes, the doors open.
  const go = (id) => {
    setMenu(false)
    if (id === route) return
    setShut(true)
    setTimeout(() => {
      setRoute(id)
      window.scrollTo(0, 0)
      history.replaceState(null, '', '#' + id)
      setTimeout(() => setShut(false), 150)
    }, 560)
  }
  const Page = ROUTES[route]
  return (
    <div onPointerDown={(e) => burst(e.clientX, e.clientY, 5)}>
      <Petals />
      <header className="top">
        <button className="brand" onClick={() => go('home')}><Hanko k="愛" s={34} /><span>Dea</span></button>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}><Ic n={menu ? 'close' : 'menu'} /></button>
      </header>
      <nav className={`menu ${menu ? 'on' : ''}`} aria-label="Pages">
        <div>
          {PAGES.map(([id, k, label]) => (
            <button key={id} className={id === route ? 'cur' : ''} onClick={() => go(id)}><b>{k}</b><span>{label}</span></button>
          ))}
        </div>
      </nav>
      <Page key={route} go={go} />
      {route !== 'secret' && <Footer go={go} />}
      <MiniPlayer go={go} />
      <div className={`shoji ${shut ? 'on' : ''}`} aria-hidden="true"><i /><i /></div>
    </div>
  )
}

export default function App() {
  return (
    <FxProvider>
      <PlayerProvider>
        <Shell />
      </PlayerProvider>
    </FxProvider>
  )
}
