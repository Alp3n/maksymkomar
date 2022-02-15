import * as React from "react"
import { useMediaQuery } from "react-responsive"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"
import Title from "./title"

const TwoColumns = ({
  title,
  textLeft,
  textRight,
  textButtonLabel,
  textButtonUrl,
  cta,
  id,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })
  return (
    <FullBleedWrapper id={id} height={isMobile ? "small" : "medium"}>
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
      {cta ? (
        <StyledFlex>
          <Button label={textButtonLabel} url={textButtonUrl} />
        </StyledFlex>
      ) : null}
    </FullBleedWrapper>
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

const StyledTextsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  margin-bottom: 60px;

  @media only screen and (max-width: 1200px) {
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
  @media only screen and (max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`
const StyledFlex = styled.div`
  @media only screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`
