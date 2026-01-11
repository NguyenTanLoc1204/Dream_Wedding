import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/story', label: 'THE STORY' },
    { path: '/wedding', label: 'THE WEDDING' },
    { path: '/blog', label: 'BLOG' },
    { path: '/wishes', label: 'WISHES', icon: '💌' },
    { path: '/contact', label: 'CONTACT' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="groom-name">Phương</span>
          <span className="heart">💕</span>
          <span className="bride-name">Tú</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon && <span className="nav-icon">{link.icon}</span>}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}