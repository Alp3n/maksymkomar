import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

const AudiotherapyPreview = () => {
  const data = useStaticQuery(graphql`
    query AudtiotherapyPreview {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { databaseId: { eq: 115 } } } }
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
            audioterapia {
              productSection {
                textLeft {
                  availability
                  duration
                  format
                  price
                }
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  }
  return (
    <StyledWrapper>
      <StyledTitleMain>Audioterapie</StyledTitleMain>
      <Slider {...settings}>
        {data.allWpPost.edges.map(p => (
          <StyledBlogItem key={p.node.id}>
            <StyledImageWrapper>
              <StyledImage
                image={
                  p.node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={p.node.featuredImage.node.localFile.altText}
              />
            </StyledImageWrapper>
            <StyledTitle>{p.node.title}</StyledTitle>
            <StyledDesc>
              <span>
                <strong>Format</strong> -{" "}
                {p.node.audioterapia.productSection.textLeft.format}
              </span>
              <span>
                <strong>Długość</strong> -{" "}
                {p.node.audioterapia.productSection.textLeft.duration}
              </span>
              <span>
                <strong>Cena</strong> -{" "}
                {p.node.audioterapia.productSection.textLeft.price}
              </span>
            </StyledDesc>
            <Button to={`/blog/${p.node.slug}`} label="Więcej" />
          </StyledBlogItem>
        ))}
      </Slider>
      {/* <StyledButtonWrapper>
        <Button label="Zobacz wszystkie" url={"/blog/"} />
      </StyledButtonWrapper> */}
    </StyledWrapper>
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
  margin-bottom: 60px;
  padding: 0 20px;
`
const StyledImageWrapper = styled.div`
  position: relative;
  max-width: 400px;
  height: auto;
  margin-bottom: 30px;
`
const StyledImage = styled(GatsbyImage)``

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
