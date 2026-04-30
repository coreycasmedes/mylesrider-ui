import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import { FaSpotify } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'
import albumCover from '@/assets/ancient_wisdom_album_cover.webp'

export default function Music() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">Discography</p>
      <h2 className="text-foreground text-5xl font-bold mb-2">Music</h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-16">
        <CardContainer containerClassName="py-10">
          <CardBody className="relative w-80 h-auto rounded-xl border border-muted bg-muted/40">
            <CardItem translateZ={100} className="w-full">
              <img
                src={albumCover}
                alt="Ancient Wisdom Album Cover"
                className="w-full rounded-xl object-cover"
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        <div className="flex flex-col justify-center py-10">
          <CardContainer containerClassName="py-0">
            <CardBody className="w-auto h-auto border-none bg-transparent">
              <CardItem translateZ={60} as="p" className="text-primary text-xs tracking-[0.3em] uppercase mb-2">
                2024 · Full Length
              </CardItem>
              <CardItem translateZ={80} as="h3" className="text-foreground text-4xl font-bold mb-4">
                Ancient Wisdom
              </CardItem>
              <CardItem translateZ={40} as="p" className="text-foreground/60 text-sm leading-relaxed max-w-md mb-8">
                Quadroon · Myles Rider · Quarter Mile. A project that defies genre —
                rooted in soul, stretched across alternative and hip-hop, and shaped
                by the energy of the Ancient Wisdom listening parties.
              </CardItem>
              <CardItem translateZ={60} className="flex gap-4">
                <a
                  href="https://open.spotify.com/artist/2DCv5K2TZsv0Q18tkTzs3R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chamfer flex items-center gap-2 bg-primary text-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/80 transition-colors"
                >
                  <FaSpotify size={16} />
                  Spotify
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chamfer flex items-center gap-2 bg-secondary text-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-secondary/80 transition-colors"
                >
                  <SiApplemusic size={16} />
                  Apple Music
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  )
}
