import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import { Link } from "gatsby"
import Slider from "react-slick"

const BlogPreview = ({ posts }) => {
  const settings = {
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: 3,
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
      <StyledTitleMain>Blog</StyledTitleMain>
      {/* <StyledPostsWrapper> */}
      <Slider {...settings}>
        {posts.map(p => (
          <StyledBlogItem key={p.node.id}>
            <StyledImageWrapper>
              <StyledCategory>
                {p.node.categories.nodes.map(c => c.name)}
              </StyledCategory>
              <StyledImage
                image={
                  p.node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={p.node.title}
              />
            </StyledImageWrapper>
            <StyledTitle>{p.node.title}</StyledTitle>
            <StyledDesc
              dangerouslySetInnerHTML={{ __html: p.node.excerpt }}
            ></StyledDesc>
            <StyledLink to={`blog/${p.node.slug}`}>Więcej</StyledLink>
          </StyledBlogItem>
        ))}
      </Slider>
      {/* </StyledPostsWrapper> */}
      <StyledButtonWrapper>
        <Button label="Zobacz wszystkie" />
      </StyledButtonWrapper>
    </StyledWrapper>
  )
}

export default BlogPreview

BlogPreview.propTypes = {}

BlogPreview.defaultProps = {}

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

const StyledPostsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
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
const StyledCategory = styled.div`
  position: absolute;
  bottom: 8%;
  left: -15px;
  padding: 5px 10px;
  background-color: ${styles.color.lightBlue};
  z-index: 2;
`
const StyledImage = styled(GatsbyImage)``

const StyledTitle = styled.h4`
  font-family: ${styles.font.family.montserrat};
`

const StyledDesc = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 33px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${styles.color.primary};
  z-index: 3;
`
const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
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
