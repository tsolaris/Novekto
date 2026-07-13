import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Wordmark from './Wordmark.jsx'
import { NAV_LINKS } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close the mobile menu on Escape for keyboard users
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  /* Anchor navigation that also works from /privacy and /terms */
  const goTo = (href) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-hairline/80 bg-espresso/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Wordmark onClick={() => setOpen(false)} />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => goTo(l.href)}
              className="link-underline text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button onClick={() => goTo('#contact')} className="btn-accent">
            Partner With Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-lg border border-hairline bg-surface/60 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-cream transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-cream transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-cream transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            id="mobile-menu"
            className="border-t border-hairline bg-espresso/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => goTo(l.href)}
                  className="rounded-lg px-2 py-3 text-left text-base font-medium text-cream/90 hover:bg-surface"
                >
                  {l.label}
                </button>
              ))}
              <button onClick={() => goTo('#contact')} className="btn-accent mt-3 w-full">
                Partner With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
