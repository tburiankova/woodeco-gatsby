import React from "react"
import Link from "gatsby-plugin-transition-link"
import { navLinks } from "../data/navLinks"

function MobileNavigation({ navOpen, setNavOpen }) {
  return (
    <div className={`mobile-nav-wrapper ${navOpen ? "mobile-nav-open" : ""} `}>
      <div className="close-btn" onClick={() => setNavOpen(!navOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`${navOpen ? "mobile-links" : ""}`}
        style={{ opacity: navOpen ? 1 : 0 }}
      >
        <div className="logo-wrapper" onClick={() => setNavOpen(!navOpen)}>
          <Link to="/" className="link logo-dark">
            wood<span>eco</span>
          </Link>
        </div>
        {navLinks.map(link => (
          <li key={link.key} onClick={() => setNavOpen(!navOpen)}>
            <Link to={link.path} className="link mobile-link">
              <span>0{link.key} /</span> {link.name}
            </Link>
          </li>
        ))}
        <button
          className="cta-btn mobile-contact"
          onClick={() => setNavOpen(!navOpen)}
        >
          <Link className="link" to="/contact">
            Contact
          </Link>
        </button>
      </ul>
    </div>
  )
}

export default MobileNavigation
