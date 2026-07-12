import { motion } from 'framer-motion'
import { SCALE_MARKERS } from '../data/site.js'

/* Strategic scale band. Qualitative markers (no disclosed numbers) that sell
   reach and full-stack execution. Items stagger in as the strip enters view. */
export default function StatsStrip() {
  return (
    <section className="relative border-y border-hairline bg-surface/40">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SCALE_MARKERS.map((s, i) => (
            <motion.div
              key={s.kicker}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col gap-2 pl-4"
            >
              <span aria-hidden="true" className="absolute left-0 top-1 h-8 w-px bg-gradient-to-b from-accent to-transparent" />
              <span className="font-display text-lg font-semibold tracking-tightest text-cream sm:text-xl">
                {s.kicker}
              </span>
              <span className="text-sm leading-relaxed text-ash">{s.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
