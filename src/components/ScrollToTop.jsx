import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/*
  On route change: reset scroll to top AND move keyboard/screen-reader focus to
  the main landmark so SPA navigation is announced. The initial page load is
  skipped so we don't steal focus or announce on first render.
*/
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const main = document.getElementById('main-content')
    if (main) main.focus({ preventScroll: true })
  }, [pathname])

  return null
}
