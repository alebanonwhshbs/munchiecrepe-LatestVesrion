import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Munchie Crepe Store</h3>
          <p>Fresh sweet crepes for every mood.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Opening Hours</h4>
          <p>Mon - Thu: 10:00 AM - 11:00 PM</p>
          <p>Fri - Sun: 12:00 PM - 1:00 AM</p>
          <p className="footer-location">LOCATED IN NABATIEH JNOUB</p>
        </div>
      </div>
      <p className="copyright">© 2026 Aliwehbi. My rights are reserved.</p>
    </footer>
  )
}

export default Footer
