import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns from "../components/two-columns"
import FullBleed from "../components/full-bleed"
import HowSession from "../components/how-session"
import Opinions from "../components/opinions"
import AudiotherapyPreview from "../components/audiotherapy-preview"
import PriceList from "../components/price-list"
import TherapyProduct from "../components/therapy-product"
import Modal from "react-modal"
import BookForm from "../components/book-form"

const SeanseTerapeutyczne = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <Layout>
      <Seo title={"Seanse terapeutyczne"} />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
        style={{
          content: {
            padding: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            minWidth: "600px",
          },
          overlay: {
            zIndex: 1000,
            backgroundColor: "rgba(57, 57, 57, 0.9)",
          },
        }}
      >
        <BookForm closeModal={closeModal} />
      </Modal>
      <FullBleed
        hero={
          data.wpPage.ACFseanse.sekcjaHero.obrazHero.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={data.wpPage.ACFseanse.sekcjaHero.obrazHero.altText}
        title={data.wpPage.ACFseanse.sekcjaHero.tytul}
        background={styles.color.lightOrange}
        multiply
        heading={"strefa klienta"}
      />
      <TwoColumns
        title={data.wpPage.ACFseanse.sekcja2Kolumny.tytul}
        textLeft={data.wpPage.ACFseanse.sekcja2Kolumny.tekstLewo}
        textRight={data.wpPage.ACFseanse.sekcja2Kolumny.tekstPrawo}
        cta
        textButtonLabel={data.wpPage.ACFseanse.sekcja2Kolumny.ctaEtykieta}
        textButtonUrl={data.wpPage.ACFseanse.sekcja2Kolumny.ctaUrl}
      />
      <StyledSimpleSection>
        <StyledTitle>{data.wpPage.ACFseanse.sekcjaProsta.tytul}</StyledTitle>
        <p
          dangerouslySetInnerHTML={{
            __html: data.wpPage.ACFseanse.sekcjaProsta.tekst,
          }}
        />
      </StyledSimpleSection>
      <StyledSimpleSection>
        <StyledTitle>{data.wpPage.ACFseanse.sekcjaProsta2.tytul}</StyledTitle>
        <p
          dangerouslySetInnerHTML={{
            __html: data.wpPage.ACFseanse.sekcjaProsta2.tekst,
          }}
        />
      </StyledSimpleSection>
      <PriceList
        priceListSection={data.wpPage.ACFseanse.sekcjaCennik}
        openModal={openModal}
      />
      <TherapyProduct
        sekcja={data.wpPage.ACFseanse.sekcjaTerapia}
        openModal={openModal}
      />

      <HowSession
        videos={data.wpPage.ACFseanse.sekcjaJak.filmy}
        title={data.wpPage.ACFseanse.sekcjaJak.tytul}
        text={data.wpPage.ACFseanse.sekcjaJak.tekst}
      />
      <Opinions single opinions={data.wpPage.ACFseanse.sekcjaOpinie2} />
      <AudiotherapyPreview />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SeanceQuery {
    wpPage(databaseId: { eq: 20 }) {
      id
      title
      ACFseanse {
        sekcja2Kolumny {
          ctaEtykieta
          ctaUrl
          tekstLewo
          tekstPrawo
          tytul
        }
        sekcjaCennik {
          ctaEtykieta
          tekstDrugi
          tekstLewo
          tekstPierwszy
          tekstPrawo
        }
        sekcjaHero {
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
        sekcjaJak {
          fieldGroupName
          tekst
          tytul
          filmy {
            tytul
            url
          }
        }
        sekcjaOpinie2 {
          portret {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 80)
              }
            }
          }
          imie
          opinia
        }
        sekcjaProsta {
          fieldGroupName
          tekst
          tytul
        }
        sekcjaProsta2 {
          fieldGroupName
          tekst
          tytul
        }
        sekcjaTerapia {
          ctaEtykieta
          tekstDrugi
          tekstLewo
          tekstPierwszy
          tytul
          tekstPrawo
        }
      }
    }
  }
`

export default SeanseTerapeutyczne

/* STYLED COMPONENTS */

const StyledSimpleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;

  @media only screen and (max-width: 1100px) {
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`
const StyledTitle = styled.h1`
  @media only screen and (max-width: 1100px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`
