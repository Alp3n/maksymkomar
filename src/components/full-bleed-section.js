import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"

const FullBleedSection = ({
  hero,
  altHero,
  logo,
  altLogo,
  background,
  cta,
  ctaLabel,
  ctaUrl,
  blend,
  title,
  text,
  wide,
}) => {
  return (
    <StyledWrapper wide={wide}>
      <StyledStaticImage image={hero} alt={altHero} />
      <StyledBox wide={wide}>
        <StyledBoxBackground background={background} blend={blend} />
        <StyledBoxContent wide={wide}>
          {title ? <StyledTitle>{title}</StyledTitle> : null}
          {text ? (
            <StyledText blend={blend} logo={logo}>
              {text}
            </StyledText>
          ) : null}
          {cta ? <Button label={ctaLabel} url={ctaUrl} /> : null}
          {logo ? <StyledStaticLogo image={logo} alt={altLogo} /> : null}
        </StyledBoxContent>
      </StyledBox>
    </StyledWrapper>
  )
}

export default FullBleedSection

/* FullBleedSection.propTypes = {
  hero: PropTypes.object,
  altHero: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  logo: PropTypes.object,
  altLogo: PropTypes.string,
  background: PropTypes.string,
  cta: PropTypes.bool,
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
  blend: PropTypes.bool,
}

FullBleedSection.defaultProps = {
  hero: {},
  altHero: "",
  logo: null,
  altLogo: "",
  title: "",
  text: "",
  background: "",
  cta: false,
  ctaLabel: "Więcej",
  ctaUrl: "/",
  blend: false,
} */

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  grid-column: 1 / -1;
  margin-bottom: ${props => (props.wide ? "200px" : "150px")};
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
  padding: 60px 80px;
  min-width: ${props => (props.wide ? "900px" : "none")};
  min-height: 600px;
`

const StyledBoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: ${props => (props.wide ? "600px" : "500px")};
  z-index: 3;
`

const StyledTitle = styled.h1`
  margin-bottom: 40px;
  color: ${props => (props.blend ? styles.color.white : styles.color.primary)};
`

const StyledText = styled.p`
  margin-bottom: 40px;
  font-size: ${props => (props.logo ? "1.2rem" : null)};
  color: ${props => (props.blend ? styles.color.white : styles.color.primary)};
`

const StyledBoxBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => (props.background ? props.background : "#f2f2f2")};
  mix-blend-mode: ${props => (props.blend ? "multiply" : "none")};
  opacity: 0.89;
  z-index: 1;
`
const StyledStaticLogo = styled(GatsbyImage)`
  width: 260px;
  margin-bottom: 35px;
`
