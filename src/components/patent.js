import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import { GatsbyImage } from "gatsby-plugin-image"

const Patent = ({ src, alt }) => {
  return (
    <StyledWrapper>
      <StyledBox>
        <StyledTitle>
          Patent
          <br />
          “The Maksym Komar’s
          <br />
          Method”
        </StyledTitle>
        <Button label="Zobacz" />
      </StyledBox>
      <StyledBox>
        <StyledImage image={src} alt={alt} />
      </StyledBox>
    </StyledWrapper>
  )
}

export default Patent

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  place-items: center;
  margin-bottom: 80px;
`

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 40px;
  font-size: 50px;
  font-weight: 400;
  line-height: 80px;
  color: ${props => props.color};
  text-align: center;
`
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled(GatsbyImage)`
  width: 300px;
  height: auto;
`
