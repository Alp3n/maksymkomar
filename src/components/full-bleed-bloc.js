import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"

const FullBleedBlog = ({ hero, altHero, title }) => {
  return (
    <StyledWrapper>
      <StyledStaticImage image={hero} alt={altHero} />
      <StyledBox>
        <StyledBoxBackground />
        <StyledBoxContent>
          <StyledTitle>{title}</StyledTitle>
        </StyledBoxContent>
      </StyledBox>
    </StyledWrapper>
  )
}

export default FullBleedBlog

FullBleedBlog.propTypes = {
  hero: PropTypes.object,
  altHero: PropTypes.string,
  title: PropTypes.string,
}

FullBleedBlog.defaultProps = {
  hero: {},
  altHero: "",
  title: "",
}

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  grid-column: 1 / -1;
  margin-bottom: 150px;
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
  background: ${styles.color.lightBlue};
  mix-blend-mode: multiply;
  opacity: 0.89;
  z-index: 1;
`
