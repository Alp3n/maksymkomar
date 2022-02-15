import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styles from "../styles"
import BlogPreview from "../components/blog-preview"
import AudiotherapyPreview from "../components/audiotherapy-preview"
import Title from "../components/title"
import FullBleedWrapper from "../components/full-bleed-wrapper"
import FullBleedMobile from "../components/full-bleed-mobile"
import { useMediaQuery } from "react-responsive"

const Audioterapie = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })

  return (
    <Layout>
      <Seo title={data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.tytul} />
      {isMobile ? (
        <FullBleedMobile
          hero={
            data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.obrazHero
              ?.localFile?.childImageSharp.gatsbyImageData
          }
          alt={
            data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.obrazHero?.altText
          }
          title={data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.tytul}
          background={styles.color.lightOrange}
          multiply
          heading={
            data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.podkategoria
          }
          noPadding
        />
      ) : (
        <FullBleed
          hero={
            data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.obrazhero
              ?.localFile?.childImageSharp.gatsbyImageData
          }
          alt={
            data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.obrazhero?.altText
          }
          title={data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.tytul}
          background={styles.color.lightOrange}
          multiply
          heading={
            data?.audioterapie?.ACFaudioterapie?.sekcjaHero?.podkategoria
          }
          noPadding
        />
      )}
      <AudiotherapyPreview grid />
      <FullBleedWrapper noMargin>
        <Title title={"Może Cię także zainteresować"} noMargin />
      </FullBleedWrapper>
      {isMobile ? (
        <FullBleedMobile
          title={data.blog.ACFblog.sekcjaSugestia.tytul}
          hero={
            data.blog.ACFblog.sekcjaSugestia.obrazHero.localFile.childImageSharp
              .gatsbyImageData
          }
          alt={data.blog.ACFblog.sekcjaSugestia.obrazHero.altText}
          duration={data.blog.ACFblog.sekcjaSugestia.dlugosc}
          format={data.blog.ACFblog.sekcjaSugestia.format}
          price={data.blog.ACFblog.sekcjaSugestia.cena}
          ctaLabel={data.blog.ACFblog.sekcjaSugestia.ctaEtykieta}
          ctaUrl={data.blog.ACFblog.sekcjaSugestia.ctaUrl}
          background={styles.color.lightOrange}
          multiply
        />
      ) : (
        <FullBleed
          title={data.blog.ACFblog.sekcjaSugestia.tytul}
          hero={
            data.blog.ACFblog.sekcjaSugestia.obrazHero.localFile.childImageSharp
              .gatsbyImageData
          }
          alt={data.blog.ACFblog.sekcjaSugestia.obrazHero.altText}
          duration={data.blog.ACFblog.sekcjaSugestia.dlugosc}
          format={data.blog.ACFblog.sekcjaSugestia.format}
          price={data.blog.ACFblog.sekcjaSugestia.cena}
          ctaLabel={data.blog.ACFblog.sekcjaSugestia.ctaEtykieta}
          ctaUrl={data.blog.ACFblog.sekcjaSugestia.ctaUrl}
          background={styles.color.lightOrange}
          multiply
        />
      )}

      <BlogPreview />
    </Layout>
  )
}

export const AudioterapieQuery = graphql`
  query AudioterapieQuery {
    audioterapie: wpPage(databaseId: { eq: 418 }) {
      ACFaudioterapie {
        sekcjaHero {
          obrazHero {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          podkategoria
          tytul
        }
      }
    }
    blog: wpPage(databaseId: { eq: 35 }) {
      ACFblog {
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

export default Audioterapie
