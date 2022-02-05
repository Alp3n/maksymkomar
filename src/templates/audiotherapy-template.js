import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedOther from "../components/full-bleed-other"
import styles from "../styles"
import styled from "styled-components"
import BlogPreview from "../components/blog-preview"
import ProductSection from "../components/product-section"
import FullBleedSuggestion from "../components/full-bleed-suggestion"
import TwoColumns from "../components/two-columns"

const AudiotherapyTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.wpPost.title} />
      <FullBleedOther
        hero={
          data.wpPost.audioterapia.heroSection.image.localFile.childImageSharp
            .gatsbyImageData
        }
        altHero={data.wpPost.audioterapia.heroSection.image.altText}
        title={data.wpPost.audioterapia.heroSection.title}
        subtitle={data.wpPost.audioterapia.heroSection.subtitle}
        orange
        blend
      />
      <TwoColumns
        title={data.wpPost.audioterapia.col2Section.title}
        textLeft={data.wpPost.audioterapia.col2Section.textLeft}
        textRight={data.wpPost.audioterapia.col2Section.textRight}
      />
      <StyledSimpleSection>
        <StyledSimpleSectionInner>
          <StyledSimpleSectionTitle>
            {data.wpPost.audioterapia.simpleSection.title}
          </StyledSimpleSectionTitle>
          <p
            dangerouslySetInnerHTML={{
              __html: data.wpPost.audioterapia.simpleSection.text,
            }}
          />
        </StyledSimpleSectionInner>
      </StyledSimpleSection>
      <ProductSection
        title={data.wpPost.audioterapia.productSection.title}
        textLeft={data.wpPost.audioterapia.productSection.textLeft}
        textRight={data.wpPost.audioterapia.productSection.textRight}
        ctaLabel={data.wpPost.audioterapia.productSection.ctaLabel}
      />
      <FullBleedSuggestion
        title={data.wpPost.audioterapia.suggestionSection.title}
        image={
          data.wpPost.audioterapia.suggestionSection.image.localFile
            .childImageSharp.gatsbyImageData
        }
        alt={data.wpPost.audioterapia.suggestionSection.image.altText}
        duration={data.wpPost.audioterapia.suggestionSection.duration}
        format={data.wpPost.audioterapia.suggestionSection.format}
        price={data.wpPost.audioterapia.suggestionSection.price}
        ctaLabel={data.wpPost.audioterapia.suggestionSection.ctaLabel}
        ctaUrl={data.wpPost.audioterapia.suggestionSection.ctaUrl}
      />
      <BlogPreview />
    </Layout>
  )
}

export default AudiotherapyTemplate

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      audioterapia {
        col2Section {
          ctaLabel
          ctaUrl
          textLeft
          textRight
          title
        }
        heroSection {
          subtitle
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
          title
        }
        simpleSection {
          text
          title
        }
        suggestionSection {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
          ctaLabel
          ctaUrl
          duration
          format
          price
          title
        }
        productSection {
          ctaLabel
          ctaUrl
          title
          textLeft {
            duration
            format
            price
            availability
          }
          textRight
        }
      }
    }
  }
`

const StyledSimpleSection = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  background-color: ${styles.color.grey};
  padding: 100px 0;
  margin-bottom: 100px;
`
const StyledSimpleSectionInner = styled.div`
  > * {
    grid-column: 2;
  }
  display: grid;
  grid-template-columns: 1fr min(1450px, 100%) 1fr;
  /* justify-items: center; */
`

const StyledSimpleSectionTitle = styled.h1`
  width: 60%;
`
