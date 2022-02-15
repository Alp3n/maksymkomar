import React, { useState, useContext } from "react"
import styled from "styled-components"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"
import Title from "./title"
import CartContext from "../context/cartContext"
import { useAlert } from "react-alert"

const ProductSection = ({
  title,
  textLeft,
  textRight,
  ctaLabel,
  ctaUrl,
  id,
}) => {
  const { cart, addToCart } = useContext(CartContext)
  const [disabled, setDisabled] = useState(false)
  const alert = useAlert()
  return (
    <FullBleedWrapper id={id}>
      <Title title={title} />
      <StyledTextsBox>
        <StyledTextBox
          right
          dangerouslySetInnerHTML={{ __html: textLeft }}
        ></StyledTextBox>
        <StyledVerticalLine />
        <StyledTextBox
          left
          dangerouslySetInnerHTML={{ __html: textRight }}
        ></StyledTextBox>
      </StyledTextsBox>
      <StyledFlex>
        <Button
          label={ctaLabel}
          url={ctaUrl}
          disabled={
            cart?.findIndex(i => i.name === title) === -1 ? false : true
          }
          onClick={() => {
            addToCart({ id: title, name: title })
            alert.success("Dodano do koszyka")
          }}
        />
      </StyledFlex>
    </FullBleedWrapper>
  )
}

export default ProductSection

/* STYLED COMPONENTS */

const StyledTextsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  margin-bottom: 60px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${props => (props.left ? "12%" : "0")};
  padding-right: ${props => (props.right ? "10%" : "0")};
  @media only screen and (max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
`
const StyledVerticalLine = styled.div`
  border-left: 1px solid ${styles.color.primary};
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
