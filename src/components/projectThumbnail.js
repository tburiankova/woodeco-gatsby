import React from "react"
import Img from "gatsby-image"

// components
import CustomLink from "./customLink"

function ProjectThumbnail({ path, imageSrc, title }) {
  return (
    <>
      <div className="featured-project">
        <CustomLink path={`/${path}`} styleClass="link">
          <div className="featured-project-img">
            <Img fluid={imageSrc} alt={title} />
          </div>
          <div className="featured-project-info">
            <span>{title}</span>
          </div>
        </CustomLink>
      </div>
    </>
  )
}

export default ProjectThumbnail
