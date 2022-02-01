import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"

const FullBleedSection = ({
  src,
  altHero,
  background,
  children,
  cta,
  blend,
}) => {
  return (
    <StyledWrapper>
      <StyledStaticImage image={src} alt={altHero} />
      <StyledBox>
        <StyledBoxBackground background={background} blend={blend} />
        <StyledBoxContent>
          {/* <StyledTitle>
            TRENER HIPNOZY, <br />
            HIPNOTERAPEUTA
          </StyledTitle> */}
          {children}
          {cta ? <Button label="Więcej" url={"/page-2/"} /> : null}
        </StyledBoxContent>
      </StyledBox>
    </StyledWrapper>
  )
}

export default FullBleedSection

FullBleedSection.propTypes = {
  src: PropTypes.object,
  label: PropTypes.string,
  text: PropTypes.string,
  main: PropTypes.bool,
}

FullBleedSection.defaultProps = {
  src: {},
  label: "",
  text: "",
  main: false,
}

/* STYLED COMPONENTS */

// const StyledTitle = styled.h1`
//   white-space: nowrap;
//   margin-bottom: 3vw;
//   font-size: 4vw;
//   font-weight: 400;
//   line-height: 4.4vw;
//   color: ${styles.color.white};
// `

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  grid-column: 1 / -1;
`

const StyledStaticImage = styled(GatsbyImage)`
  max-width: 100%;
  position: relative;
  min-height: 670px;
`

const StyledBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  left: 8%;
  top: 15%;
  padding: 3vw 6vw;
  min-height: 31.5vw;
`

const StyledBoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
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
  mix-blend-mode: ${props => (props.blend ? "multiply" : "none")};
  opacity: 0.89;
  z-index: 1;
`
