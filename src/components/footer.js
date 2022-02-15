import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import { GatsbyImage } from "gatsby-plugin-image"
import MenuItem from "./menu-item"
import FullBleedWrapper from "./full-bleed-wrapper"
import Signature from "../components/signature"

const links = [
  { label: "Home", url: "/" },
  { label: "O mnie", url: "/o-mnie" },
  { label: "Moja metoda", url: "/o-mnie/#moja-metoda" },
  {
    label: "Seanse terapeutyczne",
    url: "/seanse-terapeutyczne",
  },
  {
    label: "Audioterapia",
    url: "/audioterapie/poznanie-swoich-emocji",
  },
  {
    label: "Szkolenia dla terapeutów",
    url: "/szkolenia-dla-terapeutow",
  },

  { label: "KONTAKT", url: "/kontakt" },
  { label: "FAQ", url: "/#faq" },
  { label: "BLOG", url: "/blog" },
]

const Footer = ({ src, alt }) => {
  return (
    <FullBleedWrapper background={styles.color.grey} noMargin somePadding>
      <StyledFooterContent>
        <StyledContactInfo>
          <Signature svg={src} width={`200px`} color={styles.color.primary} />
          <p>
            +48 577 910 391
            <br />
            info@maksymkomar.com
            <br />
            Warszawa
            <br />
            ul. Wspólna 61
            <br />
            Nowoczesna Klinika Zdrowia
            <br />
            Psychicznego “METODA”
          </p>
          <p>
            Godziny otwarcia
            <br />
            Pon – Pt: 10.00 – 19.00
            <br />
            Sb: 12.00 – 17.00
          </p>
          <div></div>
        </StyledContactInfo>
        <StyledNav>
          {links.map(l => (
            <MenuItem key={l.url} to={l.url} label={l.label} />
          ))}
        </StyledNav>
        {/* © {new Date().getFullYear()}, <a href="/">Maksym Komar</a> */}
      </StyledFooterContent>
    </FullBleedWrapper>
  )
}

export default Footer

/* Footer.propTypes = {} */

/* STYLED COMPONENTS */

const StyledFooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    place-self: center;
    margin: 40px 0;
  }
`

const StyledContactInfo = styled.div``
const StyledLogo = styled(GatsbyImage)`
  margin-bottom: 40px;
  @media only screen and (max-width: 1150px) {
    margin-bottom: 20px;
    width: 192px;
    height: 64px;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
    width: 130px;
    height: 42px;
  }
`
const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
const StyledSignature = styled(Signature)`
  fill: ${styles.color.primary};
  width: 200px;
  /* transform: scale(1.5); */
  svg {
    width: 200px;
  }
`
