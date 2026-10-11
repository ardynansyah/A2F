import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TeamSection from './components/TeamSection'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a href="#utama" className="skip-link">
        Lompat ke konten
      </a>

      <Navbar />

      <main id="utama">
        <div className="relative w-full overflow-hidden">
          {/* Latar cahaya (ambient glow) yang tersebar di belakang section. */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent-indigo/15 blur-[140px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-[650px] -right-32 h-[400px] w-[500px] rounded-full bg-secondary/10 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-[1800px] -left-32 h-[500px] w-[600px] rounded-full bg-accent-indigo/10 blur-[140px]"
            aria-hidden="true"
          />

          <Hero />
          <About />
          <TeamSection />
          <TechStack />
          <Projects />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
