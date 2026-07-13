import { motion } from 'framer-motion'
import CopperAura from './CopperAura.jsx'
import { AFFILIATE_POINTS } from '../data/site.js'

export default function ForAffiliates() {
  return (
    <section
      id="affiliates"
      className="relative scroll-mt-24 overflow-hidden border-y border-hairline bg-surface/40 py-24 md:py-32"
    >
      <CopperAura parallax className="left-[-8rem] top-[-6rem] h-[34rem] w-[34rem] opacity-70" />

      {/* Heading right-aligned to visually mirror (asymmetry vs. Brands) */}
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="ml-auto flex max-w-xl flex-col items-start text-left lg:items-end lg:text-right"
        >
          <span className="eyebrow">For affiliates &amp; publishers</span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
            Bring the traffic. We&rsquo;ll bring the offers.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ash sm:text-lg">
            Direct offers, competitive payouts, and a manager who actually picks up. Drive quality
            volume and the payouts follow.
          </p>
        </motion.div>

        {/* Energetic 2-col card grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AFFILIATE_POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="card-sheen group relative overflow-hidden rounded-xl border border-hairline bg-espresso/60 p-6
                         transition-colors duration-300 hover:border-accent/50"
            >
              <span
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:bg-accent/25"
              />
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                <h3 className="text-base font-semibold text-cream">{p.title}</h3>
              </div>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ash">{p.body.split('\n').map((ln, i) => (<span key={i}>{i > 0 && <br />}{ln}</span>))}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-start lg:justify-end">
          <a href="#contact" className="btn-accent"
             onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Join Our Network
          </a>
        </div>
      </div>
    </section>
  )
}
