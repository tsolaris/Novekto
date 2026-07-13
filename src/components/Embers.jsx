import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/*
  Slow accent ember drift for the hero background.
  Deterministic-ish random layout, calm density, disabled for reduced-motion.
*/
export default function Embers({ count = 16 }) {
  const reduce = useReducedMotion()
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 9,
        drift: (Math.random() - 0.5) * 60,
        gold: Math.random() > 0.7,
      })),
    [count],
  )

  if (reduce) return null

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <motion.span
          key={e.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            background: e.gold ? '#67E8F9' : '#22D3EE',
            boxShadow: `0 0 ${e.size * 3}px ${e.gold ? 'rgba(103,232,249,0.8)' : 'rgba(34,211,238,0.8)'}`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-10, -260 - Math.random() * 120], x: [0, e.drift], opacity: [0, 0.9, 0] }}
          transition={{ duration: e.duration, delay: e.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
