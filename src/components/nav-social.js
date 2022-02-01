import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const NavSocial = ({ ig, yt, fb }) => {
  return <StyledWrapper></StyledWrapper>
}

NavSocial.propTypes = {
  ig: PropTypes.string,
  fb: PropTypes.string,
  yt: PropTypes.string,
}

export default NavSocial

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  right: 30px;
  height: 120px;
  width: 40px;
  background-color: red;
  z-index: 1000;
`
