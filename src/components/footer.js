import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "../styles"
import { GatsbyImage } from "gatsby-plugin-image"

const Footer = ({ src, alt }) => {
  return (
    <StyledFooterWrapper>
      <StyledFooterContent>
        <StyledContactInfo>
          <StyledLogo image={src} alt={alt} />
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
        <nav></nav>
        {/* © {new Date().getFullYear()}, <a href="/">Maksym Komar</a> */}
      </StyledFooterContent>
    </StyledFooterWrapper>
  )
}

export default Footer

/* Footer.propTypes = {} */

/* STYLED COMPONENTS */

const StyledFooterWrapper = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(1450px, 100%) 1fr;
  padding: 60px 0;
  background: ${styles.color.grey};
`

const StyledFooterContent = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
`

const StyledContactInfo = styled.div``
const StyledLogo = styled(GatsbyImage)`
  margin-bottom: 40px;
`
