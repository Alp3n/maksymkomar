import React from "react"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"

const PriceList = ({ priceListSection, openModal }) => {
  return (
    <FullBleedWrapper background={styles.color.grey} somePadding>
      <StyledTitle>Cennik</StyledTitle>
      <p dangerouslySetInnerHTML={{ __html: priceListSection.tekstPierwszy }} />
      <StyledTextsBox>
        <StyledTextBox right>
          <StyledFlex
            dangerouslySetInnerHTML={{ __html: priceListSection.tekstLewo }}
          ></StyledFlex>
        </StyledTextBox>
        <StyledVerticalLine />
        <StyledTextBox left>
          <StyledFlex
            dangerouslySetInnerHTML={{ __html: priceListSection.tekstPrawo }}
          ></StyledFlex>
        </StyledTextBox>
      </StyledTextsBox>
      <div dangerouslySetInnerHTML={{ __html: priceListSection.tekstDrugi }} />
      <StyledCenter>
        <Button label={priceListSection.ctaEtykieta} onClick={openModal} />
      </StyledCenter>
    </FullBleedWrapper>
  )
}

export default PriceList

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
