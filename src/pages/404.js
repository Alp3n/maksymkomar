import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 style={{ marginTop: "60px" }}>404: Nie znaleziono</h1>
    <p style={{ marginBottom: "60px" }}>Taka strona nie istnieje, niestety.</p>
  </Layout>
)

export default NotFoundPage
