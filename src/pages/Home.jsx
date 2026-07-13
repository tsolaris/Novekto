import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import ForBrands from '../components/ForBrands.jsx'
import ForAffiliates from '../components/ForAffiliates.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import MoltenDivider from '../components/MoltenDivider.jsx'

export default function Home() {
  const location = useLocation()

  // Per-route document title (SPA)
  useEffect(() => {
    document.title = 'Novekto - Full-Stack Performance Marketing Company'
  }, [])

  // When arriving from a legal page with a target section, scroll to it once mounted.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      requestAnimationFrame(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.state])

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <StatsStrip />
        <MoltenDivider />
        <ForBrands />
        <ForAffiliates />
        <About />
        <MoltenDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
