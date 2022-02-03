import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleedSection from "../components/full-bleed-section"
import TwoColumns from "../components/two-columns"
import Patent from "../components/patent"
import References from "../components/references"

const Omnie = ({ data }) => {
  const myData = data.wpPage.aboutMe
  console.log(data)

  return (
    <Layout>
      <Seo title="O mnie" />
      <FullBleedSection
        hero={myData.hero.image.localFile.childImageSharp.gatsbyImageData}
        altHero={myData.hero.image.altText}
        logo={myData.hero.signature.localFile.childImageSharp.gatsbyImageData}
        altLogo={myData.hero.signature.altText}
        background={styles.color.primary}
        text={myData.hero.text}
        blend
      />
      <StyledSimpleSection>
        <h1>{myData.simpleSection.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: myData.simpleSection.text }} />
      </StyledSimpleSection>
      <TwoColumns
        title={myData.col2Section.title}
        textLeft={myData.col2Section.textLeft}
        textRight={myData.col2Section.textRight}
      />
      <Patent
        image={
          myData.patentSection.image.localFile.childImageSharp.gatsbyImageData
        }
        alt={myData.patentSection.image.altText}
        title={myData.patentSection.title}
        ctaLabel={myData.patentSection.ctaLabel}
      />
      <References
        references={myData.referenceSection.references}
        title={myData.referenceSection.title}
        text={myData.referenceSection.text}
        ctaLabel={myData.referenceSection.ctaLabel}
        ctaUrl={myData.referenceSection.ctaUrl}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutMe {
    wpPage(databaseId: { eq: 211 }) {
      id
      title
      slug
      aboutMe {
        col2Section {
          ctaLabel
          ctaUrl
          fieldGroupName
          textLeft
          textRight
          title
        }
        hero {
          signature {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          text
        }
        patentSection {
          ctaLabel
          ctaUrl
          fieldGroupName
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
        referenceSection {
          ctaLabel
          ctaUrl
          fieldGroupName
          text
          title
          references {
            name
            reference
          }
        }
        simpleSection {
          fieldGroupName
          text
          title
        }
      }
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

const StyledSimpleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`
