import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedMain from "../components/full-bleed-main"
import FullBleedSection from "../components/full-bleed-section"
import TwoColumns from "../components/two-columns"
import Patent from "../components/patent"

const Omnie = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
      <FullBleedSection
        src={data.hero.localFile.childImageSharp.gatsbyImageData}
        alt={data.hero.altText}
        background={styles.color.primary}
        blend
      >
        <StyledDesc>
          “Moim wewnętrznym powołaniem jest wskazywanie osobom, które tego
          pragną, drogi jak przełamywać wewnętrzne bariery i odkrywać potencjał
          własnej osobowości, ukrytej w sile ludzkiego umysłu.”
        </StyledDesc>
        <StyledStaticLogo
          image={data.logo.localFile.childImageSharp.gatsbyImageData}
          alt={data.logo.altText}
        />
      </FullBleedSection>
      <StyledFlex>
        <StyledTitle color={styles.color.primary}>O Mnie</StyledTitle>
        <StyledText>
          – Autor opatentowanej metody terapeutycznej “The Maksym Komar’s
          Method” i “Hipnozy Niewerbalnej” (Hipnoza bez użycia słów)
          <br />– Dyplomowany i certyfikowany Hipnoterapeuta Kliniczny, Master
          Hipnoterapii, Hipnolog, NLP Master Coach
          <br />– Dyrektor i założyciel Professional Hypnosis Training Institute
          <br />– Sekretarz Polskiego Przedstawicielstwa Eastern European
          Association of Hypnotherapists and Clinical Psychologists i jego
          certyfikowany Trener
          <br />– Certyfikowany Hipnoterapeuta i członek National Guild of
          Hypnotists USA
          <br />– Wykładowca serii szkoleń The Neuro-Linguistic Programming
          Training Institute w Loyola University Chicago
          <br />– Autor publikacji naukowych na temat Hipnoterapii oraz metod
          wpływu na psychikę człowieka
          <br />– Prowadzi szkolenia w USA, Europie oraz na terytorium Wspólnoty
          Niepodległych Państw
        </StyledText>
      </StyledFlex>
      <TwoColumns
        textTitle="Moja Metoda"
        textLeft={
          <>
            Pracując wiele lat z ludźmi z całego świata, zauważyłem pewne
            algorytmy oraz wzorce zachowań, co zainspirowało mnie do stworzenia
            unikalnej metody pracy z ludzką psychiką i zachowaniem człowieka.
            <br />
            <br />
            Metoda pozwala na przepracowanie problemów z różnych obszarów życia:
            od zdrowia i poczucia własnej wartości, uzależnień po finanse i
            relacje.Metoda charakteryzuje się skutecznością i szybkim tempem
            uzyskania pożądanego efektu. Większość problemów da się rozwiązać
            podczas maksymalnie pięciu seansów, a często wystarczy nawet tylko
            jeden.
          </>
        }
        textRight={
          <>
            W każdym poszczególnym przypadku pracy z klientem tworzę
            niepowtarzalną, optymalną strategię postępowania, ale robię to z
            wykorzystaniem konkretnych – samodzielnie przeze mnie stworzonych –
            technik.
            <br />
            <br />
            Metoda bazuje na takich dziedzinach nauki jak: psychologia,
            neurologia, fizjologia, anatomia, biologia oraz różnych metodykach
            pracy z psychiką, umysłem i zachowaniem, w tym hipnozie klinicznej,
            języku ciała, gestykulacji, cold readingu I NLP.
          </>
        }
      />
      <Patent
        src={data.patent.localFile.childImageSharp.gatsbyImageData}
        alt={data.patent.altText}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutMe {
    hero: wpMediaItem(id: { eq: "cG9zdDoyNTM=" }) {
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
    patent: wpMediaItem(id: { eq: "cG9zdDoyNzY=" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
      altText
    }
  }
`

export default Omnie

/* STYLED COMPONENTS */

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 40px;
  font-size: 72px;
  font-weight: 400;
  line-height: 80px;
  color: ${props => props.color};
`

const StyledDesc = styled.p`
  font-family: "Marcellus";
  font-weight: 300;
  font-size: 32px;
  line-height: 47px;
  margin-bottom: 2vw;
  color: ${styles.color.white};
`
const StyledStaticLogo = styled(GatsbyImage)`
  width: 14vw;
  /* margin: 50px 0; */
`

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`

const StyledText = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 36px;
`
