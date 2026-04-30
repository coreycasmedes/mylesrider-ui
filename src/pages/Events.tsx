import { Timeline, type TimelineEntry } from '../components/ui/timeline'
import img1 from '../assets/ancient_wisdom1.webp'
import img2 from '../assets/ancient_wisdom2.webp'
import img3 from '../assets/ancient_wisdom3.webp'

const events: TimelineEntry[] = [
  {
    title: 'Ancient Wisdom I',
    date: 'Listening Party',
    content: (
      <div className="space-y-4">
        <img
          src={img1}
          alt="Ancient Wisdom Listening Party I"
          className="w-full rounded-xl object-cover"
        />
        <p className="text-foreground/60 text-sm leading-relaxed">
          The first Ancient Wisdom listening party — an intimate evening of unreleased
          tracks, conversation, and community. The night that started it all.
        </p>
      </div>
    ),
  },
  {
    title: 'Ancient Wisdom II',
    date: 'Listening Party',
    content: (
      <div className="space-y-4">
        <img
          src={img2}
          alt="Ancient Wisdom Listening Party II"
          className="w-full rounded-xl object-cover"
        />
        <p className="text-foreground/60 text-sm leading-relaxed">
          Volume II pushed deeper — new collaborators, new sounds, and a room full of
          people hearing the record for the very first time.
        </p>
      </div>
    ),
  },
  {
    title: 'Ancient Wisdom III',
    date: 'Listening Party',
    content: (
      <div className="space-y-4">
        <img
          src={img3}
          alt="Ancient Wisdom Listening Party III"
          className="w-full rounded-xl object-cover"
        />
        <p className="text-foreground/60 text-sm leading-relaxed">
          The third chapter. Bigger room, same energy. Ancient Wisdom continues to grow
          one listening party at a time.
        </p>
      </div>
    ),
  },
]

export default function Events() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">Live Events</p>
        <h2 className="text-foreground text-5xl font-bold">Ancient Wisdom</h2>
        <p className="text-foreground/60 mt-4 max-w-md">
          A series of intimate listening parties celebrating the album and the community around it.
        </p>
      </div>

      <Timeline data={events} />
    </section>
  )
}
