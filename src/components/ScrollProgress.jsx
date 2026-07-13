import { motion, useScroll, useSpring } from 'framer-motion'

/*
  Thin molten progress bar pinned to the top of the viewport that fills as the
  page scrolls. Scroll-linked (not autoplaying), spring-smoothed for a premium feel.
*/
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[55] h-[3px] w-full"
      style={{ scaleX }}
    />
  )
}
