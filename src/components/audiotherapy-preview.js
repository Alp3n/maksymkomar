import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "./slider"
import FullBleedWrapper from "./full-bleed-wrapper"

const AudiotherapyPreview = ({ grid }) => {
  const data = useStaticQuery(graphql`
    query AudtiotherapyPreview {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { databaseId: { eq: 39 } } } }
        }
      ) {
        edges {
          node {
            id
            excerpt
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(quality: 100)
                  }
                }
                altText
              }
            }
            title
            slug
            categories {
              nodes {
                name
              }
            }
            ACFaudioterapia {
              sekcjaSugestia {
                tytul
                dlugosc
                format
                cena
              }
            }
          }
        }
      }
    }
  `)

  const settings = {
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <StyledArrow right />,
    prevArrow: <StyledArrow left />,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          // dots: true,
          centerMode: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          // dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          // dots: true,
          centerMode: false,
        },
      },
    ],
  }
  return (
    <FullBleedWrapper>
      <StyledTitleMain>Audioterapie</StyledTitleMain>
      {grid ? (
        <StyledGrid>
          {data.allWpPost.edges.map(p => (
            <StyledBlogItem key={p.node.id}>
              <StyledImageWrapper>
                <StyledImage
                  image={
                    p.node.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={``}
                  objectFit="cover"
                />
              </StyledImageWrapper>
              <StyledTitle>{p.node.title}</StyledTitle>
              <StyledDesc>
                <span>
                  <strong>Format</strong> -{" "}
                  {p.node.ACFaudioterapia.sekcjaSugestia.format}
                </span>
                <span>
                  <strong>D??ugo????</strong> -{" "}
                  {p.node.ACFaudioterapia.sekcjaSugestia.dlugosc}
                </span>
                <span>
                  <strong>Cena</strong> -{" "}
                  {p.node.ACFaudioterapia.sekcjaSugestia.cena}
                </span>
              </StyledDesc>
              <Button url={`/audioterapie/${p.node.slug}`} label="Wi??cej" />
            </StyledBlogItem>
          ))}
        </StyledGrid>
      ) : (
        <Slider {...settings}>
          {data.allWpPost.edges.map(p => (
            <StyledBlogItem key={p.node.id}>
              <StyledImageWrapper>
                <StyledImage
                  image={
                    p.node.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={``}
                  objectFit="cover"
                />
              </StyledImageWrapper>
              <StyledTitle>{p.node.title}</StyledTitle>
              <StyledDesc>
                <span>
                  <strong>Format</strong> -{" "}
                  {p.node.ACFaudioterapia.sekcjaSugestia.format}
                </span>
                <span>
                  <strong>D??ugo????</strong> -{" "}
                  {p.node.ACFaudioterapia.sekcjaSugestia.dlugosc}
                </span>
                <span>
                  <strong>Cena</strong> -{" "}
                  {p.node.ACFaudioterapia.sekcjaSugestia.cena}
                </span>
              </StyledDesc>
              <StyledFlex>
                <Button url={`/audioterapie/${p.node.slug}`} label="Wi??cej" />
              </StyledFlex>
            </StyledBlogItem>
          ))}
        </Slider>
      )}
    </FullBleedWrapper>
  )
}

export default AudiotherapyPreview

/* BlogPreview.propTypes = {}

BlogPreview.defaultProps = {} */

/* STYLED COMPONENTS */
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`
const StyledTitleMain = styled.h1`
  margin-bottom: 60px;
`

const StyledBlogItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`
const StyledImageWrapper = styled.div`
  position: relative;
  /* width: auto;
  height: 260px; */
  margin-bottom: 30px;
`
const StyledImage = styled(GatsbyImage)`
  width: 350px;
  height: 270px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const StyledTitle = styled.h5`
  font-family: ${styles.font.family.montserrat};
`

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`
const StyledArrow = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.left ? "-50px" : null)};
  right: ${props => (props.right ? "-50px" : null)};
  border-top: 2px solid ${styles.color.primary};
  border-right: 2px solid ${styles.color.primary};
  transform: ${props => (props.left ? "rotate(-135deg)" : "rotate(45deg)")};
  height: 30px;
  width: 30px;
  z-index: 100;
  cursor: pointer;
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const StyledFlex = styled.div`
  place-self: center;
`
