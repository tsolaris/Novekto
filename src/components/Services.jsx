import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { SERVICES } from '../data/site.js'

function ServiceCard({ service, index }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)

  // Pointer-driven tilt
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotX = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 150, damping: 15 })
  const rotY = useSpring(useTransform(px, [0, 1], [-6, 6]), { stiffness: 150, damping: 15 })

  // Cursor spotlight position
  const [glow, setGlow] = useState({ x: 50, y: 30, on: false })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    px.set(x)
    py.set(y)
    setGlow({ x: x * 100, y: y * 100, on: true })
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
    setGlow((g) => ({ ...g, on: false }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.article
        ref={ref}
        onMouseMove={reduce ? undefined : onMove}
        onMouseLeave={reduce ? undefined : onLeave}
        style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
        className="card-sheen group relative h-full overflow-hidden rounded-2xl border border-hairline bg-surface/70 p-7
                   transition-colors duration-300 hover:border-accent/50"
      >
        {/* Heat glow following the cursor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(240px circle at ${glow.x}% ${glow.y}%, rgba(34,211,238,0.18), transparent 60%)`,
          }}
        />
        <div className="relative flex h-full flex-col">
          <span className="font-display text-sm font-semibold text-accent/80">{service.id}</span>
          <h3 className="mt-4 text-xl font-semibold text-cream">{service.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ash">{service.body}</p>
          <div className="mt-6 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-gold transition-transform duration-500 group-hover:scale-x-100" />
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Capabilities"
          title="The full performance stack, in-house."
          intro="One team owning every step - from the advertiser deal, to the media buy, to the click that converts."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
