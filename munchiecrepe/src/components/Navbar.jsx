import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  function isActive(path) {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="site-header" ref={navRef}>
      <div className="container nav-wrap">
        <Link to="/" className="logo">
          Munchie<span>Crepe</span> Store
        </Link>

        <button
          className="menu-toggle"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </button>

        <nav className={`nav-menu${menuOpen ? ' show-menu' : ''}`}>
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/menu" className={isActive('/menu')}>Menu</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
