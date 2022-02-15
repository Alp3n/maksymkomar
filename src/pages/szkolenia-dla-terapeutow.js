import * as React from "react"
import { graphql } from "gatsby"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns4Items from "../components/two-columns-4-items"
import FullBleed from "../components/full-bleed"
import BlogPreview from "../components/blog-preview"

const SzkoleniaDlaTerapeutow = ({ data }) => {
  return (
    <Layout>
      <Seo title={"Seanse terapeutyczne"} />
      <FullBleed
        background={styles.color.grey}
        hero={
          data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHero.obrazHero.localFile
            .childImageSharp.gatsbyImageData
        }
        alt={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHero.obrazHero.altText}
        title={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHero.tytul}
        heading={"strefa terapeuty"}
        noPadding
      />
      <TwoColumns4Items
        items={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.kursy}
        textButtonLabel={
          data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.ctaEtykieta
        }
        textButtonUrl={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.ctaUrl}
        title={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.tytul}
      />
      <FullBleed
        title={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaFullBleed.tytul}
        subtitle={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaFullBleed.tekst}
        ctaLabel={
          data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaFullBleed.ctaEtykieta
        }
        ctaUrl={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaFullBleed.ctaUrl}
        hero={
          data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaFullBleed.obrazHero
            .localFile.childImageSharp.gatsbyImageData
        }
        alt={
          data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaFullBleed.obrazHero
            .altText
        }
        background={styles.color.grey}
        noStyle
        centered
      />
      <BlogPreview />
    </Layout>
  )
}

export default SzkoleniaDlaTerapeutow

export const CoursesQuery = graphql`
  query CoursesQuery {
    wpPage(databaseId: { eq: 23 }) {
      ACFszkoleniaDlaTerapeutow {
        sekcjaFullBleed {
          ctaEtykieta
          ctaUrl
          tekst
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
        sekcjaHero {
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
        sekcjaKursy {
          tytul
          kursy {
            ctaEtykieta
            ctaUrl
            tekst
            tytul
          }
        }
      }
    }
  }
`
