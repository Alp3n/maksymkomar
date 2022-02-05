import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns from "../components/two-columns"
import Newsletter from "../components/newsletter"

const NotFoundPage = ({ data }) => (
  <Layout>
    <Seo title="Kontakt" />
    <div style={{ marginBottom: "100px" }} />
    <TwoColumns
      title={data.wpPage.contact.col2Section.title}
      textLeft={data.wpPage.contact.col2Section.textLeft}
      textRight={data.wpPage.contact.col2Section.textRight}
    />
    <div>MAPA full bleed</div>
    <Newsletter />
  </Layout>
)
export const pageQuery = graphql`
  query ContactQuery {
    wpPage(databaseId: { eq: 465 }) {
      id
      contact {
        col2Section {
          ctaLabel
          ctaUrl
          textLeft
          textRight
          title
        }
      }
    }
  }
`
export default NotFoundPage
