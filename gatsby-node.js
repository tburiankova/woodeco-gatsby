const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query AllProjects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
        distinct(field: frontmatter___type)
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/projects/${slug}`,
      component: path.resolve(`src/templates/project.js`),
      context: {
        slug,
      },
    })
  })
  result.data.allMarkdownRemark.distinct.forEach(category => {
    createPage({
      path: `/projects/${category}`,
      component: path.resolve(`src/templates/category.js`),
      context: {
        category,
      },
    })
  })
}
