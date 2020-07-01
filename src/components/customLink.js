import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

// animations
import { onEnter, onExit } from "../animations/animations"

function CustomLink({ children, path, styleClass, activeStyleClass }) {
  return (
    <TransitionLink
      to={path}
      className={styleClass}
      activeClassName={activeStyleClass}
      exit={{
        trigger: ({ exit, node }) => onExit(exit, node),
        length: 1,
      }}
      entry={{
        trigger: ({ entry, node }) => onEnter(entry, node),
        delay: 0.6,
      }}
    >
      {children}
    </TransitionLink>
  )
}

export default CustomLink
