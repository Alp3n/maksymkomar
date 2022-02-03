import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"

const References = ({ title, text, references, ctaLabel, ctaUrl }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
      <StyledReferencesBox>
        <StyledVerticalLine />
        {references?.map(r => (
          <StyledReference key={r.name}>
            <StyledName>{r.name}</StyledName>
            <p>{r.reference}</p>
          </StyledReference>
        ))}
      </StyledReferencesBox>
      <StyledButtonWrapper>
        <Button label={ctaLabel} url={ctaUrl} />
      </StyledButtonWrapper>
    </StyledWrapper>
  )
}

export default References

References.propTypes = {}

References.defaultProps = {}

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 150px;
`

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 60px;
`

const StyledReferencesBox = styled.div`
  position: relative;
  display: grid;
  /* gap: 100px; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  margin-bottom: 60px;
`

const StyledReference = styled.div`
  display: flex;
  flex-direction: column;
  :nth-child(odd) {
    margin-left: 10%;
  }
  :nth-child(even) {
    margin-right: 10%;
  }
`

const StyledName = styled.p`
  font-weight: 700;
  margin-bottom: 20px;
`

const StyledText = styled.p`
  margin-bottom: 50px;
`

const StyledVerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  border-left: 1px solid ${styles.color.primary};
  z-index: 2;
`
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
