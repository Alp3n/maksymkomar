import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styles from "../styles"
import BlogPreview from "../components/blog-preview"
import DropDown from "../components/drop-down"

const HowCanIHelp = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <FullBleed
        hero={
          data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHero.obrazHero
            .localFile.childImageSharp.gatsbyImageData
        }
        alt={
          data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHero.obrazHero
            .altText
        }
        title={data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHero.tytul}
        background={styles.color.lightOrange}
        multiply
        heading={"strefa klienta"}
      />
      <StyledWrapper>
        {data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaZaawansowana.map(
          c => (
            <DropDown key={c.kategoria.tytul} categories={c} />
          )
        )}
      </StyledWrapper>

      <BlogPreview />
    </Layout>
  )
}

export default HowCanIHelp

export const HowCanIHelpQuery = graphql`
  query HowCanIHelp {
    wpPage(databaseId: { eq: 26 }) {
      id
      ACFwJakichPrzypadkachMogeCiPomoc {
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
        sekcjaZaawansowana {
          kategoria {
            definicje {
              definicja
              wyraz
            }
            tytul
          }
        }
      }
    }
  }
`

const StyledWrapper = styled.div`
  width: 100%;

  div:last-child() {
    margin-bottom: 150px;
  }
`
