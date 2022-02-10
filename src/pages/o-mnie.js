import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import TwoColumns from "../components/two-columns"
import Patent from "../components/patent"
import References from "../components/references"

const Omnie = ({ data }) => {
  const myData = data.wpPage.ACFoMnie
  return (
    <Layout>
      <Seo title="O mnie" />
      <FullBleed
        hero={
          myData.sekcjaHero.obrazHero.localFile.childImageSharp.gatsbyImageData
        }
        alt={myData.sekcjaHero.obrazHero.altText}
        logo={
          myData.sekcjaHero.obrazPodpis.localFile.childImageSharp
            .gatsbyImageData
        }
        altLogo={myData.sekcjaHero.obrazPodpis.altText}
        background={styles.color.primary}
        subtitle={
          /* myData.sekcjaHero.text */ `“Moim wewnętrznym powołaniem jest wskazywanie osobom, które tego pragną, drogi jak przełamywać wewnętrzne bariery i odkrywać potencjał własnej osobowości, ukrytej w sile ludzkiego umysłu.”`
        }
        logoBottom
        multiply
        subtitleBig
      />
      <StyledSimpleSection>
        <h1>{myData.sekcjaProsta.tytul}</h1>
        <p dangerouslySetInnerHTML={{ __html: myData.sekcjaProsta.tekst }} />
      </StyledSimpleSection>
      <TwoColumns
        title={myData.sekcja2Kolumny.tytul}
        textLeft={myData.sekcja2Kolumny.tekstLewo}
        textRight={myData.sekcja2Kolumny.tekstPrawo}
        id="moja-metoda"
      />
      <Patent
        image={
          myData.sekcjaPatent.obrazOryginal.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={myData.sekcjaPatent.obrazOryginal.altText}
        image2={
          myData.sekcjaPatent.orbazTlumaczenie.localFile.childImageSharp
            .gatsbyImageData
        }
        alt2={myData.sekcjaPatent.orbazTlumaczenie.altText}
        title={myData.sekcjaPatent.tytul}
        ctaLabel={myData.sekcjaPatent.ctaEtykieta}
      />
      <References
        references={myData.sekcjaReferencje.referencje}
        title={myData.sekcjaReferencje.tytul}
        text={myData.sekcjaReferencje.tekst}
        ctaLabel={myData.sekcjaReferencje.ctaEtykieta}
        ctaUrl={myData.sekcjaReferencje.ctaUrl}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutMe {
    wpPage(databaseId: { eq: 17 }) {
      id
      title
      slug
      ACFoMnie {
        sekcja2Kolumny {
          tekstLewo
          tekstPrawo
          tytul
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
        sekcjaPatent {
          ctaEtykieta
          tytul
          obrazOryginal {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          orbazTlumaczenie {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        sekcjaProsta {
          tekst
          tytul
        }
        sekcjaReferencje {
          ctaEtykieta
          ctaUrl
          tekst
          tytul
          referencje {
            imie
            referencja
          }
        }
      }
    }
  }
`

export default Omnie

/* STYLED COMPONENTS */

const StyledSimpleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
  }
`
