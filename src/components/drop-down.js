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
      <StyledTitleWrapper onClick={() => openAndClose()}>
        <StyledTitle>{categories.kategoria.tytul}</StyledTitle>
        <StyledArrow isOpen={isOpen} />
      </StyledTitleWrapper>
      {isOpen ? (
        <StyledList>
          {categories.kategoria.definicje.map(d => (
            <StyledTerm key={d.wyraz}>
              <strong>{d.wyraz}</strong>
              {/* {" - "} */}
              <a dangerouslySetInnerHTML={{ __html: d.definicja }}></a>
            </StyledTerm>
          ))}
        </StyledList>
      ) : null}
    </StyledWrapper>
  )
}

export default DropDown

const StyledWrapper = styled.div`
  margin-bottom: ${props => (props.isOpen ? "80px" : "30px")};
  width: 100%;
`
const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const StyledArrow = styled.div`
  border-top: 2px solid ${styles.color.primary};
  border-right: 2px solid ${styles.color.primary};
  transform: ${props => (props.isOpen ? "rotate(-45deg)" : "rotate(135deg)")};
  height: 20px;
  width: 20px;
  z-index: 100;
  margin-bottom: ${props => (props.isOpen ? "30px" : "60px")};
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    margin-bottom: ${props => (props.isOpen ? "5px" : "25px")};
    height: 10px;
    width: 10px;
  }
`

const StyledTitle = styled.h3`
  width: fit-content;
  margin-bottom: 55px;
  @media only screen and (max-width: 1200px) {
    font-size: 1.8rem;
    margin-bottom: 35px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTerm = styled.span`
  margin-bottom: 35px;
  width: 70%;
`
