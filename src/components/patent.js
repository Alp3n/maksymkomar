import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
// import styles from "../styles"
import Button from "./button"
import Modal from "react-modal"

import { GatsbyImage } from "gatsby-plugin-image"
Modal.setAppElement("#___gatsby")

const Patent = ({ image, image2, alt2, ctaLabel, alt, title }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <StyledWrapper id="wrapper">
      <Modal
        parentSelector={() => document.querySelector("#___gatsby")}
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
        style={{
          content: {
            padding: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            minWidth: "600px",
          },
          overlay: {
            zIndex: 1000,
            backgroundColor: "rgba(57, 57, 57, 0.9)",
          },
        }}
      >
        <StyledModalWrapper closeModal={closeModal}>
          <StyledClose style={{ placeSelf: "end" }} onClick={closeModal}>
            ×
          </StyledClose>
          <StyledModalContent>
            <StyledItem>
              <StyledText>Oryginał</StyledText>
              <StyledImage image={image} alt={alt} width={"400px"} />
            </StyledItem>
            <StyledItem>
              <StyledText>Tłumaczenie</StyledText>
              <StyledImage image={image2} alt={alt2} width={"600px"} />
            </StyledItem>
          </StyledModalContent>
        </StyledModalWrapper>
      </Modal>
      <StyledBox>
        <StyledTitle dangerouslySetInnerHTML={{ __html: title }}></StyledTitle>
        <Button label={ctaLabel} onClick={openModal} />
      </StyledBox>
      <StyledBox>
        <StyledImage image={image} alt={alt} />
      </StyledBox>
    </StyledWrapper>
  )
}

export default Patent

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  place-items: center;
  margin-bottom: 120px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
  }
`

const StyledTitle = styled.h1`
  white-space: nowrap;
  margin-bottom: 40px;
  color: ${props => props.color};
  text-align: center;
`
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled(GatsbyImage)`
  width: ${props => (props.width ? props.width : "300px")};
  height: auto;
`
const StyledModalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    overflow-y: scroll;
  }
`

const StyledModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`
const StyledClose = styled.div`
  width: fit-content;
  place-self: end;
  transform: scale(2);
  color: rgba(21, 45, 65, 0.5);
  :hover {
    cursor: pointer;
  }
`
const StyledText = styled.h3`
  text-align: center;
`
const StyledItem = styled.div`
  place-self: center;
`
