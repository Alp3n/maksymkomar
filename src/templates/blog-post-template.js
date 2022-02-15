import * as React from "react"
import { graphql } from "gatsby"
import styles from "../styles"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullBleed from "../components/full-bleed"
import styled from "styled-components"
import BlogPreview from "../components/blog-preview"
import FullBleedMobile from "../components/full-bleed-mobile"
import { useMediaQuery } from "react-responsive"
import FullBleedWrapper from "../components/full-bleed-wrapper"

const BlogPostTemplate = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })

  return (
    <Layout>
      <Seo title={data.wpPost.title} />
      {isMobile ? (
        <FullBleedMobile
          hero={
            data.wpPost.ACFblogpost.sekcjaHer0.obrazHero.localFile
              .childImageSharp.gatsbyImageData
          }
          altHero={data.wpPost.ACFblogpost.sekcjaHer0.obrazHero.altText}
          title={data.wpPost.ACFblogpost.sekcjaHer0.tytul}
          categories={data.wpPost.categories.nodes}
          background={styles.color.lightBlue}
          heading={"BLOG"}
          date={data.wpPost.date}
          smallTitle
          noMargin
        />
      ) : (
        <FullBleed
          hero={
            data.wpPost.ACFblogpost.sekcjaHer0.obrazHero.localFile
              .childImageSharp.gatsbyImageData
          }
          altHero={data.wpPost.ACFblogpost.sekcjaHer0.obrazHero.altText}
          title={data.wpPost.ACFblogpost.sekcjaHer0.tytul}
          categories={data.wpPost.categories.nodes}
          background={styles.color.lightBlue}
          heading={"BLOG"}
          date={data.wpPost.date}
          smallTitle
        />
      )}
      <FullBleedWrapper>
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
      </FullBleedWrapper>
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
        sekcjaHer0 {
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
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`
const StyledDescription = styled.h4`
  /* font-family: Montserrat; */
  font-weight: 300;
  line-height: 1.4;
  /* margin-bottom: 60px; */
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 300;
  }
`
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 50px; */
`
const StyledIframe = styled.iframe`
  /* width: 100%; */
  height: 540px;
  @media only screen and (max-width: 1200px) {
    height: 420px;
  }
  @media only screen and (max-width: 600px) {
    height: auto;
  }
`
const StyledImage = styled(GatsbyImage)`
  height: 50%;
  width: 80%;
  margin-bottom: 30px;
  @media only screen and (max-width: 1200px) {
    height: 80%;
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    height: 90%;
    width: 100%;
  }
`

const StyledTitle = styled.h3`
  margin-top: 50px;
`
