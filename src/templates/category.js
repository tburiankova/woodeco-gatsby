import React from "react"
import { graphql } from "gatsby"
import ProjectThumbnail from "../components/projectThumbnail"

// components
import CustomLink from "../components/customLink"
import SEO from "../components/seo"

function Category({ data, pageContext }) {
  const {
    allMarkdownRemark: { nodes },
  } = data

  // capitalize category name
  const categoryName =
    pageContext.category.charAt(0).toUpperCase() + pageContext.category.slice(1)

  return (
    <>
      <SEO
        title={categoryName}
        description={`Some of our most interesting ${pageContext.category} projects from the past years.`}
      />
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="featured-wrapper" style={{ marginTop: "8rem" }}>
          <h1>{categoryName}</h1>
          <div className="featured-ghost">
            {pageContext.category === "commercial" ? "ECO" : "HOME"}
          </div>
          <CustomLink path="/projects/" styleClass="link filter-btn">
            All
          </CustomLink>
          {pageContext.category === "commercial" && (
            <CustomLink
              path="/projects/residential"
              styleClass="link filter-btn"
            >
              Residential
            </CustomLink>
          )}
          {pageContext.category === "residential" && (
            <CustomLink
              path="/projects/commercial"
              styleClass="link filter-btn"
            >
              Commercial
            </CustomLink>
          )}
          <div className="featured-gallery-wrapper">
            {nodes.map(node => (
              <ProjectThumbnail
                key={node.id}
                path={`/projects/${node.frontmatter.slug}`}
                imageSrc={node.frontmatter.image1.childImageSharp.fluid}
                title={node.frontmatter.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query FilterType($category: String!) {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: $category } } }) {
      nodes {
        frontmatter {
          title
          slug
          image1 {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        id
      }
    }
  }
`

export default Category
