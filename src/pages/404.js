import React from "react"

// components
import SEO from "../components/seo"
import CustomLink from "../components/customLink"

const NotFoundPage = () => (
  <>
    <SEO title="Page Not found" />
    <div className="container">
      <div className="notfound-wrapper" style={{ minHeight: "50vh" }}>
        <h1 style={{ marginBottom: "1.6rem" }}>Page Not Found</h1>
        <p style={{ marginBottom: "3.2rem" }}>
          This page does not seem to exist.
        </p>
        <CustomLink path="/" styleClass="link link-main">
          Go Back To Homepage
        </CustomLink>
      </div>
    </div>
  </>
)

export default NotFoundPage
