import React from "react"
import { graphql } from "gatsby"
import ProjectThumbnail from "../components/projectThumbnail"

// components
import CustomLink from "../components/customLink"
import SEO from "../components/seo"

function Projects({ data }) {
  // query
  const {
    projects: { edges },
  } = data

  return (
    <>
      <SEO
        title="Projects"
        description="Projects we worked on in the past - both residential and commercial."
      />
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="featured-wrapper" style={{ marginTop: "8rem" }}>
          <h1>Projects We Are Especially Proud Of</h1>
          <CustomLink path="/projects/commercial" styleClass="link filter-btn">
            Commercial
          </CustomLink>
          <CustomLink path="/projects/residential" styleClass="link filter-btn">
            Residential
          </CustomLink>
          <div className="featured-ghost">WOOD</div>
          <div className="featured-gallery-wrapper">
            {edges.map(({ node }) => (
              <ProjectThumbnail
                key={node.id}
                path={`/projects/${node.slug}`}
                imageSrc={node.images[0].fluid}
                title={node.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  {
    projects: allContentfulWoodecoProject(sort: { fields: createdAt }) {
      edges {
        node {
          id
          slug
          type
          title
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Projects
