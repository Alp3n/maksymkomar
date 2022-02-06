import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedOther from "../components/full-bleed-other"
import styles from "../styles"
import BlogPreview from "../components/blog-preview"
import DropDown from "../components/drop-down"

const HowCanIHelp = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <FullBleedOther
        hero={
          data.wpPage.wJakichPrzypadkachMogePomoc.heroSection.image.localFile
            .childImageSharp.gatsbyImageData
        }
        altHero={
          data.wpPage.wJakichPrzypadkachMogePomoc.heroSection.image.altText
        }
        title={data.wpPage.wJakichPrzypadkachMogePomoc.heroSection.title}
        background={styles.color.lightOrange}
        blend
        client
      />
      <StyledWrapper>
        {data.wpPage.wJakichPrzypadkachMogePomoc.advancedSection.map(c => (
          <DropDown categories={c} />
        ))}
      </StyledWrapper>

      <BlogPreview />
    </Layout>
  )
}

export default HowCanIHelp

export const HowCanIHelpQuery = graphql`
  query HowCanIHelp {
    wpPage(databaseId: { eq: 271 }) {
      id
      wJakichPrzypadkachMogePomoc {
        advancedSection {
          category {
            title
            definitions {
              definition
              term
            }
          }
        }
        heroSection {
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          title
        }
      }
    }
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  
  div:last-child() {
    margin-bottom: 150px;
  }
`
