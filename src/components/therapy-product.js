import React from "react"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const TherapyProduct = ({ sekcja, openModal }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{sekcja?.tytul}</StyledTitle>
      <StyledText dangerouslySetInnerHTML={{ __html: sekcja.tekstPierwszy }} />
      <StyledTextsBox>
        <StyledTextBox right>
          <StyledFlex
            dangerouslySetInnerHTML={{
              __html: sekcja.tekstLewo,
            }}
          ></StyledFlex>
        </StyledTextBox>
        <StyledVerticalLine />
        <StyledTextBox left>
          <StyledFlex
            dangerouslySetInnerHTML={{
              __html: sekcja.tekstPrawo,
            }}
          ></StyledFlex>
        </StyledTextBox>
      </StyledTextsBox>

      <StyledText dangerouslySetInnerHTML={{ __html: sekcja.tekstDrugi }} />

      <Button label={sekcja.ctaEtykieta} onClick={openModal} />
    </StyledWrapper>
  )
}

export default TherapyProduct

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  scroll-margin-top: 150px;
`

const StyledTitle = styled.h1`
  margin-bottom: 60px;
  text-transform: uppercase;
  @media only screen and (max-width: 1100px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
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
`

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
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
`
const StyledText = styled.div`
  @media only screen and (max-width: 1100px) {
    margin-bottom: 10px;
  }
`
