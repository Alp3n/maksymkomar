import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import styles from "../styles"
import { GatsbyImage } from "gatsby-plugin-image"

const Footer = ({ src, alt }) => {
  return (
    <StyledFooterWrapper
      style={{
        display: "grid",
        gridTemplateColumns: `1fr
      min(1450px, 100%)
      1fr`,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
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

Footer.propTypes = {}

/* STYLED COMPONENTS */

const StyledFooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr min(1450px, 100%) 1fr;
  padding: 1.0875rem 1.45rem;
  background: ${styles.color.grey};
`

const StyledFooterContent = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
`

const StyledContactInfo = styled.div``
const StyledLogo = styled(GatsbyImage)``
