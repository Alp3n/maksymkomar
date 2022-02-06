import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const TwoColumns4Items = ({
  title,
  items,
  textButtonLabel,
  textButtonUrl,
  id,
}) => {
  return (
    <StyledWrapper id={id}>
      <StyledTitle>{title}</StyledTitle>
      <StyledTextsBox>
        {items.map(i => (
          <StyledTextBox>
            <h4>{i.title}</h4>
            <p>{i.text}</p>
            <Button href={i.ctaUrl} label={i.ctaLabel} plain />
          </StyledTextBox>
        ))}
        <StyledVerticalLine />
      </StyledTextsBox>
      <StyledFlex>
        <Button label={textButtonLabel} url={textButtonUrl} />
      </StyledFlex>
    </StyledWrapper>
  )
}

export default TwoColumns4Items

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
  margin: 100px 0;
  scroll-margin-top: 150px;
`

const StyledTitle = styled.h1`
  margin-bottom: 100px;
  width: 50%;
`

const StyledTextsBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;
  gap: 100px 200px;
`

const StyledTextBox = styled.div`
  width: 80%;
  /* padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")}; */
`
const StyledVerticalLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  border-left: 1px solid ${styles.color.primary};
  height: 100%;
`
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
