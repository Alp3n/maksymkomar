import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedOther from "../components/full-bleed-other"
import styles from "../styles"
import FullBleedSuggestion from "../components/full-bleed-suggestion"
import BlogPreview from "../components/blog-preview"

const Blog = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <FullBleedOther
      hero={
        data.wpPage.blogPage.heroImage.localFile.childImageSharp.gatsbyImageData
      }
      altHero={data.wpPage.blogPage.heroImage.altText}
      title={"Blog"}
      plain
      noHeading
      background={styles.color.lightBlue}
      // blend
    />
    <StyledCategoryWrapper>
      <h1>Kategorie</h1>
      <StyledCategoryItemsWrapper>
        {data.allWpCategory.edges.map(c => (
          <StyledCategoryItem>{c.node.name}</StyledCategoryItem>
        ))}
      </StyledCategoryItemsWrapper>
    </StyledCategoryWrapper>
    <BlogPreview />
    <FullBleedSuggestion
      title={data.wpPage.blogPage.suggestionSection.title}
      image={
        data.wpPage.blogPage.suggestionSection.image.localFile.childImageSharp
          .gatsbyImageData
      }
      alt={data.wpPage.blogPage.suggestionSection.image.altText}
      duration={data.wpPage.blogPage.suggestionSection.duration}
      format={data.wpPage.blogPage.suggestionSection.format}
      price={data.wpPage.blogPage.suggestionSection.price}
      ctaLabel={data.wpPage.blogPage.suggestionSection.ctaLabel}
      ctaUrl={data.wpPage.blogPage.suggestionSection.ctaUrl}
    />
  </Layout>
)

export default Blog

export const BlogItems = graphql`
  query Blog {
    allWpCategory {
      edges {
        node {
          id
          name
          slug
          posts {
            nodes {
              id
              slug
              uri
              title
            }
          }
        }
      }
    }
    wpPage(databaseId: { eq: 522 }) {
      blogPage {
        displayCategories {
          firstCategory
          fourthCategory
          secondCategory
          thirdCategory
        }
        suggestionSection {
          ctaLabel
          ctaUrl
          duration
          price
          title
          format
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        heroImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
`

const StyledCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`
const StyledCategoryItemsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  /* grid-auto-rows: 100px; */
  gap: 10px;
`
const StyledCategoryItem = styled.a`
  width: fit-content;
  text-transform: lowercase;
  border-bottom: 1px solid ${styles.color.primary};
  padding: 20px 10px;

  :hover {
    background-color: ${styles.color.lightBlue};
    color: ${styles.color.white};
    cursor: pointer;
  }

  :active {
    background-color: ${styles.color.lightOrange};
  }
`
