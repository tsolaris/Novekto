import { motion, useReducedMotion } from 'framer-motion'
import ConstellationField from './ConstellationField.jsx'

export default function Hero() {
  const reduce = useReducedMotion()
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Constellation network background */}
      <ConstellationField />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="eyebrow">Full-stack performance marketing company</span>

          <h1 className="mt-6 text-[clamp(2rem,8.5vw,2.6rem)] font-semibold leading-[1.04] sm:text-6xl md:text-[4.4rem]">
            Performance marketing,
            <br className="hidden sm:block" />{' '}
            owned end to end.
          </h1>

          <div className="mt-7 max-w-3xl text-lg leading-relaxed text-ash">
            <p>
              We source the offers, buy the media, and distribute through a vetted network.<br />
              One team executing the whole performance stack, not a middleman passing it&nbsp;along.
            </p>
            <p className="mt-5 text-cream/90">We don&rsquo;t spray and pray - we deliver.</p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo('#brands')} className="btn-accent">
              Advertise With Us
            </button>
            <button onClick={() => scrollTo('#affiliates')} className="btn-ghost">
              Become an Affiliate
            </button>
          </div>

          <p className="mt-8 text-sm text-muted">
            Direct advertiser relationships&nbsp;·&nbsp;Compliance-first&nbsp;·&nbsp;Built for
            scale across multiple verticals.
          </p>
        </motion.div>
      </div>

      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-7 mx-auto hidden w-px sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="mx-auto h-10 w-px bg-gradient-to-b from-accent/70 to-transparent" />
        </motion.div>
      )}
    </section>
  )
}
