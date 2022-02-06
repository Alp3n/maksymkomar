import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns from "../components/two-columns"
import FullBleedOther from "../components/full-bleed-other"
// import Button from "../components/button"
import HowSession from "../components/how-sesion"
import Opinions from "../components/opinions"
import AudiotherapyPreview from "../components/audiotherapy-preview"
import PriceList from "../components/price-list"
import TherapyProduct from "../components/therapy-prodcut"

const SeanseTerapeutyczne = ({ data }) => {
  return (
    <Layout>
      <Seo title={"Seanse terapeutyczne"} />
      <FullBleedOther
        hero={
          data.wpPage.seanseterapeutyczne.heroSection.image.localFile
            .childImageSharp.gatsbyImageData
        }
        altHero={data.wpPage.seanseterapeutyczne.heroSection.image.altText}
        title={data.wpPage.seanseterapeutyczne.heroSection.title}
        background={styles.color.lightOrange}
        blend
        client
      />
      <TwoColumns
        title={data.wpPage.seanseterapeutyczne.col2Section.title}
        textLeft={data.wpPage.seanseterapeutyczne.col2Section.textLeft}
        textRight={data.wpPage.seanseterapeutyczne.col2Section.textRight}
        cta
        textButtonLabel={data.wpPage.seanseterapeutyczne.col2Section.ctaLabel}
        textButtonUrl={data.wpPage.seanseterapeutyczne.col2Section.ctaUrl}
      />
      <StyledSimpleSection>
        <h1>{data.wpPage.seanseterapeutyczne.simpleSection1.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.wpPage.seanseterapeutyczne.simpleSection1.text,
          }}
        />
      </StyledSimpleSection>
      <StyledSimpleSection>
        <h1>{data.wpPage.seanseterapeutyczne.simpleSection2.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.wpPage.seanseterapeutyczne.simpleSection2.text,
          }}
        />
      </StyledSimpleSection>
      <PriceList
        priceListSection={data.wpPage.seanseterapeutyczne.priceListSection}
      />
      <TherapyProduct
        complexPersonalityTherapySection={
          data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
        }
      />

      <HowSession
        videos={data.wpPage.seanseterapeutyczne.sessionWaySection.items}
        title={data.wpPage.seanseterapeutyczne.sessionWaySection.title}
        textList={data.wpPage.seanseterapeutyczne.sessionWaySection.textList}
      />
      <Opinions
        single
        opinions={data.wpPage.seanseterapeutyczne.opinionSection}
      />
      <AudiotherapyPreview />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SeanceQuery {
    wpPage(databaseId: { eq: 268 }) {
      id
      title
      seanseterapeutyczne {
        col2Section {
          ctaLabel
          ctaUrl
          fieldGroupName
          textLeft
          textRight
          title
        }
        complexPersonalityTherapySection {
          costBold
          costValue
          ctaLabel
          ctaUrl
          durationBold
          durationValue
          textFirst
          textLeft
          textLeftBold
          textRight
          textRightBold
          textSecond
          title
        }
        heroSection {
          title
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        opinionSection {
          name
          opinion
        }
        priceListSection {
          boldText
          ctaLabel
          ctaUrl
          textFirst
          textLeft {
            duration
            fiveSeance
            office
            oneSeance
            twoSeance
          }
          textRight {
            duration
            fieldGroupName
            fiveSeance
            oneSeance
            online
            twoSeance
          }
          textSecond
          title
        }
        sessionWaySection {
          items {
            videoTitle
            videoUrl
          }
          textList
          title
        }
        simpleSection1 {
          text
          title
        }
        simpleSection2 {
          text
          title
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
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  scroll-margin-top: 150px;
`

const StyledTitle = styled.h1`
  margin-bottom: 60px;
  width: 50%;
  text-transform: uppercase;
`

const StyledTextsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  margin-bottom: 60px;
`

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTextBox = styled.div`
  padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")};
`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};
`
