import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop.jsx'
import GrainOverlay from './components/GrainOverlay.jsx'
import AmbientGlow from './components/AmbientGlow.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

export default function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation honor the
    // prefers-reduced-motion setting (the global CSS block only covers CSS
    // transitions/animations, not JS-driven motion).
    <MotionConfig reducedMotion="user">
      {/* Keyboard/screen-reader skip link; visually hidden until focused */}
      <a href="#main-content" className="skip-link">Skip to content</a>
      {/* Film-grain texture across the whole app for a tactile, premium feel */}
      <AmbientGlow />
      <ScrollProgress />
      <GrainOverlay />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </MotionConfig>
  )
}
