import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { NAV_LINKS } from '../data/site.js'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const goTo = (href) => {
    if (location.pathname !== '/') navigate('/', { state: { scrollTo: href } })
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-espresso">
      <div className="container-x py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Brand + tagline */}
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Sourced direct, not resold. Full-stack performance marketing - media buying,
              distribution, and optimization across regulated verticals.
            </p>
            <button
              onClick={() => goTo('#contact')}
              className="link-underline mt-5 inline-block text-sm font-medium text-accent-light"
            >
              Partner with us
            </button>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-12 gap-y-8 sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Explore</p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <button onClick={() => goTo(l.href)} className="link-underline text-sm">
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Legal</p>
              <ul className="mt-4 space-y-3">
                <li><Link to="/privacy" className="link-underline text-sm">Privacy Policy</Link></li>
                <li><Link to="/terms" className="link-underline text-sm">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="molten-rule mt-14 opacity-60" />

        <div className="mt-8 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Novekto. All rights reserved.</p>
          <p className="max-w-md sm:text-right">
            Novekto operates across multiple verticals. Availability of offers and
            payouts varies by geo and compliance requirements.
          </p>
        </div>
      </div>
    </footer>
  )
}
