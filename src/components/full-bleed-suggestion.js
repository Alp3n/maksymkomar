import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"

const FullBleedSuggestion = ({
  image,
  alt,
  ctaLabel,
  ctaUrl,
  duration,
  format,
  price,
  title,
}) => {
  return (
    <StyledWrapper>
      <StyledStaticImage image={image} alt={alt} />
      <StyledBox>
        <StyledBoxBackground />
        <StyledBoxContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledTextBox>
            <span>
              <strong>Format</strong> - {format}
            </span>
            <span>
              <strong>Długość</strong> - {duration}
            </span>
            <span>
              <strong>Cena</strong> - {price}
            </span>
          </StyledTextBox>
          <Button label={ctaLabel} url={ctaUrl} />
        </StyledBoxContent>
      </StyledBox>
    </StyledWrapper>
  )
}

export default FullBleedSuggestion

/* FullBleedSuggestion.propTypes = {
  hero: PropTypes.object,
  altHero: PropTypes.string,
  title: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
}

FullBleedSuggestion.defaultProps = {
  hero: {},
  altHero: "",
  title: "",
  ctaLabel: "Więcej",
  ctaUrl: "/",
} */

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  grid-column: 1 / -1;
  margin-bottom: 150px;
  color: ${styles.color.white};
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
  min-height: 600px;
`

const StyledBoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  z-index: 3;
`

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

const StyledTitle = styled.h1`
  margin-bottom: 40px;
`

const StyledBoxBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${styles.color.lightOrange};
  mix-blend-mode: multiply;
  opacity: 0.89;
  z-index: 1;
`
