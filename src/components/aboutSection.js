import React, { useEffect } from "react"
import { Link } from "gatsby"

// animations
import { fadeIntoView } from "../animations/animations"

// components
import CustomLink from "./customLink"

function AboutSection() {
  useEffect(() => {
    fadeIntoView([".about-section-wrapper"])
  }, [])

  return (
    <div className="container">
      <div className="about-section-wrapper">
        <div className="about-section-col">
          <h3>A little more about us</h3>
          <p>
            Woodeco team works on <b>projects of all sizes</b>, from single
            rooms to penthouse-like properties. We operate mainly in{" "}
            <b>Stedham</b> area, but we have worked on number of projects all
            over the UK, as well as Europe.
          </p>
        </div>
        <div className="about-section-col">
          <h3>Ecology</h3>
          <p>
            With all the increased pressure on the world’s natural resources, we
            should all play our parts where we can. Woodeco is proud to be
            sourcing materials from top manufacturers that follow strict
            environmental rules.
          </p>
        </div>
      </div>
      <div className="about-section-link">
        <CustomLink path="/about" styleClass="link link-main">
          Read more about our mission
        </CustomLink>
      </div>
    </div>
  )
}

export default AboutSection
