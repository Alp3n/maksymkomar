import * as React from "react"
import { Link, graphql } from "gatsby"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedSection from "../components/full-bleed-section"
import FullBleedBlog from "../components/full-bleed-bloc"

const BlogPostTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title={data.wpPost.title} />
      <FullBleedBlog
        hero={
          data.wpPost.blog.heroSection.image.localFile.childImageSharp
            .gatsbyImageData
        }
        altHero={data.wpPost.blog.heroSection.image.altText}
        title={data.wpPost.blog.heroSection.title}
      />
      <h1>{data.wpPost.title}</h1>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      title
      categories {
        nodes {
          name
        }
      }
      blog {
        description
        simpleSection {
          video
          text
          heading
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        heroSection {
          title
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      date(locale: "pl-pl", formatString: "DD-MMMM-YYYY")
    }
  }
`
