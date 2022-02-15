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

const AudiotherapyTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.wpPost.title} />
      <FullBleed
        hero={
          data.wpPost.ACFaudioterapia.sekcjaHero.obrazHero.localFile
            .childImageSharp.gatsbyImageData
        }
        alt={data.wpPost.ACFaudioterapia.sekcjaHero.obrazHero.altText}
        title={"Audioterpaia"}
        subtitle={data.wpPost.title}
        subtitleBig
        background={styles.color.lightOrange}
        multiply
        heading={"strefa klienta"}
      />
      <TwoColumns
        title={data.wpPost.ACFaudioterapia.sekcja2KolumnyPierwsza.tytul}
        textLeft={data.wpPost.ACFaudioterapia.sekcja2KolumnyPierwsza.tekstLewo}
        textRight={
          data.wpPost.ACFaudioterapia.sekcja2KolumnyPierwsza.tekstPrawo
        }
      />
      <FullBleedWrapper background={styles.color.grey}>
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
        title={data.wpPost?.ACFaudioterapia?.sekcja2KolumnyDruga.tytul}
        textLeft={data.wpPost.ACFaudioterapia.sekcja2KolumnyDruga.tekstLewo}
        textRight={data.wpPost.ACFaudioterapia.sekcja2KolumnyDruga.tekstPrawo}
        ctaLabel={data.wpPost.ACFaudioterapia.sekcja2KolumnyDruga.ctaEtykieta}
      />
      <Opinions
        single
        opinions={data?.wpPage?.ACFopinieOSeansach?.opinie}
        background={styles.color.grey}
        marginBottom
      />
      <FullBleedWrapper noMargin>
        <Title title={"Może Cię także zainteresować"} noMargin />
      </FullBleedWrapper>
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
      <BlogPreview />
    </Layout>
  )
}
/* 
allWpPost(
  filter: {categories: {nodes: {elemMatch: {name: {eq: $category}}}}}
) {
  edges {
    node {
      id
      slug
      title
      excerpt
    }
  }
} */

export default AudiotherapyTemplate

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      ACFaudioterapia {
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
`
