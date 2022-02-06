import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedBlog from "../components/full-bleed-blog"
import styled from "styled-components"
import BlogPreview from "../components/blog-preview"

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
        categories={data.wpPost.categories.nodes}
        date={data.wpPost.date}
      />
      <StyledWrapper>
        <StyledDescription>{data.wpPost.blog.description}</StyledDescription>
        {data.wpPost.blog.simpleSection.map(i => (
          <StyledItem key={i.heading ? i.heading : null}>
            <h3>{i.heading ? i.heading : null}</h3>
            {i.text ? <p>{i.text}</p> : null}
            {i.video ? (
              <StyledIframe
                src={i.video}
                title="Video"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                frameBorder={0}
              />
            ) : null}
          </StyledItem>
        ))}
      </StyledWrapper>
      <BlogPreview /* posts={data.allWpPost.edges} */ />
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
                gatsbyImageData(quality: 100)
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
      date(locale: "pl-pl", formatString: "DD MMMM YYYY")
    }
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-self: flex-start;
  width: 70%;
`
const StyledDescription = styled.h4`
  font-family: Montserrat;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 100px;
`
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`
const StyledIframe = styled.iframe`
  width: 100%;
`
