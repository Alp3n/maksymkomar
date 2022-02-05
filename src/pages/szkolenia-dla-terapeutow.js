import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoColumns from "../components/two-columns"
import FullBleedOther from "../components/full-bleed-other"

const SzkoleniaDlaTerapeutow = (/* { data } */) => {
  // const myData = data.wpPage.seanseTerapeutyczne
  return (
    <Layout>
      <Seo title={"Seanse terapeutyczne"} />
      <FullBleedOther
      /*  hero={
          data.wpPost.blog.heroSection.image.localFile.childImageSharp
            .gatsbyImageData
        }
        altHero={data.wpPost.blog.heroSection.image.altText}
        title={data.wpPost.blog.heroSection.title}
        subtitle={data.wpPage.seanseTerapeutyczne} */
      />
      {/* <TwoColumns /> */}
    </Layout>
  )
}

export default SzkoleniaDlaTerapeutow
