import React from "react"

// components
import CustomLink from "../components/customLink"
import SEO from "../components/seo"

function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="How much does a good wooden floor cost? Get in touch with us and find out what options we have for you."
      />
      <div className="container">
        <div className="pricing-wrapper">
          <h1>Pricing tailored to your needs</h1>
          <p>
            After years of experience working on both commercial and residential
            projects, we are convinced that each and every client is unique.
            Therefore, we tailor our packages to your specific needs. Book a
            free meeting to discover your options.
          </p>
          <CustomLink path="/contact" styleClass="link link-main">
            Contact Us Today
          </CustomLink>
        </div>
      </div>
    </>
  )
}

export default Pricing
