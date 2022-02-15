import React from "react"
import styled from "styled-components"

const Title = ({ title, noMargin }) => {
  return <StyledTitleMain noMargin={noMargin}>{title}</StyledTitleMain>
}

export default Title

/* STYLED COMPONENTS */
const StyledTitleMain = styled.h1`
  place-self: start;
  
  margin-bottom: ${props => (props.noMargin ? "0" : "60px")};
  ::first-letter {
    text-transform: capitalize;
  }

  @media only screen and (max-width: 1100px) {
    /* padding: 0 40px; */
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 30px;
    place-self: center;
  }
`
