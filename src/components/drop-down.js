import React, { useState } from "react"
import styled from "styled-components"
import styles from "../styles"

const DropDown = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openAndClose = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledTitleWrapper>
        <StyledTitle>{categories.category.title}</StyledTitle>
        <StyledArrow onClick={() => openAndClose()} isOpen={isOpen} />
      </StyledTitleWrapper>
      {isOpen ? (
        <StyledList>
          {categories.category.definitions.map(d => (
            <StyledTerm>
              <strong>{d.term}</strong>
              {" - "}
              {d.definition}
            </StyledTerm>
          ))}
        </StyledList>
      ) : null}
    </StyledWrapper>
  )
}

export default DropDown

const StyledWrapper = styled.div`
  margin-bottom: ${props => (props.isOpen ? "80px" : "0px")};
  width: 100%;
`
const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`

const StyledArrow = styled.div`
  border-top: 2px solid ${styles.color.primary};
  border-right: 2px solid ${styles.color.primary};
  transform: ${props => (props.isOpen ? "rotate(-45deg)" : "rotate(135deg)")};
  height: 20px;
  width: 20px;
  z-index: 100;
  margin-left: 20px;
  margin-bottom: ${props => (props.isOpen ? "30px" : "60px")};
  cursor: pointer;
`

const StyledTitle = styled.h3`
  margin-bottom: 55px;
`
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTerm = styled.span`
  margin-bottom: 35px;
`
