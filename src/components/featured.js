import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// animations
import { fadeIntoView } from "../animations/animations"

// components
import CustomLink from "./customLink"

const query = graphql`
  query FeaturedProjects {
    featuredProjects: allContentfulWoodecoProject(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt }
    ) {
      nodes {
        id
        slug
        title
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

function Featured() {
  useEffect(() => {
    fadeIntoView([".featured-wrapper"])
    fadeIntoView([".featured-wrapper p"])

    // parallax ghost text
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    gsap.to(".featured-ghost", {
      css: { top: "15rem" },
      ease: "none",
      scrollTrigger: {
        trigger: ".featured-ghost",
        start: "top 60%",
        scrub: true,
      },
    })
  }, [])

  // query
  const {
    featuredProjects: { nodes },
  } = useStaticQuery(query)

  return (
    <div className="container">
      <div className="featured-wrapper">
        <h2>Featured Projects</h2>
        <div className="featured-ghost">WOOD</div>
        <div className="featured-gallery-wrapper">
          {nodes.map(node => (
            <div key={node.id} className="featured-project">
              <CustomLink path={`/projects/${node.slug}`} styleClass="link">
                <div className="featured-project-img">
                  <Img fluid={node.images[0].fluid} alt={node.title} />
                </div>
                <div className="featured-project-info">
                  <span>{node.title}</span>
                </div>
              </CustomLink>
            </div>
          ))}
        </div>
        <CustomLink path="/projects" styleClass="link link-main featured-link">
          See more projects
        </CustomLink>
        <p>
          We appreciate that much of our work comes from word-of-mouth
          recommendations. Our reputation is the most valuable asset to us and
          we are proud to say, it has been continuously growing. During all
          stages of our time with your unique project, you will be able to rely
          on our extensive team of professionals.
        </p>
      </div>
    </div>
  )
}

export default Featured
