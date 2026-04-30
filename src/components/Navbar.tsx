import { NavLink } from 'react-router-dom'

interface NavItem {
  to: string
  label: string
  end?: boolean
}

const links: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/music', label: 'Music' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-muted border-b border-foreground/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-foreground font-bold tracking-[0.2em] text-sm uppercase"
        >
          Myles Rider
        </NavLink>

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
      </nav>
    </header>
  )
}
