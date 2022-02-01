import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"

const FullBleedMain = ({ src, alt, logo, altLogo, background }) => {
  return (
    <StyledWrapper>
      <StyledStaticImage image={src} alt={alt} />
      <StyledBox>
        <StyledBoxBackground background={background} />
        <StyledBoxContent>
          <StyledStaticLogo image={logo} alt={altLogo} />
          <StyledTitle>
            TRENER HIPNOZY, <br />
            HIPNOTERAPEUTA
          </StyledTitle>
          <Button label="Więcej" url={"/o-mnie/"} />
        </StyledBoxContent>
      </StyledBox>
    </StyledWrapper>
  )
}

export default FullBleedMain

FullBleedMain.propTypes = {
  src: PropTypes.object,
  label: PropTypes.string,
  text: PropTypes.string,
  main: PropTypes.bool,
}

FullBleedMain.defaultProps = {
  src: {},
  label: "",
  text: "",
  main: false,
}

/* STYLED COMPONENTS */

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 3vw;
  font-size: 72px;
  font-weight: 400;
  line-height: 80px;
  color: ${styles.color.white};

  @media only screen and (max-width: 1200px) {
    font-size: 42px;
    line-height: 50px;
  }
`

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  grid-column: 1 / -1;
`

const StyledStaticImage = styled(GatsbyImage)`
  max-width: 100%;
  position: relative;
  height: 780px;
  @media only screen and (max-width: 1200px) {
    height: 540px;
  }
`

const StyledBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  left: 8%;
  top: 15%;
  padding: 3vw 4vw;
`

const StyledBoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 3;
`

const StyledStaticLogo = styled(GatsbyImage)`
  width: 14vw;
  margin: 1.7vw 0;
`

const StyledBoxBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
  mix-blend-mode: multiply;
  opacity: 0.89;
  z-index: 1;
`
