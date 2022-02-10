import React from "react"
// import styles from "../styles"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const Referencje = ({ data }) => {
  return (
    <Layout>
      <Seo title="Referencje" />
      <StyledWrapper>
        <StyledTitle>Referencje Maksykma Komara</StyledTitle>
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
  display: grid;
  grid-auto-rows: auto;
  width: 100%;
  padding: 100px 0;
  @media only screen and (max-width: 1100px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 30px 0;
  }
`
const StyledTitle = styled.h1`
  margin-bottom: 80px;
  @media only screen and (max-width: 1100px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 60px;

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`
const StyledImage = styled(GatsbyImage)`
  display: block;
  width: fit-content;
  height: auto;
  margin-bottom: 30px;
  @media only screen and (max-width: 1100px) {
    width: 80%;
  }
`
