import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Wordmark from './Wordmark.jsx'
import Footer from './Footer.jsx'

/*
  Shared shell for /privacy and /terms - dark theme, single column, back-to-home.
  Children are the policy body. Use <h2>, <p>, <ul> etc. and the .prose-legal
  wrapper handles spacing/typography.
*/
export default function LegalLayout({ title, updated, intro, children }) {
  return (
    <>
      {/* Minimal top bar */}
      <header className="sticky top-0 z-50 border-b border-hairline/80 bg-espresso/70 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between md:h-18">
          <Wordmark />
          <Link
            to="/"
            className="link-underline -my-3 inline-flex items-center gap-2 py-3 text-sm font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M8.5 3 4.5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.16), transparent 70%)' }}
        />
        <div className="container-x max-w-3xl py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Legal</span>
            <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
            {intro && <p className="mt-8 text-lg leading-relaxed text-ash">{intro}</p>}
          </motion.div>

          <div className="prose-legal mt-12">{children}</div>

          <div className="molten-rule mt-16 opacity-60" />
          <Link to="/" className="btn-ghost mt-10">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M8.5 3 4.5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
