import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns from "../components/two-columns"
import FullBleedOther from "../components/full-bleed-other"
import Button from "../components/button"
import HowSession from "../components/how-sesion"
import Opinions from "../components/opinions"
import AudiotherapyPreview from "../components/audiotherapy-preview"

const SeanseTerapeutyczne = ({ data }) => {
  // const myData = data.wpPage.seanseTerapeutyczne
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
        orange
        blend
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
        <h1>{data.wpPage.seanseterapeutyczne.simpleSection.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.wpPage.seanseterapeutyczne.simpleSection.text,
          }}
        />
      </StyledSimpleSection>
      {/* <StyledSimpleSection>
        <h1>{data.wpPage.seanseterapeutyczne.simpleSection2.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.wpPage.seanseterapeutyczne.simpleSection2.text,
          }}
        />
      </StyledSimpleSection> */}
      <StyledWrapper>
        <StyledTitle>
          {data.wpPage.seanseterapeutyczne.priceListSection.title}
        </StyledTitle>
        <p>{data.wpPage.seanseterapeutyczne.priceListSection.textFirst}</p>
        <StyledTextsBox>
          <StyledTextBox right>
            <StyledFlex>
              <span>
                <strong>
                  {
                    data.wpPage.seanseterapeutyczne.priceListSection.textLeft
                      .office
                  }
                </strong>
              </span>
              <span>
                <strong>Czas trwania</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textLeft
                    .duration
                }
              </span>
              <span>
                <strong>1 seans</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textLeft
                    .oneSeance
                }
              </span>
              <span>
                <strong>3 seanse</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textLeft
                    .twoSeance
                }
              </span>
              <span>
                <strong>5 seansów</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textLeft
                    .fiveSeance
                }
              </span>
            </StyledFlex>
          </StyledTextBox>
          <StyledVerticalLine />
          <StyledTextBox left>
            <StyledFlex>
              <span>
                <strong>
                  {
                    data.wpPage.seanseterapeutyczne.priceListSection.textRight
                      .online
                  }
                </strong>
              </span>
              <span>
                <strong>Czas trwania</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textRight
                    .duration
                }
              </span>
              <span>
                <strong>1 seans</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textRight
                    .oneSeance
                }
              </span>
              <span>
                <strong>3 seanse</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textRight
                    .twoSeance
                }
              </span>
              <span>
                <strong>5 seansów</strong> -{" "}
                {
                  data.wpPage.seanseterapeutyczne.priceListSection.textLeft
                    .fiveSeance
                }
              </span>
            </StyledFlex>
          </StyledTextBox>
        </StyledTextsBox>
        <p>
          <b>{data.wpPage.seanseterapeutyczne.priceListSection.boldText}</b>
        </p>
        <p>{data.wpPage.seanseterapeutyczne.priceListSection.textSecond}</p>
        <Button
          label={data.wpPage.seanseterapeutyczne.priceListSection.ctaLabel}
        />
      </StyledWrapper>

      <StyledWrapper>
        <StyledTitle>
          {
            data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
              .title
          }
        </StyledTitle>
        <p style={{ width: "60%" }}>
          {
            data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
              .textFirst
          }
        </p>
        <StyledTextsBox>
          <StyledTextBox right>
            <strong>
              {
                data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
                  .textLeftBold
              }
            </strong>
            <StyledFlex
              dangerouslySetInnerHTML={{
                __html:
                  data.wpPage.seanseterapeutyczne
                    .complexPersonalityTherapySection.textLeft,
              }}
            ></StyledFlex>
          </StyledTextBox>
          <StyledVerticalLine />
          <StyledTextBox left>
            <strong>
              {
                data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
                  .textRightBold
              }
            </strong>
            <StyledFlex
              dangerouslySetInnerHTML={{
                __html:
                  data.wpPage.seanseterapeutyczne
                    .complexPersonalityTherapySection.textRight,
              }}
            ></StyledFlex>
          </StyledTextBox>
        </StyledTextsBox>

        <p style={{ width: "60%" }}>
          {
            data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
              .textSecond
          }
        </p>
        <div
          style={{
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>
            <strong>
              {
                data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
                  .durationBold
              }
            </strong>
            {
              data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
                .durationValue
            }
          </span>
          <span>
            <strong>
              {
                data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
                  .costBold
              }
            </strong>{" "}
            {
              data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
                .costValue
            }
          </span>
        </div>
        <Button
          label={
            data.wpPage.seanseterapeutyczne.complexPersonalityTherapySection
              .ctaLabel
          }
        />
      </StyledWrapper>
      <HowSession
        videos={data.wpPage.seanseterapeutyczne.sessionWaySection.items}
        title={data.wpPage.seanseterapeutyczne.sessionWaySection.title}
        textList={data.wpPage.seanseterapeutyczne.sessionWaySection.textList}
      />
      {/* <Opinions
        title={"Opinie"}
        opinions={
          data.wpPage.seanseterapeutyczne.opinionsSection?.opinions?.items
        }
      /> */}
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
                gatsbyImageData
              }
            }
          }
        }
        opinionsSection {
          items {
            name
            opinion
          }
          title
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
        simpleSection {
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
