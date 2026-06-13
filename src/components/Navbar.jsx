import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Dining', path: '/dining' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <svg viewBox="0 0 44 44" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20" fill="none" stroke="#C9A84C" strokeWidth="1"/>
              <polygon points="22,6 25.5,16 36,16 27.5,22.5 30.5,33 22,27 13.5,33 16.5,22.5 8,16 18.5,16" fill="#C9A84C"/>
            </svg>
            <div>
              <div className={`font-serif text-xl font-600 tracking-widest leading-none transition-colors ${scrolled ? 'text-charcoal-dark' : 'text-white'}`}>
                ANNAN'S
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link transition-colors ${scrolled ? 'text-charcoal' : 'text-white/90'} ${location.pathname === link.path ? 'text-gold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Reservation button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-gold text-sm">
              Reservation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white/98 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link text-charcoal ${location.pathname === link.path ? 'text-gold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold text-center mt-2">
            Reservation
          </Link>
        </div>
      </div>
    </nav>
  )
}
