import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styles from "../styles"
import BlogPreview from "../components/blog-preview"
import DropDown from "../components/drop-down"
import FullBleedWrapper from "../components/full-bleed-wrapper"
import FullBleedMobile from "../components/full-bleed-mobile"
import { useMediaQuery } from "react-responsive"

const HowCanIHelp = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })
  return (
    <Layout>
      <Seo title="Blog" />
      {isMobile ? (
        <FullBleedMobile
          hero={
            data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHer0.obrazHero
              .localFile.childImageSharp.gatsbyImageData
          }
          alt={
            data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHer0.obrazHero
              .altText
          }
          title={"W jakich przypadkach<br/>mogę Ci pomóc"}
          // title={data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHer0.tytul}
          background={styles.color.lightOrange}
          multiply
          noStyle
          heading={"strefa klienta"}
          noMargin
          objectPosition={"90% 50%"}
        />
      ) : (
        <FullBleed
          hero={
            data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHer0.obrazHero
              .localFile.childImageSharp.gatsbyImageData
          }
          alt={
            data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHer0.obrazHero
              .altText
          }
          title={data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaHer0.tytul}
          background={styles.color.lightOrange}
          multiply
          heading={"strefa klienta"}
          noPadding
        />
      )}

      <FullBleedWrapper>
        {data.wpPage.ACFwJakichPrzypadkachMogeCiPomoc.sekcjaZaawansowana.map(
          c => (
            <DropDown key={c.kategoria.tytul} categories={c} />
          )
        )}
      </FullBleedWrapper>

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
        sekcjaHer0 {
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
