import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Slider from "./slider"
import "slick-carousel/slick/slick.css"
import FullBleedWrapper from "./full-bleed-wrapper"
import Title from "./title"

const HowSession = ({ videos, title, text }) => {
  return (
    <FullBleedWrapper noMargin somePadding>
      <Title title={title} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <Slider>
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
  /* padding: 0 40px; */
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
  width: 325px;
  height: 250px;
  border: none;

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`
