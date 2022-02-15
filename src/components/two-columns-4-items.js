import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"

const TwoColumns4Items = ({
  title,
  items,
  textButtonLabel,
  textButtonUrl,
  id,
}) => {
  return (
    <FullBleedWrapper id={id}>
      <StyledTitle>{title}</StyledTitle>
      <StyledTextsBox>
        {items.map(i => (
          <StyledTextBox key={i.tytul}>
            <h4>{i.tytul}</h4>
            <div dangerouslySetInnerHTML={{ __html: i.tekst }} />
            <Button href={i.ctaUrl} label={i.ctaEtykieta} plain />
          </StyledTextBox>
        ))}
        <StyledVerticalLine />
      </StyledTextsBox>
      <StyledFlex>
        <Button
          label={"Zobacz wszystkie kursy"}
          url={"https://prohypnoinstitute.com/"}
        />
      </StyledFlex>
    </FullBleedWrapper>
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
  @media only screen and (max-width: 1100px) {
    margin: 60px 0;
  }
  @media only screen and (max-width: 600px) {
    margin: 30px 0;
  }
`

const StyledTitle = styled.h1`
  margin-bottom: 100px;
  width: 60%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
`

const StyledTextsBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;
  gap: 100px 200px;
  @media only screen and (max-width: 1200px) {
    gap: 60px;
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 600px) {
    gap: 30px;
  }
`

const StyledTextBox = styled.div`
  width: 80%;
  /* padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")}; */
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`
const StyledVerticalLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  border-left: 1px solid ${styles.color.primary};
  height: 100%;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
