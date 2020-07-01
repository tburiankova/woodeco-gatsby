import React from "react"
import { graphql } from "gatsby"
import ProjectThumbnail from "../components/projectThumbnail"

// components
import CustomLink from "../components/customLink"
import SEO from "../components/seo"

function Projects({ data }) {
  const {
    allMarkdownRemark: { nodes },
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
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          image1 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          title
        }
        id
      }
    }
  }
`

export default Projects
