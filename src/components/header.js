import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import MenuItem from "./menu-item"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"

const Header = ({ src, alt, openModal }) => {
  const [isShown, setIsShown] = useState(false)
  const [subMenu, setSubmenu] = useState({ index: null, submenu: [null] })
  useEffect(() => {
    console.log(subMenu, "WTF")
  }, [subMenu])

  const showItem = (submenu, index) => {
    setSubmenu({ submenu: [...submenu], index: index })
    setIsShown(true)
  }

  const hideItem = () => {
    setSubmenu([])
    setIsShown(false)
  }

  const links = [
    { label: "Moja metoda", url: "/o-mnie/", submenu: [] },
    {
      label: "Strefa klienta",
      url: "/seanse-terapeutyczne/",
      submenu: [
        { label: "Seanse terapeutyczne", url: "/seanse-terapeutyczne/" },
        {
          label: "W jakich przypadkach mogę Ci pomóc",
          url: "/w-jakich-przypadkach-moge-ci-pomoc/",
        },
        {
          label: "Audioterapia - Poznanie Swoich Emocji",
          url: "/audioterapie/poznanie-swoich-emocji",
        },
        {
          label: "Audioterapia - Korekcja Psychosomatyki",
          url: "/audioterapie/korekcja-psychosomatyki-odnowienie-systemow-dzialania-organizmu",
        },
      ],
    },
    {
      label: "Strefa terapeuty",
      url: "/szkolenia-dla-terapeutow/",
      submenu: [
        {
          label: "Szkolenia dla terapeutów",
          url: "/szkolenia-dla-terapeutow/",
        },
      ],
    },

    { label: "Kontakt", url: "/kontakt/", submenu: [] },
    { label: "Blog", url: "/blog/", submenu: [] },
  ]

  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <Link to="/">
            <StyledLogo image={src} alt={alt} />
          </Link>
          <StyledNav>
            {links.map((l, index) => (
              <StyledItemWrapper
                key={l.url}
                onMouseEnter={() => showItem(l.submenu, index)}
                onMouseLeave={() => hideItem()}
              >
                <MenuItem
                  to={l.url}
                  label={l.label}
                  isShown={isShown}
                  className={"title"}
                />
                {subMenu.submenu?.length > 0 &&
                isShown &&
                index === subMenu.index ? (
                  <StyledSubmenu>
                    {subMenu.submenu.map(s => (
                      <MenuItem to={s.url} label={s.label} invert />
                    ))}
                  </StyledSubmenu>
                ) : null}
              </StyledItemWrapper>
            ))}
          </StyledNav>

          <Button label="Umów Sesję" plain onClick={openModal} />
        </StyledDiv>
      </StyledHeader>
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
`

const StyledNav = styled.nav`
  display: flex;
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
  background: white;
  z-index: 1000;
`

const StyledLogo = styled(GatsbyImage)`
  width: 240px;
  height: 80px;
`
