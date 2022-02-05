import * as React from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "../styles"

const Faq = ({ qa }) => {
  return (
    <StyledWrapper>
      <StyledTitle>FAQ</StyledTitle>
      {qa.map(i => (
        <StyledItemWrapper key={i.question}>
          <StyledItemQuestion
            dangerouslySetInnerHTML={{
              __html: i.question,
            }}
          />
          <StyledItemAnswer
            dangerouslySetInnerHTML={{
              __html: i.answer,
            }}
          />
        </StyledItemWrapper>
      ))}
    </StyledWrapper>
  )
}

export default Faq

/* Faq.propTypes = {} */

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`
const StyledTitle = styled.h1`
  margin-bottom: 60px;
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
