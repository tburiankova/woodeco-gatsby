import React from "react"

// components
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/aboutSection"
import Featured from "../components/featured"
import Services from "../components/servicesSection"
// import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="Homepage of Woodeco company. Learn about what we do."
    />
    <Header />
    <About />
    <Featured />
    <Services />
  </>
)

export default IndexPage
