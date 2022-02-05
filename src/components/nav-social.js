import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const NavSocial = ({ socialmedia }) => {
  return (
    <StyledWrapper>
      {socialmedia.map(s => (
        <StyledLink
          key={s.url}
          href={s.url}
          target="_blank"
          rel="noopener norefferer"
        >
          <StyledLogo
            image={s.icon.localFile.childImageSharp.gatsbyImageData}
            alt={s.icon.altText}
          />
        </StyledLink>
      ))}
    </StyledWrapper>
  )
}

/* NavSocial.propTypes = {
  socialmedia: PropTypes.array,
} */

export default NavSocial

/* STYLED COMPONENTS */

const StyledLink = styled.a`
  z-index: 5;
`

const StyledLogo = styled(GatsbyImage)`
  width: 31px;
  height: 31px;
  z-index: 4;
`

const StyledWrapper = styled.div`
  position: fixed;
  top: 45%;
  right: 30px;
  display: grid;
  gap: 16px;
  z-index: 3;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`
