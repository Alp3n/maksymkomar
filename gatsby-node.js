const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogTemplate = path.resolve("./src/templates/blog-post-template.js")
  const AudioTherapyTemplate = path.resolve(
    "./src/templates/audiotherapy-template.js"
  )
  const result = await graphql(`
    {
      blog: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { databaseId: { ne: 115 } } } }
        }
      ) {
        edges {
          node {
            slug
            id
          }
        }
      }
      audiotherapy: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { databaseId: { eq: 115 } } } }
        }
      ) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)
  const BlogPost = result.data.blog.edges
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
  const Audiotherapy = result.data.audiotherapy.edges
  Audiotherapy.forEach(post => {
    createPage({
      path: `/audioterapie/${post.node.slug}`,
      component: AudioTherapyTemplate,
      context: {
        id: post.node.id,
      },
      defer: true,
    })
  })
}
