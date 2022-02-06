import React from "react"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const PriceList = ({ priceListSection }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{priceListSection.title}</StyledTitle>
      <p>{priceListSection.textFirst}</p>
      <StyledTextsBox>
        <StyledTextBox right>
          <StyledFlex>
            <span>
              <strong>{priceListSection.textLeft.office}</strong>
            </span>
            <span>
              <strong>Czas trwania</strong> -{" "}
              {priceListSection.textLeft.duration}
            </span>
            <span>
              <strong>1 seans</strong> - {priceListSection.textLeft.oneSeance}
            </span>
            <span>
              <strong>3 seanse</strong> - {priceListSection.textLeft.twoSeance}
            </span>
            <span>
              <strong>5 seansów</strong> -{" "}
              {priceListSection.textLeft.fiveSeance}
            </span>
          </StyledFlex>
        </StyledTextBox>
        <StyledVerticalLine />
        <StyledTextBox left>
          <StyledFlex>
            <span>
              <strong>{priceListSection.textRight.online}</strong>
            </span>
            <span>
              <strong>Czas trwania</strong> -{" "}
              {priceListSection.textRight.duration}
            </span>
            <span>
              <strong>1 seans</strong> - {priceListSection.textRight.oneSeance}
            </span>
            <span>
              <strong>3 seanse</strong> - {priceListSection.textRight.twoSeance}
            </span>
            <span>
              <strong>5 seansów</strong> -{" "}
              {priceListSection.textRight.fiveSeance}
            </span>
          </StyledFlex>
        </StyledTextBox>
      </StyledTextsBox>
      <p>
        <b>{priceListSection.boldText}</b>
      </p>
      <p>{priceListSection.textSecond}</p>
      <Button label={priceListSection.ctaLabel} />
    </StyledWrapper>
  )
}

export default PriceList

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
  text-transform: uppercase;
`

const StyledTextsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  margin-bottom: 60px;
`

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTextBox = styled.div`
  padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")};
`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};
`
