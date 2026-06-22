import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Statement from './components/Statement'
import Features from './components/Features'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Branches from './components/Branches'
import Press from './components/Press'
import Visit from './components/Visit'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import MenuPage from './components/MenuPage'

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash)

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '#menu-all') {
    return <MenuPage />
  }

  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      {/* <Nav /> — temporarily hidden, file kept for re-enable */}
      <Hero />
      <Marquee />
      <Statement />
      <Features />
      <Menu />
      <Gallery />
      <Branches />
      <Press />
      <Visit />
      <Reserve />
      <Footer />
    </main>
  )
}
