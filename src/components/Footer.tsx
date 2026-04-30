import { FaSpotify, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'
import type { IconType } from 'react-icons'

interface SocialLink {
  label: string
  href: string
  Icon: IconType
}

const socials: SocialLink[] = [
  { label: 'Spotify',     href: '#', Icon: FaSpotify },
  { label: 'Apple Music', href: '#', Icon: SiApplemusic },
  { label: 'Instagram',   href: '#', Icon: FaInstagram },
  { label: 'YouTube',     href: '#', Icon: FaYoutube },
]

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-foreground/40 text-xs tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Myles Rider. All rights reserved.
        </p>

        <ul className="flex items-center gap-6">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="text-foreground/40 hover:text-primary transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
