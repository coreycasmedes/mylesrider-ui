import { NavLink } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'

interface NavItem {
  to: string
  label: string
  end?: boolean
}

const links: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/music', label: 'Music' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-foreground font-bold tracking-[0.2em] text-sm uppercase"
        >
          Myles Rider
        </NavLink>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-primary'
                        : 'text-foreground/60 hover:text-foreground'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="https://ancientwisdom.community/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-background px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-widest uppercase hover:bg-accent/90 transition-colors duration-200"
          >
            <FiShoppingBag size={16} />
            Store
          </a>
        </div>
      </nav>
    </header>
  )
}
