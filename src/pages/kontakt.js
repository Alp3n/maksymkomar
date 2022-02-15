import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns from "../components/two-columns"
import Newsletter from "../components/newsletter"
import BookForm from "../components/book-form"
import styled from "styled-components"
import FullBleedWrapper from "../components/full-bleed-wrapper"

const Kontakt = ({ data }) => (
  <Layout>
    <Seo title="Kontakt" />
    <StyledWrapper />
    <TwoColumns
      title={data.wpPage.ACFkontakt.sekcja2Kolumny.tytul}
      textLeft={data.wpPage.ACFkontakt.sekcja2Kolumny.tekstLewo}
      textRight={data.wpPage.ACFkontakt.sekcja2Kolumny.tekstPrawo}
    />
    {/* <div>MAPA full bleed</div> */}
    <Newsletter />
    <FullBleedWrapper>
      <BookForm noClose />
    </FullBleedWrapper>
  </Layout>
)
export const pageQuery = graphql`
  query ContactQuery {
    wpPage(databaseId: { eq: 32 }) {
      id
      ACFkontakt {
        sekcja2Kolumny {
          tekstLewo
          tekstPrawo
          tytul
        }
      }
    }
  }
`
export default Kontakt

const StyledWrapper = styled.div`
  margin-bottom: 100px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 50px;
  }
`
