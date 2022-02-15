import React from "react"
import styled from "styled-components"
import styles from "../styles"
import { default as SlickSlider } from "react-slick"
import "slick-carousel/slick/slick.css"
import FullBleedWrapper from "./full-bleed-wrapper"
import Title from "./title"

const Slider = ({
  children,
  title,
  background,
  somePadding,
  noMargin,
  single,
  marginBottom,
}) => {
  const settings = {
    infinite: false,
    dots: false,
    speed: 1000,
    slidesToShow: single ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <StyledArrow right />,
    prevArrow: <StyledArrow left />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: single ? 1 : 2,
          slidesToScroll: single ? 1 : 2,
          nextArrow: <StyledArrowMobile right single={single} />,
          prevArrow: <StyledArrowMobile left single={single} />,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <StyledArrowMobile right single={single} />,
          prevArrow: <StyledArrowMobile left single={single} />,
          centerMode: false,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <StyledArrowMobile right single={single} />,
          prevArrow: <StyledArrowMobile left single={single} />,
          centerMode: false,
          adaptiveHeight: true,
        },
      },
    ],
  }
  return (
    <FullBleedWrapper
      background={background}
      somePadding
      noMargin={noMargin}
      marginBottom={marginBottom}
      somePadding={somePadding}
    >
      <Title title={title} />
      <SlickSlider {...settings}>{children}</SlickSlider>
    </FullBleedWrapper>
  )
}

export default Slider

/* STYLED COMPONENTS */

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
const StyledArrowMobile = styled.div`
  position: absolute;
  bottom: ${props => (props.single ? "-1%" : "-4%")};
  left: ${props => (props.left ? "40%" : null)};
  right: ${props => (props.right ? "40%" : null)};
  border-top: 2px solid ${styles.color.primary};
  border-right: 2px solid ${styles.color.primary};
  transform: ${props => (props.left ? "rotate(-135deg)" : "rotate(45deg)")};
  height: 20px;
  width: 20px;
  z-index: 100;
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    bottom: ${props => (props.single ? "0" : "-8%")};
  }
`
