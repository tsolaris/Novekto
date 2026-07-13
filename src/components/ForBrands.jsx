import { motion } from 'framer-motion'
import CopperAura from './CopperAura.jsx'
import { BRAND_POINTS } from '../data/site.js'

/* Shield / check mark - reassuring, safety-forward tone for advertisers */
function CheckMark() {
  return (
    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2.5 6.2 5 8.6 9.5 3.4" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function ForBrands() {
  return (
    <section id="brands" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <CopperAura parallax className="right-[-10rem] top-10 h-[30rem] w-[30rem] opacity-60" />
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left: pitch + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="eyebrow">For brands &amp; advertisers</span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
            Traffic you can rely on.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ash sm:text-lg">
            You are trusting a partner with your budget and your brand.<br />
            We own the execution end to end - quality volume, priced on performance, run clean in
            verticals where compliance is not optional.
          </p>
          <a href="#contact" className="btn-accent mt-8"
             onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Become a Partner
          </a>
        </motion.div>

        {/* Right: reassurance list */}
        <div className="flex flex-col divide-y divide-hairline">
          {BRAND_POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 py-6 first:pt-0"
            >
              <CheckMark />
              <div>
                <h3 className="text-lg font-semibold text-cream">{p.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ash">{p.body.split('\n').map((ln, i) => (<span key={i}>{i > 0 && <br />}{ln}</span>))}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
