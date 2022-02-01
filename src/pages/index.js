import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedMain from "../components/full-bleed-main"
import TwoColumns from "../components/two-columns"
import FullBleedSection from "../components/full-bleed-section"
import Reviews from "../components/reviews"
import BlogPreview from "../components/blog-preview"
import Newsletter from "../components/newsletter"
import Faq from "../components/faq"
import qa from "../data/faq"

const IndexPage = ({ data }) => {
  console.log(data)

  const reviews = [
    {
      src: data.portrait1.localFile.childImageSharp.gatsbyImageData,
      name: "Name 1",
      opinion:
        "Some opionion blablablabalbalbla. Some opionion blablablabalbalblaSome opionion blablablabalbalblaSome opionion blablablabalbalbla.Some opionion blablablabalbalbla",
    },
    {
      src: data.portrait2.localFile.childImageSharp.gatsbyImageData,
      name: "Name 2",
      opinion: "Some opionion blablablabalbalbla",
    },
    {
      src: data.portrait1.localFile.childImageSharp.gatsbyImageData,
      name: "Name 3",
      opinion: "Some opionion blablablabalbalbla",
    },
    {
      src: data.portrait2.localFile.childImageSharp.gatsbyImageData,
      name: "Name 4",
      opinion: "Some opionion blablablabalbalbla",
    },
    {
      src: data.portrait1.localFile.childImageSharp.gatsbyImageData,
      name: "Name 5",
      opinion: "Some opionion blablablabalbalbla",
    },
    {
      src: data.portrait2.localFile.childImageSharp.gatsbyImageData,
      name: "Name 6",
      opinion: "Some opionion blablablabalbalbla",
    },
  ]

  return (
    <Layout>
      <Seo title="Home" />
      <FullBleedMain
        src={data.hero.localFile.childImageSharp.gatsbyImageData}
        alt={data.hero.altText}
        logo={data.logo.localFile.childImageSharp.gatsbyImageData}
        altLogo={data.logo.altText}
        main={true}
        background={styles.color.primary}
      />
      <TwoColumns
        textTitle="Moja metoda"
        textLeft="Pracując wiele lat z ludźmi z całego świata, zauważyłem pewne
        algorytmy oraz wzorce zachowań, co zainspirowało mnie do stworzenia
        unikalnej metody pracy z ludzką psychiką i zachowaniem człowieka."
        textRight="Metoda pozwala na przepracowanie problemów z różnych obszarów życia:
        od zdrowia i poczucia własnej wartości, uzależnień po finanse i
        relacje. Metoda charakteryzuje się skutecznością i szybkim tempem
        uzyskania pożądanego efektu. Większość problemów da się rozwiązać
        podczas maksymalnie pięciu seansów, a często wystarczy nawet tylko
        jeden."
        textButtonLabel="Więcej"
        textButtonUrl="/o-mnie/"
        cta
      />
      <FullBleedSection
        src={data.sekcja1.localFile.childImageSharp.gatsbyImageData}
        alt={data.sekcja1.altText}
        background={styles.color.grey}
        cta
      >
        <StyledTitle>
          Seanse
          <br />
          terapeutyczne
        </StyledTitle>
        <StyledDesc>
          Hipnoterapia jako jedna z najskuteczniejszych rodzajów terapii, daje
          efekty w bardzo krótkim czasie. Większość problemów można trwale
          rozwiązać w trakcie maksymalnie kilku spotkań. Niektóre problemy nawet
          w ciągu jednego.
        </StyledDesc>
      </FullBleedSection>
      <TwoColumns
        textTitle="Audioterapie"
        textLeft="W obecnych, bardzo zautomatyzowanych czasach, 
        zależy mi na tym, aby każdy miał dostęp do profesjonalnej pomocy nawet w zaciszu własnego 
        domu. "
        textRight="Audioterapie są to moje autorskie nagrania, w których przeprowadzam Cię przez proces terapeutyczny. Dzięki nim możesz popracować ze sobą, ze swoimi problemami i przemyśleniami, bez fizycznego kontaktu ze mną."
        textButtonLabel="Więcej"
        textButtonUrl="/page-2/"
        cta
      />
      <FullBleedSection
        src={data.sekcja2.localFile.childImageSharp.gatsbyImageData}
        alt={data.sekcja2.altText}
        background={styles.color.grey}
        cta
      >
        <StyledTitle>
          W jakich
          <br />
          przypadkach <br />
          mogę Ci pomóc
        </StyledTitle>
        <StyledDesc>
          Zakres problemów, w których mogę pomóc Ci rozwiązać jest szeroki.
          Począwszy od zmiany szkodliwych przekonań, poprzez redukcję stresu i
          napięć po przepracowywanie traum i fobii.
        </StyledDesc>
      </FullBleedSection>
      <Reviews reviews={reviews} />
      <FullBleedSection
        src={data.sekcja3.localFile.childImageSharp.gatsbyImageData}
        alt={data.sekcja3.altText}
        background={styles.color.grey}
        cta
      >
        <StyledTitle>
          Szkolenia dla <br />
          terapeutów
        </StyledTitle>
        <StyledDesc>
          Profesjonalne kursy dla osób, które są zainteresowane hipnozą, chcą
          pomagać ludziom, czy też związać z tym swoją przyszłość jako terapeuci
          i hipnoterapeuci.
        </StyledDesc>
      </FullBleedSection>
      <BlogPreview posts={data.blogPosts.edges} />
      <Newsletter />
      <Faq qa={qa} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query Index {
    hero: wpMediaItem(id: { eq: "cG9zdDo5MA==" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
    logo: wpMediaItem(id: { eq: "cG9zdDo5NQ==" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
    sekcja1: wpMediaItem(id: { eq: "cG9zdDoyNTE=" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
    sekcja2: wpMediaItem(id: { eq: "cG9zdDoyNTc=" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
    sekcja3: wpMediaItem(id: { eq: "cG9zdDoyMzc=" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
    portrait1: wpMediaItem(id: { eq: "cG9zdDoxOTU=" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
    portrait2: wpMediaItem(id: { eq: "cG9zdDoxOTY=" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
    blogPosts: allWpPost(limit: 3, sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
          }
          excerpt
          categories {
            nodes {
              name
            }
          }
          slug
        }
      }
    }
  }
`

export default IndexPage

/* STYLED COMPONENTS */

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 40px;
  font-size: 72px;
  font-weight: 400;
  line-height: 80px;
  color: ${styles.color.primary};
`

const StyledDesc = styled.p`
  font-weight: 300;
  line-height: 33px;
  margin-bottom: 2vw;
`
