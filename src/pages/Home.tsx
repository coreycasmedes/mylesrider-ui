import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

// slides up from behind a clip mask — the premium text reveal
const wordReveal = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Home() {
  return (
    <motion.section
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={fadeUp}
        className="text-primary text-xs tracking-[0.3em] uppercase mb-6"
      >
        Independent Artist
      </motion.p>

      <h1 className="text-foreground text-6xl sm:text-8xl font-bold tracking-tight mb-6 flex gap-5">
        {['Myles', 'Rider'].map((word) => (
          <div key={word} className="overflow-hidden">
            <motion.span variants={wordReveal} className="inline-block">
              {word}
            </motion.span>
          </div>
        ))}
      </h1>

      <motion.p
        variants={fadeUp}
        className="text-foreground/60 text-lg max-w-md mb-10"
      >
        Genre-bending music forged at the intersection of soul, alternative,
        and something entirely new.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
      >
        <Link
          to="/music"
          className="btn-chamfer bg-primary text-foreground px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-primary/80 transition-colors"
        >
          Listen Now →
        </Link>
        <Link
          to="/contact"
          className="btn-chamfer bg-secondary text-foreground px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-secondary/80 transition-colors"
        >
          Book a Show →
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} className="w-full max-w-xl">
        <iframe
          src="https://open.spotify.com/embed/artist/2DCv5K2TZsv0Q18tkTzs3R"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </motion.div>
    </motion.section>
  )
}
