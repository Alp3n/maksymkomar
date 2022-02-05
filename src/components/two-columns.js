import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const TwoColumns = ({
  title,
  textLeft,
  textRight,
  textButtonLabel,
  textButtonUrl,
  cta,
  id,
}) => {
  return (
    <StyledWrapper id={id}>
      <StyledTitle>{title}</StyledTitle>
      <StyledTextsBox>
        <StyledTextBox
          right
          dangerouslySetInnerHTML={{ __html: textLeft }}
        ></StyledTextBox>
        <StyledVerticalLine />
        <StyledTextBox
          left
          dangerouslySetInnerHTML={{ __html: textRight }}
        ></StyledTextBox>
      </StyledTextsBox>
      {cta ? <Button label={textButtonLabel} url={textButtonUrl} /> : null}
    </StyledWrapper>
  )
}

export default TwoColumns

/* TwoColumns.propTypes = {
  title: PropTypes.string,
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
  textButtonLabel: PropTypes.string,
  textButtonUrl: PropTypes.string,
}

TwoColumns.defaultProps = {
  textLeft: "Tekst po lewej stronie",
  textRight: "Tekst po prawej stronie",
  textButtonLabel: "Więcej",
  textButtonUrl: "",
} */

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  scroll-margin-top: 150px;
`

const StyledTitle = styled.h1`
  margin-bottom: 60px;
  width: 50%;
`

const StyledTextsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  margin-bottom: 60px;
`

const StyledTextBox = styled.div`
  padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")};
`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};
`
