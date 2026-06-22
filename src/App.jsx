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

export default function App() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <Nav />
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
