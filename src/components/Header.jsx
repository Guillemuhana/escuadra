import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useQuote } from '../App'
import logo from '../assets/logo-header.png'

const SERVICES_MENU = [
  { label: 'Residential Construction', to: '/residential' },
  { label: 'Commercial Projects', to: '/commercial' },
  { label: 'Project Management', to: '/project-management' },
  { divider: true },
  { label: 'Concrete', to: '/services/concrete' },
  { label: 'Stucco', to: '/services/stucco' },
  { label: 'Framing', to: '/services/framing' },
  { label: 'Roofing', to: '/services/roofing' },
  { label: 'Painting', to: '/services/painting' },
  { label: 'Tile & Flooring', to: '/services/flooring' },
  { label: 'Renovations', to: '/services/renovations' },
]

export default function Header() {
  const openQuote = useQuote()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => { setMobileOpen(false); setDropOpen(false) }, [pathname])

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isServicesActive = ['/residential', '/commercial', '/project-management', '/services'].some(p => pathname.startsWith(p))

  return (
    <header className="header">
      <Link to="/" className="brand">
        <img src={logo} alt="Escuadra Builders Group" className="brand-logo-full" />
      </Link>

      <nav className={`nav${mobileOpen ? ' nav-open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}>
          HOME
        </NavLink>

        <div className="nav-drop-wrap" ref={dropRef}>
          <button
            className={`nav-link nav-drop-btn${isServicesActive ? ' nav-link-active' : ''}`}
            onClick={() => setDropOpen(v => !v)}
          >
            SERVICES <ChevronDown size={12} className={`drop-chevron${dropOpen ? ' open' : ''}`} />
          </button>
          {dropOpen && (
            <div className="drop-menu">
              <div className="drop-section-label">MAIN CATEGORIES</div>
              {SERVICES_MENU.slice(0, 3).map(item => (
                <Link key={item.to} to={item.to} className="drop-item drop-item-main"
                  onClick={() => setDropOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="drop-divider" />
              <div className="drop-section-label">TECHNICAL SERVICES</div>
              <div className="drop-grid">
                {SERVICES_MENU.slice(4).map(item => (
                  <Link key={item.to} to={item.to} className="drop-item"
                    onClick={() => setDropOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <a href="/#projects" className="nav-link" onClick={() => setMobileOpen(false)}>PROJECTS</a>
        <a href="/#about" className="nav-link" onClick={() => setMobileOpen(false)}>ABOUT</a>
        <a href="/#contact" className="nav-link" onClick={() => setMobileOpen(false)}>CONTACT</a>
        <button className="nav-cta" onClick={() => { setMobileOpen(false); openQuote() }}>GET A QUOTE</button>
      </nav>

      <button className="menu-btn" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  )
}
