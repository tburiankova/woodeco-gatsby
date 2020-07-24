import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

// components
import CustomLink from "../components/customLink"
import SEO from "../components/seo"

function Project({ data }) {
  // query
  const { project } = data

  return (
    <>
      <SEO
        title={project.title}
        description={`Page for the ${project.title} project.`}
      />
      <div className="container">
        <div className="project-template-wrapper">
          <h1>{project.title}</h1>
          <div className="project-image-gallery">
            <Img
              fluid={project.images[0].fluid}
              alt={project.title}
              objectPosition="50% 80%"
            />
            <Img
              fluid={project.images[1].fluid}
              alt={project.title}
              objectPosition="50% 80%"
            />
            <Img
              fluid={project.images[2].fluid}
              alt={project.title}
              objectPosition="50% 90%"
            />
          </div>{" "}
          <div
            dangerouslySetInnerHTML={{
              __html: project.description.childMarkdownRemark.html,
            }}
          />
          <br />
          <br />
          <br />
          <CustomLink path="/projects" styleClass="link link-main">
            To All Projects
          </CustomLink>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query SingleProject($slug: String) {
    project: contentfulWoodecoProject(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Project
