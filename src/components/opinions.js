import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

const Opinions = ({ opinions }) => {
  const settings = {
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <StyledArrow right />,
    prevArrow: <StyledArrow left />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }
  return (
    <StyledWrapper>
      <StyledTitle>Opinie</StyledTitle>
      <Slider {...settings}>
        {opinions.map(r => (
          <StyledItem key={r.name}>
            <StyledPortraitWrapper>
              <StyledPortraitBackground />
              <StyledPortraitImage
                image={r.image.localFile.childImageSharp.gatsbyImageData}
                alt={r.image.altText}
              />
            </StyledPortraitWrapper>

            <StyledName>{r.name}</StyledName>
            <StyledOpinion>{r.opinion}</StyledOpinion>
          </StyledItem>
        ))}
      </Slider>
    </StyledWrapper>
  )
}
export default Opinions

Opinions.propTypes = {}

Opinions.defaultProps = {}

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
`

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 60px;
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`

const StyledPortraitWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 40px;
`

const StyledPortraitBackground = styled.div`
  position: absolute;
  background-color: ${styles.color.lightOrange};
  border-radius: 100%;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const StyledPortraitImage = styled(GatsbyImage)`
  position: absolute;
  background-color: ${styles.color.grey};
  border-radius: 100%;
  left: 1.5vw;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const StyledName = styled.h4`
  font-family: ${styles.font.family.montserrat};
  margin-bottom: 40px;
`

const StyledOpinion = styled.p``

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
