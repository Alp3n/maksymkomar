import React, { useState } from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"
import Title from "./title"

const Newsletter = () => {
  const [value, setValue] = useState("")
  return (
    <FullBleedWrapper background={styles.color.grey} height={"medium"}>
      <Title title={"Newsletter"} />
      <p>
        Zapisz się do naszego newslettera aby otrzymywać najnowsze wiadomości i
        porady
      </p>

      <form>
        <StyledForm>
          <StyledInput type="text" required placeholder="Twoje imię*" />
          <StyledInput
            type="email"
            value={value.email}
            required
            onChange={e => setValue(e.target.value)}
            placeholder="Twój email*"
          />
        </StyledForm>
        <Button
          label="Zapisz się"
          type="submit"
          disabled={value ? false : true}
        />
      </form>
    </FullBleedWrapper>
  )
}

export default Newsletter

/* Newsletter.propTypes = {} */

/* STYLED COMPONENTS */

/* const StyledWrapper = styled.div`
  grid-column: 1 / -1;

  width: 100%;
  background-color: ${styles.color.grey};
  padding: 80px 0;
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
    padding: 20px 20px;
  }
`
const StyledInner = styled.div`
  position: relative;
  > * {
    grid-column: 2;
  }
  display: grid;

  grid-template-columns: 1fr min(1420px, 100%) 1fr;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
` */

const StyledTitle = styled.h1`
  margin-bottom: 60px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`
const StyledForm = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const StyledInput = styled.input`
  color: ${styles.color.primary};
  background-color: ${styles.color.grey};
  border: none;
  border-bottom: 1px solid ${styles.color.primary};
  /* margin-bottom: 30px; */
  padding-bottom: 8px;
  border-radius: 0;
  -webkit-appearance: none;
`
