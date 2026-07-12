import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
  Soft accent gradient aura for section backgrounds. Atmospheric glow, never neon.
  - pulse: gentle breathing (autoplay, halts under reduced-motion)
  - parallax: scroll-driven vertical drift (use only on auras WITHOUT an x-centering
    class, so the transform does not fight a -translate-x-1/2).
*/
export default function CopperAura({ className = '', pulse = false, parallax = false, range = 70 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [range, -range])

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={parallax ? { y } : undefined}
      className={`pointer-events-none absolute -z-10 rounded-full blur-[110px] ${
        pulse && !parallax ? 'animate-aura-pulse' : ''
      } ${className}`}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.42) 0%, rgba(56,189,248,0.20) 45%, rgba(11,15,23,0) 72%)',
        }}
      />
    </motion.div>
  )
}
