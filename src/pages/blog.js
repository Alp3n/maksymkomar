import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styles from "../styles"
import BlogPreview from "../components/blog-preview"
import FullBleedWrapper from "../components/full-bleed-wrapper"

const Blog = ({ data }) => {
  const [selected, setSelected] = useState("")

  const handleSelect = category => {
    if (selected === category) {
      return setSelected("")
    }
    setSelected(category.toLowerCase())
  }

  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <Layout>
      <Seo title="Blog" />
      <FullBleed
        hero={
          data.wpPage.ACFblog.sekcjaHero.obrazHero.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={data.wpPage.ACFblog.sekcjaHero.obrazHero.altText}
        title={"Blog"}
        background={styles.color.lightBlue}
        noPadding
      />
      <FullBleedWrapper>
        <StyledCategoryWrapper>
          <h1>Kategorie</h1>
          <StyledCategoryItemsWrapper>
            {data.allWpCategory.edges.map((c, i) => (
              <StyledCategoryItem
                key={c.node.name}
                onClick={() => handleSelect(c.node.name)}
                selected={selected === c.node.name}
              >
                {c.node.name}
              </StyledCategoryItem>
            ))}
          </StyledCategoryItemsWrapper>
        </StyledCategoryWrapper>
      </FullBleedWrapper>
      {selected ? (
        <FullBleedWrapper background={styles.color.grey}>
          <div>
            <h3>Wyniki dla {selected.toLowerCase()}</h3>
            <BlogPreview filterPhrase={selected} grid noButton />
          </div>
        </FullBleedWrapper>
      ) : null}
      <BlogPreview noButton filterPhrase={"hipnoterapia"} />
      <FullBleed
        title={data.wpPage.ACFblog.sekcjaSugestia.tytul}
        hero={
          data.wpPage.ACFblog.sekcjaSugestia.obrazHero.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={data.wpPage.ACFblog.sekcjaSugestia.obrazHero.altText}
        duration={data.wpPage.ACFblog.sekcjaSugestia.dlugosc}
        format={data.wpPage.ACFblog.sekcjaSugestia.format}
        price={data.wpPage.ACFblog.sekcjaSugestia.cena}
        ctaLabel={data.wpPage.ACFblog.sekcjaSugestia.ctaEtykieta}
        ctaUrl={data.wpPage.ACFblog.sekcjaSugestia.ctaUrl}
        background={styles.color.lightOrange}
        multiply
      />
    </Layout>
  )
}

export default Blog

export const BlogItems = graphql`
  query Blog {
    allWpCategory {
      edges {
        node {
          id
          name
          slug
          posts {
            nodes {
              id
              slug
              uri
              title
            }
          }
        }
      }
    }
    wpPage(databaseId: { eq: 35 }) {
      ACFblog {
        fieldGroupName
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
        sekcjaSugestia {
          cena
          ctaEtykieta
          ctaUrl
          dlugosc
          format
          obrazHero {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          tytul
        }
      }
    }
  }
`

const StyledCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledCategoryItemsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`
const StyledCategoryItem = styled.a`
  width: fit-content;
  text-transform: lowercase;
  border-bottom: 1px solid ${styles.color.primary};
  padding: 20px 10px;
  background-color: ${props =>
    props.selected ? styles.color.lightBlue : "transparent"};

  @media only screen and (max-width: 600px) {
    padding: 0;
  }

  :hover {
    background-color: ${styles.color.lightBlue};
    color: ${styles.color.white};
    cursor: pointer;
  }

  :active {
    background-color: ${styles.color.primary};
  }
`
