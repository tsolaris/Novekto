import { motion } from 'framer-motion'

/* Thin molten gradient rule that draws itself in when scrolled into view. */
export default function MoltenDivider({ className = '' }) {
  return (
    <div aria-hidden="true" className={`container-x ${className}`}>
      <motion.div
        className="molten-rule origin-center"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
