import React from "react"
// import styles from "../styles"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import FullBleedWrapper from "../components/full-bleed-wrapper"
import Title from "../components/title"
import styles from "../styles"

const Referencje = ({ data }) => {
  return (
    <Layout>
      <Seo title="Referencje" />
      <FullBleedWrapper>
        <StyledWrapper>
          <Title title={"Referencje Maksyma Komara"} />
          {data.wpPage.ACFreferencje2.sekcjareferencje.map(i => (
            <StyledItem>
              <h4>{i.imie}</h4>
              <StyledImage
                image={i.portret.localFile.childImageSharp.gatsbyImageData}
                alt={i.portret.altText}
              />
              <p dangerouslySetInnerHTML={{ __html: i.referencja }} />
            </StyledItem>
          ))}
        </StyledWrapper>
      </FullBleedWrapper>
    </Layout>
  )
}

export default Referencje

export const referencesQuery = graphql`
  query ReferencesQuery {
    wpPage(databaseId: { eq: 29 }) {
      id
      ACFreferencje2 {
        sekcjareferencje {
          imie
          referencja
          portret {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  }
`

const StyledWrapper = styled.div`
  margin-top: 100px;

  @media only screen and (max-width: 1200px) {
    margin-top: 60px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 60px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`
const StyledImage = styled(GatsbyImage)`
  display: block;
  width: fit-content;
  height: auto;
  margin-bottom: 30px;
  @media only screen and (max-width: 1200px) {
    width: 80%;
  }
`
