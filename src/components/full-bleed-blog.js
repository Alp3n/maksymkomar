import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"

const FullBleedBlog = ({ hero, altHero, title, date, views, categories }) => {
  return (
    <StyledWrapper>
      <StyledStaticImage image={hero} alt={altHero} />
      <StyledBox>
        <StyledBoxBackground />
        <StyledBoxContent>
          <StyledBlog>BLOG</StyledBlog>
          <StyledStatistics>
            <p>{date}</p>
            <StyledFlex>
              {/* EYE ICON */}
              {views}
            </StyledFlex>
          </StyledStatistics>
          <StyledTitle>{title}</StyledTitle>
          <StyledFlex>
            {categories &&
              categories.map(c => (
                <StyledLink key={c.name} to={`blog/=?${c.name}`}>
                  {c.name}
                </StyledLink>
              ))}
          </StyledFlex>
        </StyledBoxContent>
      </StyledBox>
    </StyledWrapper>
  )
}

export default FullBleedBlog

/* FullBleedBlog.propTypes = {
  hero: PropTypes.object,
  altHero: PropTypes.string,
  title: PropTypes.string,
}

FullBleedBlog.defaultProps = {
  hero: {},
  altHero: "",
  title: "",
} */

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
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
const StyledBoxBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${styles.color.lightBlue};
  opacity: 0.89;
  z-index: 1;
`
const StyledBlog = styled.h4`
  width: max-content;
  padding-bottom: 20px;
  border-bottom: 1px solid ${styles.color.primary};
`
const StyledStatistics = styled.div`
  display: flex;
`

const StyledFlex = styled.div`
  display: flex;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${styles.color.primary};
  font-weight: 300;
  font-style: italic;
`
