import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styles from "../styles"
import BlogPreview from "../components/blog-preview"

const Blog = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <FullBleed
      hero={
        data.wpPage.ACFblog.sekcjaHero.obrazHero.localFile.childImageSharp
          .gatsbyImageData
      }
      alt={data.wpPage.ACFblog.sekcjaHero.obrazHero.altText}
      title={"Blog"}
      background={styles.color.lightBlue}
    />
    {/* <StyledCategoryWrapper>
      <h1>Kategorie</h1>
      <StyledCategoryItemsWrapper>
        {data.allWpCategory.edges.map(c => (
          <StyledCategoryItem>{c.node.name}</StyledCategoryItem>
        ))}
      </StyledCategoryItemsWrapper>
    </StyledCategoryWrapper> */}
    <BlogPreview noButton />
    <FullBleed
      title={data.wpPage.ACFblog.sekcjaSugestia.tytul}
      hero={
        data.wpPage.ACFblog.sekcjaSugestia.obrazHero.localFile.childImageSharp
          .gatsbyImageData
      }
      alt={data.wpPage.ACFblog.sekcjaSugestia.obrazHero.altText}
      duration={data.wpPage.ACFblog.sekcjaSugestia.dlugosc}
      format={data.wpPage.ACFblog.sekcjaSugestia.format}
      price={data.wpPage.ACFblog.sekcjaSugestia.cena}
      ctaLabel={data.wpPage.ACFblog.sekcjaSugestia.ctaEtykieta}
      ctaUrl={data.wpPage.ACFblog.sekcjaSugestia.ctaUrl}
      background={styles.color.lightOrange}
      multiply
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
    wpPage(databaseId: { eq: 35 }) {
      ACFblog {
        fieldGroupName
        sekcjaHero {
          tytul
          obrazHero {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        sekcjaSugestia {
          cena
          ctaEtykieta
          ctaUrl
          dlugosc
          format
          obrazHero {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          tytul
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
    background-color: ${styles.color.primary};
  }
`
