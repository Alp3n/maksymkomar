import React from "react"

// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"

const BookForm = ({ closeModal, noClose }) => {
  return (
    <FullBleedWrapper>
      <StyledWrapper>
        <StyledHeader noClose={noClose} id="book-form">
          <StyledTitle>Umów Sesję</StyledTitle>
          {noClose ? null : (
            <StyledClose style={{ placeSelf: "end" }} onClick={closeModal}>
              ×
            </StyledClose>
          )}
        </StyledHeader>
        <StyledForm method="post" action="#">
          <StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              required
              placeholder="Twoje imię*"
            />
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="email"
              name="email"
              id="email"
              required
              placeholder="Twój e-mail*"
            />
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="tel"
              name="phone"
              id="phone"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              minlength={9}
              maxLength={9}
              placeholder="Numer telefonu*"
            />
          </StyledLabel>
          <StyledLabel>
            <StyledSelect name="select" id="select" required>
              <StyledOption value="">Kliknij i wybierz opcję*</StyledOption>
              <StyledOption value="Seans terapeutyczny w gabinecie">
                Seans terapeutyczny w gabinecie*
              </StyledOption>
              <StyledOption value="Seans terapeutyczny online">
                Seans terapeutyczny online*
              </StyledOption>
              <StyledOption value="Kompleksowa terapia osobowości">
                Kompleksowa terapia osobowości*
              </StyledOption>
            </StyledSelect>
          </StyledLabel>
          <StyledLabel>
            <StyledTextArea
              name="message"
              id="message"
              rows="5"
              placeholder="Treść wiadomości (dodatkowe)"
            />
          </StyledLabel>
          <Button type="submit" label="Wyślij" />
        </StyledForm>
      </StyledWrapper>
    </FullBleedWrapper>
  )
}

export default BookForm

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  place-self: center;
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${styles.color.grey};
  padding: 20px 80px;
  @media only screen and (max-width: 1100px) {
    padding: 20px 50px;
  }
  @media only screen and (max-width: 600px) {
    padding: 30px 40px 20px 40px;
  }

  scroll-margin-top: 150px;
`
const StyledTitle = styled.h1`
  margin-bottom: 0;
  padding: 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  @media only screen and (max-width: 1100px) {
    padding: 20px 50px;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 40px;
  }
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const StyledInput = styled.input`
  color: ${styles.color.primary};
  border: none;
  border-bottom: 1px solid ${styles.color.primary};

  margin-bottom: 30px;
  padding-bottom: 8px;
  border-radius: 0;
  -webkit-appearance: none;
`
const StyledSelect = styled.select`
  color: ${styles.color.primary};
  border: none;
  border-bottom: 1px solid ${styles.color.primary};
  margin-bottom: 30px;
  background-color: transparent;
  padding-bottom: 8px;
`

const StyledOption = styled.option`
  color: ${styles.color.primary};
  padding-bottom: 8px;
`
const StyledTextArea = styled.textarea`
  margin-bottom: 30px;
`
const StyledClose = styled.h5`
  transform: scale(1.5);
  color: rgba(21, 45, 65, 0.5);
  :hover {
    cursor: pointer;
  }
`
