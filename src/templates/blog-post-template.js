import * as React from "react"
import { graphql } from "gatsby"
import styles from "../styles"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styled from "styled-components"
import BlogPreview from "../components/blog-preview"

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.wpPost.title} />
      <FullBleed
        hero={
          data.wpPost.ACFblogpost.sekcjaHero.obrazHero.localFile.childImageSharp
            .gatsbyImageData
        }
        altHero={data.wpPost.ACFblogpost.sekcjaHero.obrazHero.altText}
        title={data.wpPost.ACFblogpost.sekcjaHero.tytul}
        categories={data.wpPost.categories.nodes}
        background={styles.color.lightBlue}
        heading={"BLOG"}
        date={data.wpPost.date}
        smallTitle
      />
      <StyledWrapper>
        {data.wpPost.ACFblogpost.sekcjaOpis ? (
          <StyledDescription
            dangerouslySetInnerHTML={{
              __html: data.wpPost.ACFblogpost.sekcjaOpis,
            }}
          />
        ) : null}
        {data.wpPost.ACFblogpost.sekcjaPowtarzalna.map(i => (
          <StyledItem key={i.tytul ? i.tytul : null}>
            {i.tytul ? <StyledTitle>{i.tytul}</StyledTitle> : null}
            {i.tekst ? (
              <div dangerouslySetInnerHTML={{ __html: i.tekst }} />
            ) : null}
            {i.obraz?.localFile.childImageSharp.gatsbyImageData ? (
              <StyledImage
                image={i.obraz.localFile.childImageSharp.gatsbyImageData}
                alt={i.obraz.altText}
              />
            ) : null}
            {i.wideo ? (
              <StyledIframe
                src={i.wideo}
                title="Video"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                frameBorder={0}
              />
            ) : null}
          </StyledItem>
        ))}
        <i>Autor: Maksym Komar</i>
      </StyledWrapper>
      <BlogPreview />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      title
      categories {
        nodes {
          name
          slug
        }
      }
      ACFblogpost {
        sekcjaHero {
          tytul
          ctaUrl
          ctaEtykieta
          obrazHero {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        sekcjaPowtarzalna {
          tekst
          tytul
          wideo
          obraz {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        sekcjaOpis
      }
      date(locale: "pl-pl", formatString: "DD MMMM YYYY")
    }
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-self: flex-start;
  width: 70%;
  margin-bottom: 100px;
`
const StyledDescription = styled.h4`
  font-family: Montserrat;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 60px;
`
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 50px; */
`
const StyledIframe = styled.iframe`
  /* width: 100%; */
  height: 540px;
`
const StyledImage = styled(GatsbyImage)`
  height: 50%;
  width: 50%;
`

const StyledTitle = styled.h3`
  margin-top: 50px;
`
