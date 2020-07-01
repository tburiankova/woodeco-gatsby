import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

// components
import CustomLink from "../components/customLink"
import SEO from "../components/seo"

function Project({ data }) {
  const { markdownRemark } = data
  return (
    <>
      <SEO
        title={markdownRemark.frontmatter.title}
        description={`Page for the ${markdownRemark.frontmatter.title} project.`}
      />
      <div className="container">
        <div className="project-template-wrapper">
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div className="project-image-gallery">
            <Img
              fluid={markdownRemark.frontmatter.image1.childImageSharp.fluid}
              alt={markdownRemark.frontmatter.title}
              objectPosition="50% 80%"
            />
            <Img
              fluid={markdownRemark.frontmatter.image2.childImageSharp.fluid}
              alt={markdownRemark.frontmatter.title}
              objectPosition="50% 80%"
            />
            <Img
              fluid={markdownRemark.frontmatter.image3.childImageSharp.fluid}
              alt={markdownRemark.frontmatter.title}
              objectPosition="50% 90%"
            />
          </div>{" "}
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
  query SingleProject($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image1 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

export default Project
