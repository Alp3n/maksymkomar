import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import FullBleedWrapper from "./full-bleed-wrapper"

const HowSession = ({ videos, title, text }) => {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: false,
        },
      },
    ],
  }
  return (
    <FullBleedWrapper>
      <StyledTitle>{title}</StyledTitle>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <Slider {...settings}>
        {videos.map(v => (
          <StyledItem key={v.url}>
            <StyledIframe src={v.url} allowFullScreen />
            <StyledName>{v.tytul}</StyledName>
          </StyledItem>
        ))}
      </Slider>
    </FullBleedWrapper>
  )
}

export default HowSession

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

const StyledName = styled.h5`
  font-family: ${styles.font.family.montserrat};
  margin-bottom: 40px;
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

const StyledIframe = styled.iframe`
  width: 300px;
  height: 250px;
  border: none;
`
