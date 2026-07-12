import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/*
  Subtle cyan "constellation" network behind the hero: drifting nodes linked by
  faint lines. Full-bleed canvas, edges masked to fade out. Respects
  prefers-reduced-motion (renders a single static frame), handles resize, and
  cleans up its animation frame on unmount. Decorative + non-interactive.
*/
export default function ConstellationField({ className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const TAU = Math.PI * 2
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    let W = 0, H = 0, pts = [], raf = 0

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      W = Math.max(1, rect.width)
      H = Math.max(1, rect.height)
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // density scales with area; capped low on small screens for calm + perf
      const count = Math.max(12, Math.min(64, Math.round((W * H) / 13000)))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.26,
        vy: (Math.random() - 0.5) * 0.26,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const LINK = Math.max(85, Math.min(150, W / 11))
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(34,211,238,${0.13 * (1 - d / LINK)})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = 'rgba(103,232,249,0.7)'
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.3, 0, TAU); ctx.fill()
      }
    }

    const loop = () => { draw(); raf = requestAnimationFrame(loop) }

    build()
    if (reduce) draw()
    else raf = requestAnimationFrame(loop)

    const onResize = () => { build(); if (reduce) draw() }
    let ro
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(onResize)
      ro.observe(canvas)
    } else {
      window.addEventListener('resize', onResize)
    }

    return () => {
      cancelAnimationFrame(raf)
      if (ro) ro.disconnect()
      else window.removeEventListener('resize', onResize)
    }
  }, [reduce])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        maskImage: 'radial-gradient(125% 100% at 50% 32%, #000 52%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(125% 100% at 50% 32%, #000 52%, transparent 100%)',
      }}
    >
      <canvas ref={ref} className="h-full w-full" />
    </div>
  )
}
