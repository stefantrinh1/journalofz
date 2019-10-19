/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
        `
      {
        allContentfulBlogPosts {
          edges {
            node {
              slug
              title
              categories
              datePublished (fromNow: true)
              blogMainImage {
                fluid (maxWidth:768) {
                  srcSet
                }
            
              }
              # description
              blogContent {
                childMarkdownRemark {
                  html
                  timeToRead
                }
              }
              updatedAt(fromNow: true)
            }
          }
          
        }
      }      
        `
    )

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create pages for each markdown file.
    const blogTemplate = path.resolve(`src/components/blog/BlogTemplate.js`)
    result.data.allContentfulBlogPosts.edges.forEach(({ node }) => {
        
        const path = `blog/${node.slug}`
        createPage({
            path,
            component: blogTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
                path,
                node
            },
        })
    })
}