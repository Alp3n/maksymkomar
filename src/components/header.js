import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import MenuItem from "./menu-item"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ src, alt }) => (
  <StyledHeader>
    <StyledDiv>
      <Link to="/">
        <StyledLogo image={src} alt={alt} />
      </Link>
      <StyledNav>
        <MenuItem to="/o-mnie/" label="główna" />
        <MenuItem to="/seanse-terapeutyczne/" label="Seanse terapeutyczne" />
        <MenuItem
          to="/szkolenia-dla-terapeutow/"
          label="Szkolenia dla terapeutów"
        />
        <MenuItem to="/kontakt/" label="kontakt" />
      </StyledNav>
    </StyledDiv>
  </StyledHeader>
)

/* Header.propTypes = {}

Header.defaultProps = {} */

export default Header

/* STYLED COMPONENTS */

const StyledNav = styled.nav``

const StyledDiv = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns:
    1fr
    min(1450px, 100%)
    1fr;
  padding: 1.0875rem 1.45rem;
  background: white;
  z-index: 1000;
`

const StyledLogo = styled(GatsbyImage)`
  width: 240px;
  height: 80px;
`
