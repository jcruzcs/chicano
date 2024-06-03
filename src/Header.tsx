// src/Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">
        <span className="title-el">el</span>
        <span className="title-chinoartist">chicano</span>
        <span className="title-artist">artist</span>
      </h1>
      <nav className="site-nav">
        <ul>
          <li>
            <Link to="/" className="nav-button about">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-button portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-button contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
