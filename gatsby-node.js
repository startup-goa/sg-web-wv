/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllSpaces {
      allWordpressWpSpaces {
        nodes {
          id
          slug
          path
        }
      }
    }
  `)
  const spacesTemplate = path.resolve(`src/templates/spaces-page.js`)
  queryResults.data.allWordpressWpSpaces.nodes.forEach(node => {
    createPage({
      path: `${String(node.path)}`,
      component: spacesTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
