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
  /* width: 50%; */
  @media only screen and (max-width: 1100px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`

const StyledTextsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  margin-bottom: 60px;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }
`

const StyledTextBox = styled.div`
  padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")};
  @media only screen and (max-width: 1100px) {
    padding-left: 0;
    padding-right: 0;
  }

`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`
