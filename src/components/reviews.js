import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const Reviews = ({ reviews }) => {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }
  return (
    <StyledWrapper>
      <StyledTitle>Opinie</StyledTitle>
      <Slider {...settings}>
        {reviews.map(r => (
          <StyledItem key={r.src}>
            <StyledPortraitWrapper>
              <StyledPortraitBackground />
              <StyledPortraitImage image={r.src} />
            </StyledPortraitWrapper>

            <StyledName>{r.name}</StyledName>
            <StyledOpinion>{r.opinion}</StyledOpinion>
          </StyledItem>
        ))}
      </Slider>
    </StyledWrapper>
  )
}
export default Reviews

Reviews.propTypes = {}

Reviews.defaultProps = {}

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  width: 100%;
  margin: 5vw 0;
`

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 4vw;
  font-size: 4vw;
  font-weight: 400;
  line-height: 4.4vw;
  color: ${styles.color.primary};
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 2vw; */
`

const StyledPortraitWrapper = styled.div`
  position: relative;
  width: 8vw;
  height: 8vw;
  margin-bottom: 3vw;
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

const StyledName = styled.p`
  font-family: ${styles.font.family.montserrat};
  font-size: 32px;
  margin-bottom: 3vw;
`

const StyledOpinion = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 33px;
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
