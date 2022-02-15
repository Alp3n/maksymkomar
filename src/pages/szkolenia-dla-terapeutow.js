import * as React from "react"
import { graphql } from "gatsby"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns4Items from "../components/two-columns-4-items"
import FullBleed from "../components/full-bleed"
import BlogPreview from "../components/blog-preview"
import FullBleedMobile from "../components/full-bleed-mobile"
import { useMediaQuery } from "react-responsive"

const SzkoleniaDlaTerapeutow = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })

  return (
    <Layout>
      <Seo title={"Seanse terapeutyczne"} />
      {isMobile ? (
        <FullBleedMobile
          background={styles.color.grey}
          hero={
            data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHer0.obrazHero.localFile
              .childImageSharp.gatsbyImageData
          }
          alt={
            data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHer0.obrazHero.altText
          }
          title={"Szkolenia<br/>dla terapeutów"}
          // title={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHer0.tytul}
          heading={"strefa terapeuty"}
          objectPosition={"70% 50%"}
        />
      ) : (
        <FullBleed
          background={styles.color.grey}
          hero={
            data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHer0.obrazHero.localFile
              .childImageSharp.gatsbyImageData
          }
          alt={
            data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHer0.obrazHero.altText
          }
          title={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaHer0.tytul}
          heading={"strefa terapeuty"}
          noPadding
        />
      )}
      <TwoColumns4Items
        items={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.kursy}
        textButtonLabel={
          data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.ctaEtykieta
        }
        textButtonUrl={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.ctaUrl}
        title={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaKursy.tytul}
      />
      {isMobile ? (
        <FullBleedMobile
          title={
            "PROFESSIONAL HYPNOSIS<br/>TRAINING INSTITUTE<br/>of Maksym Komar"
          }
          // title={data.wpPage.ACFszkoleniaDlaTerapeutow.sekcjaFullBleed.tytul}
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
          objectPosition={"90%"}
          smallTitle
        />
      ) : (
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
      )}
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
        sekcjaHer0 {
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
