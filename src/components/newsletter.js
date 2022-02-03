import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const Newsletter = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledTitle>Newsletter</StyledTitle>
        <Button label="Zapisz się" />
      </StyledContent>
    </StyledWrapper>
  )
}

export default Newsletter

Newsletter.propTypes = {}

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr min(1450px, 100%) 1fr;
  width: 100%;
  background-color: ${styles.color.grey};
  padding: 80px 0;
  margin-bottom: 100px;
`

const StyledContent = styled.div`
  grid-column: 2;
`
const StyledTitle = styled.h1`
  margin-bottom: 60px;
`
