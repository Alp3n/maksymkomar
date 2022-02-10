import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

const Opinions = ({ opinions, single }) => {
  const settings = {
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: single ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <StyledArrow right />,
    prevArrow: <StyledArrow left />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: single ? 1 : 2,
          slidesToScroll: single ? 1 : 2,
          arrows: false,
          // dots: true,
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
    <StyledWrapper>
      <StyledTitle>Opinie</StyledTitle>
      <Slider {...settings}>
        {opinions.map(o =>
          single ? (
            <StyledItemSingle key={o.imie}>
              <StyledName>{o.imie}</StyledName>
              <StyledOpinion
                single={single}
                dangerouslySetInnerHTML={{ __html: o.opinia }}
              ></StyledOpinion>
            </StyledItemSingle>
          ) : (
            <StyledItem key={o.imie}>
              <StyledPortraitWrapper>
                <StyledPortraitBackground />
                <StyledPortraitImage
                  image={
                    o?.obrazPortret?.localFile?.childImageSharp?.gatsbyImageData
                  }
                  alt={o?.obrazPortret?.altText ? o.obrazPortret.altText : ""}
                />
              </StyledPortraitWrapper>

              <StyledName>{o?.imie}</StyledName>
              <StyledOpinion
                dangerouslySetInnerHTML={{ __html: o.opinia }}
              ></StyledOpinion>
            </StyledItem>
          )
        )}
      </Slider>
    </StyledWrapper>
  )
}
export default Opinions

/* Opinions.propTypes = {}

Opinions.defaultProps = {} */

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
  @media only screen and (max-width: 1000px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 60px;
  @media only screen and (max-width: 1100px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  @media only screen and (max-width: 600px) {
    padding: 0 8px;
  }
`

const StyledPortraitWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
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
  grid-area: name;
  margin-bottom: 40px;
  font-family: ${styles.font.family.montserrat};
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`

const StyledOpinion = styled.p`
  grid-area: opinion;
  ${props =>
    props.single
      ? `column-count: 2;
  column-gap: 40px;`
      : null}

  @media only screen and (max-width: 1100px) {
    ${props => (props.single ? `column-count: 1; ` : null)}
  }
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
const StyledItemSingle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 1fr 1fr;
  grid-template-areas: "name opinion
  opinion opinion
  opinion opinion";
`
