import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/cartContext"
import styles from "../styles"

const Cart = ({ svg }) => {
  const { cart, handleCart } = useContext(CartContext)
  return (
    <>
      <StyledWrapper onClick={handleCart}>
        <StyledIcon dangerouslySetInnerHTML={{ __html: svg }} />
        {cart?.length > 0 ? <StyledNumber>{cart?.length}</StyledNumber> : null}
      </StyledWrapper>
    </>
  )
}

export default Cart

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  position: relative;
  cursor: pointer;
`

const StyledNumber = styled.div`
  position: absolute;
  display: grid;
  place-content: center;
  right: 20px;
  bottom: -10px;
  width: 20px;
  height: 20px;
  color: ${styles.color.white};
  background-color: ${styles.color.lightBlue};
  border-radius: 100%;
`

const StyledIcon = styled.div`
  position: relative;
  display: block;
  width: 25px;
  height: auto;

  margin-right: 30px;

  svg {
    display: block;
    fill: ${styles.color.primary};
  }

  @media only screen and (max-width: 600px) {
    width: 20px;
  }
`
