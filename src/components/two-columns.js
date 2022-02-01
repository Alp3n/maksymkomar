import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const TwoColumns = ({
  textTitle,
  textLeft,
  textRight,
  textButtonLabel,
  textButtonUrl,
  cta,
}) => {
  return (
    <StyledWrapper>
      <StyledTitle>{textTitle}</StyledTitle>
      <StyledTextsBox>
        <StyledTextBox right>{textLeft}</StyledTextBox>
        <StyledVerticalLine />
        <StyledTextBox left>{textRight}</StyledTextBox>
      </StyledTextsBox>
      {cta ? (
        <Button label={textButtonLabel} url={textButtonUrl} marginTop="2vw" />
      ) : null}
    </StyledWrapper>
  )
}

export default TwoColumns

TwoColumns.propTypes = {
  textTitle: PropTypes.string,
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
  textButtonLabel: PropTypes.string,
  textButtonUrl: PropTypes.string,
}

TwoColumns.defaultProps = {
  textTitle: "Tytuł",
  textLeft: "Tekst po lewej stronie",
  textRight: "Tekst po prawej stronie",
  textButtonLabel: "Więcej",
  textButtonUrl: "",
}

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5vw 0;
`

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 3vw;
  font-size: 72px;
  font-weight: 400;
  line-height: 80px;
  color: ${styles.color.primary};
`

const StyledTextsBox = styled.div`
  display: grid;
  grid-template-columns: 35vw 1px 35vw;
`

const StyledTextBox = styled.div`
  padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")};
  font-size: 20px;
  line-height: 35px;
  font-weight: 300;
`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};
`
