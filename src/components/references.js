import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"

const References = ({ title, text, references, ctaLabel, ctaUrl }) => {
  return (
    <FullBleedWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
      <StyledReferencesBox>
        <StyledVerticalLine />
        {references?.map(r => (
          <StyledReference key={r.imie}>
            <StyledName>{r.imie}</StyledName>
            <div dangerouslySetInnerHTML={{ __html: r.referencja }} />
          </StyledReference>
        ))}
      </StyledReferencesBox>
      <StyledButtonWrapper>
        <Button label={ctaLabel} url={ctaUrl} />
      </StyledButtonWrapper>
    </FullBleedWrapper>
  )
}

export default References

/* References.propTypes = {}

References.defaultProps = {} */

/* STYLED COMPONENTS */

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
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
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

  @media only screen and (max-width: 1200px) {
    :nth-child(odd) {
      margin-left: 0;
    }
    :nth-child(even) {
      margin-right: 0;
    }
    margin-bottom: 30px;
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
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
