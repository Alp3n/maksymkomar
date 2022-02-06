import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns4Items from "../components/two-columns-4-items"
import FullBleedSection from "../components/full-bleed-section"
import FullBleedOther from "../components/full-bleed-other"
import BlogPreview from "../components/blog-preview"

const SzkoleniaDlaTerapeutow = ({ data }) => {
  return (
    <Layout>
      <Seo title={"Seanse terapeutyczne"} />
      <FullBleedOther
        background={styles.color.white}
        hero={
          data.wpPage.courses.heroSection.image.localFile.childImageSharp
            .gatsbyImageData
        }
        altHero={data.wpPage.courses.heroSection.image.altText}
        title={data.wpPage.courses.heroSection.title}
      />
      <TwoColumns4Items
        items={data.wpPage.courses.coursesSection.items}
        textButtonLabel={data.wpPage.courses.coursesSection.ctaLabel}
        textButtonUrl={data.wpPage.courses.coursesSection.ctaUrl}
        title={data.wpPage.courses.coursesSection.title}
      />
      <FullBleedSection
        title={data.wpPage.courses.fwSection.title}
        text={data.wpPage.courses.fwSection.text}
        ctaLabel={data.wpPage.courses.fwSection.ctaLabel}
        ctaUrl={data.wpPage.courses.fwSection.ctaUrl}
        hero={
          data.wpPage.courses.fwSection.image.localFile.childImageSharp
            .gatsbyImageData
        }
        altHero={data.wpPage.courses.fwSection.image.altText}
        cta
        wide
      />
      <BlogPreview />
    </Layout>
  )
}

export default SzkoleniaDlaTerapeutow

export const CoursesQuery = graphql`
  query CoursesQuery {
    wpPage(databaseId: { eq: 274 }) {
      courses {
        coursesSection {
          ctaLabel
          ctaUrl
          items {
            ctaLabel
            ctaUrl
            text
            title
          }
          title
        }
        fwSection {
          ctaLabel
          ctaUrl
          text
          title
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
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  }
`
