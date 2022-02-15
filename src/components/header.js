import React, { useState } from "react"
// import PropTypes from "prop-types"

import { Link } from "gatsby"
import MenuItem from "./menu-item"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import NavSocial from "./nav-social"

const Header = ({ src, alt, openModal, menu, socialmedia }) => {
  const [isShown, setIsShown] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [subMenu, setSubmenu] = useState({ index: null, submenu: [null] })

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
      label: "Audioterapia",
      url: "/audioterapie/poznanie-swoich-emocji",
      submenu: [],
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
          <Link to="/">
            <StyledLogo image={src} alt={alt} />
          </Link>
          <StyledMenuButton
            image={menu.localFile?.childImageSharp?.gatsbyImageData}
            alt={menu.altText}
            onClick={() => handleMenu()}
          >
            <StyledLine />
            <StyledLine />
            <StyledLine />
          </StyledMenuButton>
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

          <ButtonWrapper>
            <Button label="Umów Sesję" plain onClick={openModal} />
          </ButtonWrapper>
        </StyledDiv>
      </StyledHeader>
      {isOpen ? (
        <StyledMenu>
          {mobileLinks.map((l, index) => (
            <StyledItemWrapper
              key={l.label}
              onMouseEnter={() => showItem(l.submenu, index)}
              onMouseLeave={() => hideItem()}
            >
              <MenuItem to={l.url} label={l.label} className={"title"} />
            </StyledItemWrapper>
          ))}
          <div>
            <NavSocial socialmedia={socialmedia} />
          </div>
        </StyledMenu>
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
  @media only screen and (max-width: 600px) {
    padding: 0.2rem 1.2rem;
  }
`

const StyledLogo = styled(GatsbyImage)`
  width: 240px;
  height: 80px;

  @media only screen and (max-width: 1200px) {
    width: 192px;
    height: 64px;
  }

  @media only screen and (max-width: 600px) {
    width: 130px;
    height: 42px;
  }
`
const ButtonWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
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
