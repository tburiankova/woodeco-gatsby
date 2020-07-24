const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProjects {
      allContentfulWoodecoProject {
        nodes {
          slug
        }
        distinct(field: type)
      }
    }
  `)

  result.data.allContentfulWoodecoProject.nodes.forEach(({ slug }) => {
    createPage({
      path: `/projects/${slug}`,
      component: path.resolve(`src/templates/project.js`),
      context: {
        slug,
      },
    })
  })
  result.data.allContentfulWoodecoProject.distinct.forEach(category => {
    createPage({
      path: `/projects/${category}`,
      component: path.resolve(`src/templates/category.js`),
      context: {
        category,
      },
    })
  })
}
