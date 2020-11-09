/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pagesQuery = await graphql(`
    query AllSpaces {
      allWordpressWpSpaces {
        nodes {
          id
          slug
        }
      }
      allWordpressWpEvents {
        nodes {
          id
          slug
        }
      }
      allWordpressWpPeople {
        nodes {
          id
          slug
        }
      }
    }
  `)
  const spacesTemplate = path.resolve(`src/templates/spaces-page.js`)
  pagesQuery.data.allWordpressWpSpaces.nodes.forEach(node => {
    createPage({
      path: `/spaces/${String(node.slug)}`,
      component: spacesTemplate,
      context: {
        id: node.id,
      },
    })
  })


    const eventsTemplate = path.resolve(`src/templates/events-page.js`)
    pagesQuery.data.allWordpressWpEvents.nodes.forEach(node => {
      createPage({
        path: `/events/${String(node.slug)}`,
        component: eventsTemplate,
        context: {
          id: node.id,
        },
      })
    })
}
