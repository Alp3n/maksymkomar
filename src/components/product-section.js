import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"
import Title from "./title"

const ProductSection = ({
  title,
  textLeft,
  textRight,
  ctaLabel,
  ctaUrl,
  id,
}) => {
  return (
    <FullBleedWrapper id={id}>
      <Title title={title} />
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
      <Button label={ctaLabel} url={ctaUrl} disabled />
    </FullBleedWrapper>
  )
}

export default ProductSection

/* ProductSection.propTypes = {
  title: PropTypes.string,
  textLeft: PropTypes.object,
  textRight: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
}

ProductSection.defaultProps = {
  title: "Tytuł",
  textLeft: {},
  textRight: "Tekst po prawej stronie",
  ctaLabel: "",
  ctaUrl: "",
} */

/* STYLED COMPONENTS */

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
  display: flex;
  flex-direction: column;
  padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")};
`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};
`
