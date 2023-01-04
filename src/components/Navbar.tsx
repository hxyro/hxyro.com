import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-fixed-top" role="navigation">
      <div className="navbar-brand">
        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="home" smooth={true} className="navbar-item">
            Home
          </Link>
          <Link to="about" smooth={true} className="navbar-item">
            About
          </Link>
          <Link to="projects" smooth={true} className="navbar-item">
            Projects
          </Link>
          <a href="/resume.pdf" className="navbar-item">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
