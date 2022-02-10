import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns from "../components/two-columns"
import Newsletter from "../components/newsletter"
import BookForm from "../components/book-form"

const Kontakt = ({ data }) => (
  <Layout>
    <Seo title="Kontakt" />
    <div style={{ marginBottom: "100px" }} />
    <TwoColumns
      title={data.wpPage.ACFkontakt.sekcja2Kolumny.tytul}
      textLeft={data.wpPage.ACFkontakt.sekcja2Kolumny.tekstLewo}
      textRight={data.wpPage.ACFkontakt.sekcja2Kolumny.tekstPrawo}
    />
    {/* <div>MAPA full bleed</div> */}
    <Newsletter />
    <BookForm noClose />
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
