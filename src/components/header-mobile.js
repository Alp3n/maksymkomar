import React, { useState, useContext } from "react"
// import PropTypes from "prop-types"

import { Link } from "gatsby"
import MenuItem from "./menu-item"
import styled from "styled-components"
import styles from "../styles"
import NavSocial from "./nav-social"
import Signature from "./signature"
import Cart from "./cart"
import CartContext from "../context/cartContext"
import CartItem from "./cart-item"

const HeaderMobile = ({ src, openModal, socialmedia, sklep, booking }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, showCart, removeFromCart } = useContext(CartContext)

  const handleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const mobileLinks = [
    { label: "O Mnie", url: "/o-mnie/", submenu: [] },
    { label: "Moja metoda", url: "/o-mnie/#moja-metoda", submenu: [] },
    {
      label: "Seanse terapeutyczne",
      url: "/seanse-terapeutyczne/",
      submenu: [],
    },
    {
      label: "Audioterapie",
      url: "/audioterapie/",
    },
    {
      label: "Szkolenia dla terapeutów",
      url: "/szkolenia-dla-terapeutow/",
      submenu: [],
    },

    { label: "BLOG", url: "/blog/", submenu: [] },
    { label: "FAQ", url: "/#faq", submenu: [] },
    { label: "KONTAKT", url: "/kontakt/", submenu: [] },
  ]

  return (
    <>
      <StyledHeader isOpen={isOpen}>
        <StyledDiv>
          <StyledMenuButton onClick={() => handleMenu()}>
            <StyledLine />
            <StyledLine />
            <StyledLine />
          </StyledMenuButton>

          <Link to="/">
            <Signature svg={src} width={`150px`} color={styles.color.primary} />
          </Link>
          <ButtonsWrapper>
            <Cart svg={sklep} />
            <StyledIcon
              dangerouslySetInnerHTML={{ __html: booking }}
              onClick={openModal}
            />
          </ButtonsWrapper>
        </StyledDiv>
      </StyledHeader>
      {isOpen ? (
        <StyledMenu>
          {mobileLinks.map(l => (
            <StyledItemWrapper key={l.label}>
              <MenuItem to={l.url} label={l.label} className={"title"} />
            </StyledItemWrapper>
          ))}
          <div>
            <NavSocial socialmedia={socialmedia} />
          </div>
        </StyledMenu>
      ) : null}
      {showCart ? (
        <StyledCart>
          <h5>Koszyk</h5>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartItem key={item.id} index={index} item={item} />
            ))
          ) : (
            <p>Twój koszyk jest pusty</p>
          )}
        </StyledCart>
      ) : null}
    </>
  )
}

/* Header.propTypes = {}

Header.defaultProps = {} */

export default HeaderMobile

/* STYLED COMPONENTS */

const StyledItemWrapper = styled.div`
  position: relative;

  :hover {
    .title {
      color: ${styles.color.lightBlue};
    }
  }
`

const StyledDiv = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns:
    1fr
    min(1450px, 100%)
    1fr;
  padding: 1.0875rem 1.45rem;
  /* box-shadow: ${props => (props.isOpen ? 0 : "1px 3px 6px grey")}; */
  box-shadow: 1px 3px 6px grey;
  background: white;
  z-index: 1000;
  @media only screen and (max-width: 600px) {
    padding: 0.2rem 1.2rem;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const StyledMenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18px;
  width: 28px;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18px;
    width: 24px;
  }
`
const StyledMenu = styled.nav`
  display: grid;
  position: fixed;
  top: 66px;
  left: 0;
  gap: 12px;
  width: 100%;
  background: ${styles.color.white};
  box-shadow: 0px 3px 6px grey;
  z-index: 999;
  padding: 20px 0;
  @media only screen and (min-width: 1200px) {
    width: 30%;
    left: 10%;
    top: 102.5px;
    padding: 20px 30px;
  }
`
const StyledLine = styled.span`
  border-bottom: 2px solid ${styles.color.primary};
  width: 100%;
  height: auto;
`

const StyledIcon = styled.div`
  display: block;
  width: 20px;
  height: auto;
  :first-child {
    margin-right: 20px;
  }
  svg {
    display: block;
    fill: ${styles.color.primary};
  }
`
const StyledCart = styled.div`
  display: grid;
  position: fixed;
  top: 66px;
  right: 0;
  gap: 12px;
  width: 100%;
  background: ${styles.color.white};
  box-shadow: 0px 3px 6px grey;
  z-index: 999;
  padding: 20px 20px;
`
