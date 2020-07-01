import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// hooks
import { useWindowSize } from "../hooks/useWindowSize"

// components
import CustomLink from "./customLink"

const query = graphql`
  query HeaderImg {
    file(relativePath: { eq: "wood.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Header() {
  const data = useStaticQuery(query)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data

  // getting vh for responsive scroll animation
  let dimensions = useWindowSize()
  let parallaxY = (dimensions.height / 100) * 15
  let parallaxY2 = (dimensions.height / 100) * 5

  // animations
  useEffect(() => {
    // animation on load
    const tl = gsap.timeline()
    tl.to(".header-wrapper", {
      opacity: 1,
      delay: 0.8,
      duration: 1.5,
    }).from(".header-line", {
      css: { width: 0 },
      duration: 0.8,
      ease: "power3.out",
    })

    // scroll animations
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    gsap.to(".header-box", {
      // css: { top: parallaxY },
      y: dimensions.width > 800 ? parallaxY : parallaxY2,
      ease: "none",
      scrollTrigger: {
        trigger: ".header-box",
        start: "top center",
        // markers: true,
        scrub: true,
      },
    })
    gsap.to(".header-img", {
      y: -parallaxY,
      ease: "none",
      scrollTrigger: {
        trigger: ".header-box",
        start: "top center",
        // markers: true,
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="container">
      <div className="header-wrapper">
        <h1>Eco Hardwood Flooring</h1>
        <h2>Walk the sustainable way</h2>
        <div className="header-content-wrapper">
          <div className="header-text">
            <p>
              We combine modern designs with eco-friendly, high-quality
              materials. <b>Woodeco flooring</b> is the perfect choice for
              anyone looking to make the final addition to their home while
              being kind to the Earth’s forests.
            </p>
            <CustomLink path="/about" styleClass="link">
              <button className="cta-btn">Learn More</button>
            </CustomLink>
          </div>
          <div className="header-img-wrapper">
            <div className="header-line"></div>
            <div className="header-box"></div>
            <div className="header-img">
              <Img fluid={fluid} alt="Woodeco Hardwood Flooring" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
