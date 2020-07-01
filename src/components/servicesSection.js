import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// animations
import { fadeIntoView } from "../animations/animations"

// components
import CustomLink from "./customLink"

const query = graphql`
  query AboutSectionImage {
    file(relativePath: { eq: "project4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function ServicesSection() {
  useEffect(() => {
    fadeIntoView([".services-section-wrapper"])
  }, [])

  const data = useStaticQuery(query)

  return (
    <div className="container">
      <div className="services-section-wrapper">
        <div className="services-section-content">
          <div className="services-section-inner">
            <h2>What We Can Help You With</h2>
            <ul>
              <li>
                <span>01 </span>interior design and functionality consultations
              </li>
              <li>
                <span>02 </span>custom-made floors and other wood products
              </li>
              <li>
                <span>03 </span> professional installation
              </li>
              <li>
                <span>04 </span> maintenance and cleaning services
              </li>
            </ul>
          </div>
          <CustomLink path="/contact" styleClass="link cta-btn">
            Secure a meeting
          </CustomLink>
        </div>
        <div className="services-section-img">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="What we can help you with"
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
