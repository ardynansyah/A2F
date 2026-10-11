import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import Members from './components/Members'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <>
      <a href="#utama" className="skip-link">
        Lompat ke konten
      </a>
      <SiteHeader />
      <main id="utama">
        <Hero />
        <Members />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
