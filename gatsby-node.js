const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogTemplate = path.resolve("./src/templates/blog-post-template.js")
  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)
  const BlogPost = result.data.allWpPost.edges
  BlogPost.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: BlogTemplate,
      context: {
        id: post.node.id,
      },
      defer: true,
    })
  })
}
