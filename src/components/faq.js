import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "../styles"

const Faq = ({ qa }) => {
  return (
    <StyledWrapper>
      <StyledTitle>FAQ</StyledTitle>
      {qa.map(i => (
        <StyledItemWrapper key={i.question}>
          <StyledItemQuestion>{i.question}</StyledItemQuestion>
          <StyledItemAnswer>{i.answer}</StyledItemAnswer>
        </StyledItemWrapper>
      ))}
    </StyledWrapper>
  )
}

export default Faq

Faq.propTypes = {}

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 80px 0;
`
const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 3vw;
  font-size: 72px;
  font-weight: 400;
  line-height: 80px;
  color: ${styles.color.primary};
`

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const StyledItemQuestion = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 5px;
`
const StyledItemAnswer = styled.p`
  font-size: 20px;
  line-height: 35px;
`
