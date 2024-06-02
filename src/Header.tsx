// src/Header.jsx
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
            <button className="nav-button about">
              <a href="#about">About</a>
            </button>
          </li>
          <li>
            <button className="nav-button portfolio">
              <a href="#portfolio">Portfolio</a>
            </button>
          </li>
          <li>
            <button className="nav-button contact">
              <a href="#contact">Contact</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
