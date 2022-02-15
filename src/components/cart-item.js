import React, { useContext } from "react"
import styled from "styled-components"
import styles from "../styles"
import CartContext from "../context/cartContext"

const CartItem = ({ item, index }) => {
  const { removeFromCart } = useContext(CartContext)
  return (
    <StyledCartItem>
      <StyledName>{item.name}</StyledName>
      <StyledDelete onClick={() => removeFromCart(index)}>x</StyledDelete>
    </StyledCartItem>
  )
}
export default CartItem

/* STYLED COMPONENTS */
const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  gap: 20px;
  place-items: center;
`
const StyledName = styled.p`
  margin: 0;
`

const StyledDelete = styled.p`
  cursor: pointer;
  margin: 0;
  padding: 5px 15px;
  background: ${styles.color.grey};
  @media only screen and (max-width: 600px) {
    padding: 5px 0;
  }
`
