import { Link, useLocation } from 'react-router-dom'

/*
  Novekto wordmark - minimal geometric logotype.
  The "V" is rendered as a small accent chevron mark, then the word.
  Clicking it always takes the user to the top of the home page:
   - from a legal route, <Link to="/"> navigates home (ScrollToTop resets to 0)
   - when already on "/", we smooth-scroll to the top ourselves
*/
export default function Wordmark({ className = '', onClick }) {
  const { pathname } = useLocation()

  const handleClick = (e) => {
    onClick?.(e)
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Link
      to="/"
      onClick={handleClick}
      aria-label="Novekto - back to top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {/* geometric mark: a accent chevron in a soft-cornered tile */}
      <span
        className="relative grid h-8 w-8 place-items-center rounded-[9px] border border-hairline bg-surface
                   transition-colors duration-300 group-hover:border-accent/60"
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="9.4" ry="3.7" transform="rotate(-28 12 12)" stroke="url(#nvk)" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="9.4" ry="3.7" transform="rotate(28 12 12)" stroke="url(#nvk)" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2.3" fill="#67E8F9" />
          <defs>
            <linearGradient id="nvk" x1="3" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67E8F9" />
              <stop offset="0.55" stopColor="#22D3EE" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tightest text-cream">
        Novekto
      </span>
    </Link>
  )
}
