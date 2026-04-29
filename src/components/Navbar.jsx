import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <span>✝</span> Restoration of the Fountain
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
        <li><NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''}>Schedule</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}
