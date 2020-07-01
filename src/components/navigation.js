import React, { useEffect } from "react"
import gsap from "gsap"

// components
import CustomLink from "./customLink"

// links data
import { navLinks } from "../data/navLinks"

function Navigation({ navOpen, setNavOpen }) {
  useEffect(() => {
    gsap.to(".navbar-wrapper", 0.5, {
      delay: 0.5,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    })
  }, [navOpen])

  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="logo-wrapper">
          <CustomLink path="/" styleClass="link logo-dark">
            wood<span>eco</span>
          </CustomLink>
        </div>
        <ul>
          {navLinks.map(link => (
            <li key={link.key}>
              <CustomLink
                styleClass="link"
                path={link.path}
                activeStyleClass="active-navlink"
              >
                <span>0{link.key} /</span> {link.name}
              </CustomLink>
            </li>
          ))}
          <li className="cta-btn">
            <CustomLink styleClass="link" path="/contact">
              Contact
            </CustomLink>
          </li>
        </ul>
        <button
          className={`hamburger-menu ${navOpen ? "hamburger-menu-hide" : ""} `}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  )
}

export default Navigation

{
  /* <TransitionLink
                className="link"
                to={link.path}
                exit={{
                  trigger: ({ exit, node }) => onExit(exit, node),
                  length: 1,
                }}
                entry={{
                  trigger: ({ entry, node }) => onEnter(entry, node),
                  delay: 0.6,
                }}
                activeClassName="active-navlink"
              >
                <span>0{link.key} /</span> {link.name}
              </TransitionLink> */
}
