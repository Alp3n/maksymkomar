import React from "react"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const TherapyProduct = ({ complexPersonalityTherapySection }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{complexPersonalityTherapySection.title}</StyledTitle>
      <p style={{ width: "60%" }}>
        {complexPersonalityTherapySection.textFirst}
      </p>
      <StyledTextsBox>
        <StyledTextBox right>
          <strong>{complexPersonalityTherapySection.textLeftBold}</strong>
          <StyledFlex
            dangerouslySetInnerHTML={{
              __html: complexPersonalityTherapySection.textLeft,
            }}
          ></StyledFlex>
        </StyledTextBox>
        <StyledVerticalLine />
        <StyledTextBox left>
          <strong>{complexPersonalityTherapySection.textRightBold}</strong>
          <StyledFlex
            dangerouslySetInnerHTML={{
              __html: complexPersonalityTherapySection.textRight,
            }}
          ></StyledFlex>
        </StyledTextBox>
      </StyledTextsBox>

      <p style={{ width: "60%" }}>
        {complexPersonalityTherapySection.textSecond}
      </p>
      <div
        style={{
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>
          <strong>{complexPersonalityTherapySection.durationBold}</strong>
          {complexPersonalityTherapySection.durationValue}
        </span>
        <span>
          <strong>{complexPersonalityTherapySection.costBold}</strong>{" "}
          {complexPersonalityTherapySection.costValue}
        </span>
      </div>
      <Button label={complexPersonalityTherapySection.ctaLabel} />
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
