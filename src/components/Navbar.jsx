import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="nav-logo">
        <span>✝</span> Restoration of the Fountain
      </div>

      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About Us</NavLink></li>
        <li><NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Schedule</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}
