import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6">
        Independent Artist
      </p>
      <h1 className="text-foreground text-6xl sm:text-8xl font-bold tracking-tight mb-6">
        Myles Rider
      </h1>
      <p className="text-foreground/60 text-lg max-w-md mb-10">
        Genre-bending music forged at the intersection of soul, alternative,
        and something entirely new.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
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
      </div>

      <iframe
        src="https://open.spotify.com/embed/artist/2DCv5K2TZsv0Q18tkTzs3R"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="max-w-xl rounded-xl"
      />
    </section>
  )
}
