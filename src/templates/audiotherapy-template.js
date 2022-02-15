import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styles from "../styles"
import styled from "styled-components"
import BlogPreview from "../components/blog-preview"
import ProductSection from "../components/product-section"
import TwoColumns from "../components/two-columns"
import FullBleedWrapper from "../components/full-bleed-wrapper"
import Opinions from "../components/opinions"
import Title from "../components/title"
import FullBleedMobile from "../components/full-bleed-mobile"
import { useMediaQuery } from "react-responsive"
import { transitions, positions, Provider as AlertProvider } from "react-alert"

const AlertTemplate = ({ options, message, close }) => (
  <div
    style={{
      color: styles.color.white,
      backgroundColor: styles.color.lightBlue,
      padding: "10px 20px",
      marginBottom: "30px",
    }}
  >
    {message}
    {options.type === "success" && "  :)"}
  </div>
)

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const AudiotherapyTemplate = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })
  return (
    <Layout>
      <AlertProvider template={AlertTemplate} {...options}>
        <Seo title={data.wpPost.title} />
        {isMobile ? (
          <FullBleedMobile
            hero={
              data.wpPost.ACFaudioterapia.sekcjaHer0.obrazHero.localFile
                .childImageSharp.gatsbyImageData
            }
            alt={data.wpPost.ACFaudioterapia.sekcjaHer0.obrazHero.altText}
            title={"Audioterpia"}
            // subtitle={data.wpPost.title}
            subtitleBig
            background={styles.color.lightOrange}
            multiply
            heading={"strefa klienta"}
            objectPosition={"70%"}
          />
        ) : (
          <FullBleed
            hero={
              data.wpPost.ACFaudioterapia.sekcjaHer0.obrazHero.localFile
                .childImageSharp.gatsbyImageData
            }
            alt={data.wpPost.ACFaudioterapia.sekcjaHer0.obrazHero.altText}
            title={"Audioterpaia"}
            subtitle={data.wpPost.title}
            subtitleBig
            background={styles.color.lightOrange}
            multiply
            heading={"strefa klienta"}
          />
        )}
        <TwoColumns
          title={data.wpPost.ACFaudioterapia.sekcja2KolumnyPierwsza.tytul}
          textLeft={
            data.wpPost.ACFaudioterapia.sekcja2KolumnyPierwsza.tekstLewo
          }
          textRight={
            data.wpPost.ACFaudioterapia.sekcja2KolumnyPierwsza.tekstPrawo
          }
        />
        <FullBleedWrapper background={styles.color.grey} somePadding>
          <StyledSimpleSectionTitle>
            {data.wpPost.ACFaudioterapia.sekcjaProsta.tytul}
          </StyledSimpleSectionTitle>
          <p
            dangerouslySetInnerHTML={{
              __html: data.wpPost.ACFaudioterapia.sekcjaProsta.tekst,
            }}
          />
        </FullBleedWrapper>

        <ProductSection
          title={data.wpPost.ACFaudioterapia.sekcja2KolumnyDruga.tytul}
          textLeft={data.wpPost.ACFaudioterapia.sekcja2KolumnyDruga.tekstLewo}
          textRight={data.wpPost.ACFaudioterapia.sekcja2KolumnyDruga.tekstPrawo}
          ctaLabel={data.wpPost.ACFaudioterapia.sekcja2KolumnyDruga.ctaEtykieta}
        />
        <Opinions
          single
          opinions={data?.wpPage?.ACFopinieOSeansach?.opinie}
          background={styles.color.grey}
          somePadding
          // marginBottom
        />
        <FullBleedWrapper noMargin>
          <Title title={"Może Cię także zainteresować"} noMargin />
        </FullBleedWrapper>
        {isMobile ? (
          <FullBleedMobile
            title={data.wpPost.ACFaudioterapia.sekcjaSugestia.tytul}
            hero={
              data.wpPost.ACFaudioterapia.sekcjaSugestia.obrazHero.localFile
                .childImageSharp.gatsbyImageData
            }
            alt={data.wpPost.ACFaudioterapia.sekcjaSugestia.obrazHero.altText}
            duration={data.wpPost.ACFaudioterapia.sekcjaSugestia.dlugosc}
            format={data.wpPost.ACFaudioterapia.sekcjaSugestia.format}
            price={data.wpPost.ACFaudioterapia.sekcjaSugestia.cena}
            ctaLabel={data.wpPost.ACFaudioterapia.sekcjaSugestia.ctaEtykieta}
            ctaUrl={data.wpPost.ACFaudioterapia.sekcjaSugestia.ctaUrl}
            background={styles.color.lightOrange}
            multiply
            objectPosition={`80% 50%`}
          />
        ) : (
          <FullBleed
            title={data.wpPost.ACFaudioterapia.sekcjaSugestia.tytul}
            hero={
              data.wpPost.ACFaudioterapia.sekcjaSugestia.obrazHero.localFile
                .childImageSharp.gatsbyImageData
            }
            alt={data.wpPost.ACFaudioterapia.sekcjaSugestia.obrazHero.altText}
            duration={data.wpPost.ACFaudioterapia.sekcjaSugestia.dlugosc}
            format={data.wpPost.ACFaudioterapia.sekcjaSugestia.format}
            price={data.wpPost.ACFaudioterapia.sekcjaSugestia.cena}
            ctaLabel={data.wpPost.ACFaudioterapia.sekcjaSugestia.ctaEtykieta}
            ctaUrl={data.wpPost.ACFaudioterapia.sekcjaSugestia.ctaUrl}
            background={styles.color.lightOrange}
            multiply
          />
        )}
        <BlogPreview />
      </AlertProvider>
    </Layout>
  )
}

export default AudiotherapyTemplate

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      ACFaudioterapia {
        sekcjaHer0 {
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
          tytul
        }
        sekcjaProsta {
          tekst
          tytul
        }
        sekcjaSugestia {
          cena
          ctaEtykieta
          ctaUrl
          dlugosc
          format
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
        sekcja2KolumnyPierwsza {
          tekstLewo
          tekstPrawo
          tytul
        }
        sekcja2KolumnyDruga {
          ctaEtykieta
          tekstLewo
          tekstPrawo
          tytul
        }
      }
    }
    wpPage(databaseId: { eq: 408 }) {
      ACFopinieOSeansach {
        opinie {
          imie
          opinia
        }
      }
    }
  }
`

const StyledSimpleSectionTitle = styled.h1`
  width: 60%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
