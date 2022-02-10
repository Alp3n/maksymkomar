import * as React from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"

const Faq = ({ qa }) => {
  return (
    <StyledWrapper id="faq">
      <StyledTitle>FAQ</StyledTitle>
      {qa.map(i => (
        <StyledItemWrapper key={i.pytanie}>
          <StyledItemQuestion
            dangerouslySetInnerHTML={{
              __html: i.pytanie,
            }}
          />
          <StyledItemAnswer
            dangerouslySetInnerHTML={{
              __html: i.odpowiedz,
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
  scroll-margin-top: 150px;
`
const StyledTitle = styled.h1`
  margin-bottom: 60px;
`

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 70%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
const StyledItemQuestion = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`
const StyledItemAnswer = styled.p``
