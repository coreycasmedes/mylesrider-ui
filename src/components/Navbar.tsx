import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

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

const StoreButton = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <a
    href="https://ancientwisdom.community/collections/all"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-2 bg-accent text-background rounded-lg font-mono font-bold tracking-widest uppercase hover:bg-accent/90 transition-colors duration-200 ${
      size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
    }`}
  >
    <FiShoppingBag size={size === 'sm' ? 14 : 16} />
    Store
  </a>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-foreground font-bold tracking-[0.2em] text-sm uppercase"
        >
          Myles Rider
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
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
          <StoreButton />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <StoreButton size="sm" />
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-foreground/60 hover:text-foreground transition-colors p-1"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-background border-b border-foreground/5"
          >
            <ul className="flex flex-col px-6 py-5 gap-5">
              {links.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-sm tracking-wide transition-colors duration-200 ${
                        isActive ? 'text-primary' : 'text-foreground/60'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
