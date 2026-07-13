import { motion } from 'framer-motion'

/* Reusable eyebrow + heading + optional intro.
   Motion style: subtle fade-and-rise, with a light stagger between the
   eyebrow, heading, and intro so each section resolves cleanly on scroll. */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.02 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function SectionHeading({ eyebrow, title, intro, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {eyebrow && <motion.span variants={item} className="eyebrow">{eyebrow}</motion.span>}
      <motion.h2 variants={item} className="text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-[2.7rem]">
        {title}
      </motion.h2>
      {intro && <motion.p variants={item} className="text-base leading-relaxed text-ash sm:text-lg">{intro}</motion.p>}
    </motion.div>
  )
}
