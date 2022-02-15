import * as React from "react"
import { graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import TwoColumns from "../components/two-columns"
import Opinions from "../components/opinions"
import BlogPreview from "../components/blog-preview"
import Newsletter from "../components/newsletter"
import Faq from "../components/faq"
import FullBleedMobile from "../components/full-bleed-mobile"

const IndexPage = ({ data }) => {
  console.log(data)
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })
  return (
    <Layout>
      <Seo title="Home" />
      {isMobile ? (
        <FullBleedMobile
          hero={
            data.wpPage?.ACFhome?.sekcjaHero?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage?.ACFhome?.sekcjaHero?.obrazHero?.altText}
          logo={
            data.wpPage.ACFhome?.sekcjaHero?.obrazPodpis?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          logoTop
          altLogo={data.wpPage.ACFhome?.sekcjaHero?.obrazPodpis?.altText}
          title={data.wpPage.ACFhome.sekcjaHero.tytul}
          background={styles.color.primary}
          multiply
          $isMain={true}
          noMargin
          objectPosition={"75% 0"}
        />
      ) : (
        <FullBleed
          hero={
            data.wpPage.ACFhome?.sekcjaHero?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage.ACFhome?.sekcjaHero?.obrazHero?.altText}
          logo={
            data.wpPage.ACFhome?.sekcjaHero?.obrazPodpis?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          logoTop
          altLogo={data.wpPage.ACFhome?.sekcjaHero?.obrazPodpis?.altText}
          title={data.wpPage.ACFhome.sekcjaHero.tytul}
          background={styles.color.primary}
          ctaLabel={data.wpPage.ACFhome.sekcjaHero.ctaEtykieta}
          ctaUrl={data.wpPage.ACFhome.sekcjaHero.ctaUrl}
          multiply
          $isMain={true}
          noPadding
        />
      )}

      <TwoColumns
        title={data.wpPage.ACFhome.sekcja2Kolumny.tytul}
        textLeft={data.wpPage.ACFhome.sekcja2Kolumny.tekstLewo}
        textRight={data.wpPage.ACFhome.sekcja2Kolumny.tekstPrawo}
        textButtonLabel={data.wpPage.ACFhome.sekcja2Kolumny.ctaEtykieta}
        textButtonUrl={data.wpPage.ACFhome.sekcja2Kolumny.ctaUrl}
        cta
      />
      {isMobile ? (
        <FullBleedMobile
          hero={
            data.wpPage.ACFhome.sekcjaFullBleed?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage.ACFhome?.sekcjaFullBleed?.obrazHero?.altText}
          background={styles.color.grey}
          cta
          ctaLabel={data.wpPage.ACFhome.sekcjaFullBleed.ctaEtykieta}
          ctaUrl={data.wpPage.ACFhome.sekcjaFullBleed.ctaUrl}
          title={`Seanse<br />terapeutyczne`}
          // title={data.wpPage.ACFhome.sekcjaFullBleed.tytul}
          subtitle={data.wpPage.ACFhome.sekcjaFullBleed.tekst}
          noStyle
          noMargin
        />
      ) : (
        <FullBleed
          hero={
            data.wpPage.ACFhome.sekcjaFullBleed?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage.ACFhome?.sekcjaFullBleed?.obrazHero?.altText}
          background={styles.color.grey}
          cta
          ctaLabel={data.wpPage.ACFhome.sekcjaFullBleed.ctaEtykieta}
          ctaUrl={data.wpPage.ACFhome.sekcjaFullBleed.ctaUrl}
          title={data.wpPage.ACFhome.sekcjaFullBleed.tytul}
          subtitle={data.wpPage.ACFhome.sekcjaFullBleed.tekst}
          noStyle
        />
      )}

      <TwoColumns
        title={data.wpPage.ACFhome.sekcja2Kolumny2.tytul}
        textLeft={data.wpPage.ACFhome.sekcja2Kolumny2.tekstLewo}
        textRight={data.wpPage.ACFhome.sekcja2Kolumny2.tekstPrawo}
        textButtonLabel={data.wpPage.ACFhome.sekcja2Kolumny2.ctaEtykieta}
        textButtonUrl={data.wpPage.ACFhome.sekcja2Kolumny2.ctaUrl}
        cta
      />
      {isMobile ? (
        <FullBleedMobile
          hero={
            data.wpPage.ACFhome?.sekcjaFullBleed2?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage.ACFhome?.sekcjaFullBleed2?.obrazHero?.altText}
          background={styles.color.grey}
          cta
          ctaLabel={data.wpPage.ACFhome.sekcjaFullBleed2.ctaEtykieta}
          ctaUrl={data.wpPage.ACFhome.sekcjaFullBleed2.ctaUrl}
          // title={data.wpPage.ACFhome.sekcjaFullBleed2.tytul}
          title={`W jakich<br/>przypadkach<br/>mogę Ci pomóc`}
          subtitle={data.wpPage.ACFhome.sekcjaFullBleed2.tekst}
          noStyle
          objectPosition={"60% 0"}
          noMargin
        />
      ) : (
        <FullBleed
          hero={
            data.wpPage.ACFhome?.sekcjaFullBleed2?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage.ACFhome?.sekcjaFullBleed2?.obrazHero?.altText}
          background={styles.color.grey}
          cta
          ctaLabel={data.wpPage.ACFhome.sekcjaFullBleed2.ctaEtykieta}
          ctaUrl={data.wpPage.ACFhome.sekcjaFullBleed2.ctaUrl}
          title={data.wpPage.ACFhome.sekcjaFullBleed2.tytul}
          subtitle={data.wpPage.ACFhome.sekcjaFullBleed2.tekst}
          noStyle
        />
      )}

      <Opinions opinions={data.wpPage.ACFhome.sekcjaOpinie} />
      {isMobile ? (
        <FullBleedMobile
          hero={
            data.wpPage.ACFhome?.sekcjaFullBleed3?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage.ACFhome?.sekcjaFullBleed3?.obrazHero?.altText}
          background={styles.color.grey}
          cta
          ctaLabel={data.wpPage.ACFhome.sekcjaFullBleed3.ctaEtykieta}
          ctaUrl={data.wpPage.ACFhome.sekcjaFullBleed3.ctaUrl}
          title={"Szkolenia<br/>dla terapeutów"} // title={data.wpPage.ACFhome.sekcjaFullBleed3.tytul}
          subtitle={data.wpPage.ACFhome.sekcjaFullBleed3.tekst}
          noStyle
        />
      ) : (
        <FullBleed
          hero={
            data.wpPage.ACFhome?.sekcjaFullBleed3?.obrazHero?.localFile
              ?.childImageSharp?.gatsbyImageData
          }
          alt={data.wpPage.ACFhome?.sekcjaFullBleed3?.obrazHero?.altText}
          background={styles.color.grey}
          cta
          ctaLabel={data.wpPage.ACFhome.sekcjaFullBleed3.ctaEtykieta}
          ctaUrl={data.wpPage.ACFhome.sekcjaFullBleed3.ctaUrl}
          title={data.wpPage.ACFhome.sekcjaFullBleed3.tytul}
          subtitle={data.wpPage.ACFhome.sekcjaFullBleed3.tekst}
          noStyle
        />
      )}

      <BlogPreview />
      <Newsletter />
      <Faq qa={data.wpPage.ACFhome.sekcjaFaq} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    wpPage(databaseId: { eq: 12 }) {
      id
      ACFhome {
        sekcjaHero {
          ctaEtykieta
          ctaUrl
          obrazHero {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPodpis {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          tytul
        }
        sekcjaOpinie {
          imie
          obrazPortret {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          opinia
        }
        sekcjaFullBleed3 {
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
        sekcjaFullBleed2 {
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
        sekcjaFaq {
          odpowiedz
          pytanie
        }
        sekcja2Kolumny2 {
          ctaEtykieta
          ctaUrl
          tekstLewo
          tekstPrawo
          tytul
        }
        sekcja2Kolumny {
          ctaEtykieta
          ctaUrl
          tekstLewo
          tekstPrawo
          tytul
        }
      }
    }
  }
`

export default IndexPage

/* STYLED COMPONENTS */
