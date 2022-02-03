import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedMain from "../components/full-bleed-main"
import TwoColumns from "../components/two-columns"
import FullBleedSection from "../components/full-bleed-section"
import Opinions from "../components/opinions"
import BlogPreview from "../components/blog-preview"
import Newsletter from "../components/newsletter"
import Faq from "../components/faq"
import qa from "../data/faq"

const IndexPage = ({ data }) => {
  console.log(data)
  const myData = data.wpPage.home
  const myPosts = data.allWpPost.edges
  return (
    <Layout>
      <Seo title="Home" />
      <FullBleedMain
        hero={
          myData.heroSection.image.localFile.childImageSharp.gatsbyImageData
        }
        alt={myData.heroSection.image.altText}
        logo={
          myData.heroSection.signature.localFile.childImageSharp.gatsbyImageData
        }
        altLogo={myData.heroSection.signature.altText}
        title={myData.heroSection.title}
        background={styles.color.primary}
      />
      <TwoColumns
        title={myData.col2Section.title}
        textLeft={myData.col2Section.textLeft}
        textRight={myData.col2Section.textRight}
        textButtonLabel={myData.col2Section.ctaLabel}
        textButtonUrl={myData.col2Section.ctaUrl}
        cta
      />
      <FullBleedSection
        hero={myData.fwSection.image.localFile.childImageSharp.gatsbyImageData}
        altHero={myData.fwSection.image.altText}
        background={styles.color.grey}
        cta
        ctaLabel={myData.fwSection.ctaLabel}
        ctaUrl={myData.fwSection.ctaUrl}
        title={myData.fwSection.title}
        text={myData.fwSection.text}
      />
      <TwoColumns
        title={myData.col2Section2.title}
        textLeft={myData.col2Section2.textLeft}
        textRight={myData.col2Section2.textRight}
        textButtonLabel={myData.col2Section2.ctaLabel}
        textButtonUrl={myData.col2Section2.ctaUrl}
        cta
      />
      <FullBleedSection
        hero={myData.fwSection2.image.localFile.childImageSharp.gatsbyImageData}
        altHero={myData.fwSection2.image.altText}
        background={styles.color.grey}
        cta
        ctaLabel={myData.fwSection2.ctaLabel}
        ctaUrl={myData.fwSection2.ctaUrl}
        title={myData.fwSection2.title}
        text={myData.fwSection2.text}
      />
      <Opinions opinions={myData.opinionsSection.opinions} />
      <FullBleedSection
        hero={myData.fwSection3.image.localFile.childImageSharp.gatsbyImageData}
        altHero={myData.fwSection3.image.altText}
        background={styles.color.grey}
        cta
        ctaLabel={myData.fwSection3.ctaLabel}
        ctaUrl={myData.fwSection3.ctaUrl}
        title={myData.fwSection3.title}
        text={myData.fwSection3.text}
      />
      <BlogPreview posts={myPosts} />
      <Newsletter />
      <Faq qa={qa} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    wpPage(databaseId: { eq: 46 }) {
      id
      home {
        heroSection {
          fieldGroupName
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
          signature {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
        }
        col2Section {
          ctaLabel
          ctaUrl
          fieldGroupName
          textLeft
          textRight
          title
        }
        fwSection {
          ctaLabel
          ctaUrl
          fieldGroupName
          text
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
        }
        col2Section2 {
          ctaLabel
          ctaUrl
          fieldGroupName
          textLeft
          textRight
          title
        }
        fwSection2 {
          ctaLabel
          ctaUrl
          fieldGroupName
          text
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
        }
        opinionsSection {
          opinions {
            fieldGroupName
            name
            opinion
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              altText
            }
          }
          fieldGroupName
        }
        fwSection3 {
          ctaLabel
          ctaUrl
          fieldGroupName
          text
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
        }
        newsletterSection {
          ctaLabel
          fieldGroupName
          title
        }
        faqSection {
          fieldGroupName
          qa {
            answer
            fieldGroupName
            question
          }
        }
      }
    }
    allWpPost {
      edges {
        node {
          id
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              altText
            }
          }
          title
          slug
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`

export default IndexPage

/* STYLED COMPONENTS */

const StyledDesc = styled.p`
  margin-bottom: 2vw;
`
