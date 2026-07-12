import { motion } from 'framer-motion'

const PRINCIPLES = ['Direct relationships', 'Right offer with matched traffic', 'Transparent numbers', 'Partnerships that last']

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="eyebrow">Why Novekto</span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
            The edge is knowing what actually works.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {PRINCIPLES.map((p) => (
              <span key={p} className="chip">{p}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl space-y-6 text-[1.02rem] leading-relaxed text-ash"
        >
          <p>
            Novekto was built by industry veterans who have spent years inside performance
            marketing - buying media, managing affiliates, and negotiating the deals that make
            campaigns profitable.<br />
            Our experience is the product - anyone can plug into a network, but not everyone knows
            which offer fits which traffic, or why a payout that looks great on paper falls apart at
            scale.
          </p>
          <p>
            We work advertiser-direct, which means better economics and offers you will not find
            resold three layers deep. On the other side, we match those offers to publishers we have
            actually vetted - then buy media in-house to fill the gaps.<br />
            The whole chain sits under one roof, so nothing gets lost in translation.
          </p>
          <p>
            <span className="text-cream">~ Know-how is our moat, everything else is tooling ~</span><br />
            We are pedantic with the numbers, careful in regulated verticals, and in it for the long
            partnerships rather than the quick flip.<br />
            When something is not working, we notify - and fix it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
