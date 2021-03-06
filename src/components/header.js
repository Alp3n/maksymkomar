import React, { useState, useContext } from "react"
// import PropTypes from "prop-types"

import { Link } from "gatsby"
import MenuItem from "./menu-item"
import styled from "styled-components"
// import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import NavSocial from "./nav-social"
import Signature from "./signature"
import Cart from "./cart"
import CartContext from "../context/cartContext"
import CartItem from "./cart-item"

const Header = ({ src, sklep, openModal, socialmedia }) => {
  const [isShown, setIsShown] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [subMenu, setSubmenu] = useState({ index: null, submenu: [null] })
  const { cart, showCart, removeFromCart } = useContext(CartContext)
  const showItem = (submenu, index) => {
    setSubmenu({ submenu: [...submenu], index: index })
    setIsShown(true)
  }

  const hideItem = () => {
    setSubmenu([])
    setIsShown(false)
  }

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

  const links = [
    { label: "Moja metoda", url: "/o-mnie/", submenu: [] },
    {
      label: "Strefa klienta",
      url: "",
      submenu: [
        { label: "Seanse terapeutyczne", url: "/seanse-terapeutyczne/" },
        {
          label: "W jakich przypadkach mogę Ci pomóc",
          url: "/w-jakich-przypadkach-moge-ci-pomoc/",
        },
        {
          label: "Audioterapie",
          url: "/audioterapie/",
        },
      ],
    },
    {
      label: "Strefa terapeuty",
      url: "",
      submenu: [
        {
          label: "Szkolenia dla terapeutów",
          url: "/szkolenia-dla-terapeutow/",
        },
      ],
    },

    { label: "Kontakt", url: "/kontakt/", submenu: [] },
  ]

  return (
    <>
      <StyledHeader isOpen={isOpen}>
        <StyledDiv>
          <ButtonsWrapper>
            <StyledLink to="/">
              <Signature
                svg={src}
                color={styles.color.primary}
                width={`200px`}
              />
            </StyledLink>
            <StyledMenuButton onClick={() => handleMenu()}>
              <StyledLine />
              <StyledLine />
              <StyledLine />
            </StyledMenuButton>
          </ButtonsWrapper>

          <StyledNav>
            {links.map((l, index) => (
              <StyledItemWrapper
                key={l.label}
                onMouseEnter={() => showItem(l.submenu, index)}
                onMouseLeave={() => hideItem()}
              >
                <MenuItem to={l.url} label={l.label} className={"title"} />
                {subMenu.submenu?.length > 0 &&
                isShown &&
                index === subMenu.index ? (
                  <StyledSubmenu>
                    {subMenu.submenu.map(s => (
                      <MenuItem key={s.url} to={s.url} label={s.label} invert />
                    ))}
                  </StyledSubmenu>
                ) : null}
              </StyledItemWrapper>
            ))}
          </StyledNav>

          <ButtonsWrapper>
            {/* <StyledIcon dangerouslySetInnerHTML={{ __html: sklep }} /> */}
            <Cart svg={sklep} />
            <Button label="Umów Sesję" plain onClick={openModal} />
          </ButtonsWrapper>
        </StyledDiv>
      </StyledHeader>
      {isOpen ? (
        <StyledMenu>
          {mobileLinks.map((l, index) => (
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

export default Header

/* STYLED COMPONENTS */

const StyledItemWrapper = styled.div`
  position: relative;

  :hover {
    .title {
      color: ${styles.color.lightBlue};
    }
  }
`

const StyledSubmenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  top: 35px;
  left: 0;
  right: 0;
  background-color: ${styles.color.lightBlue};
  padding: 30px;
  width: 500px;
  gap: 15px;
  box-shadow: 3px 4px 6px grey;
  a:hover {
    color: ${styles.color.white};
  }
`

const StyledNav = styled.nav`
  display: flex;
  @media only screen and (max-width: 1200px) {
    display: none;
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
  @media only screen and (max-width: 1200px) {
    padding: 0.5rem 1.4rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 0.2rem 1.2rem;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 28px;
  }
`
const StyledMenu = styled.div`
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
    width: 370px;
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
  width: 25px;
  height: auto;
  :first-child {
    margin-right: 35px;
  }
  svg {
    display: block;
    fill: ${styles.color.primary};
  }
`
const StyledLink = styled(Link)`
  margin-right: 24px;
`

const StyledCart = styled.div`
  display: grid;
  position: fixed;
  gap: 12px;
  background: ${styles.color.white};
  box-shadow: 0px 3px 6px grey;
  z-index: 999;
  /* width: 300px; */
  right: 15%;
  top: 102.5px;
  padding: 20px 30px;

  @media only screen and (min-width: 601px) and (max-width: 1200px) {
    top: 80px;
  }

  h5 {
    font-family: ${styles.font.family.montserrat};
  }
`
