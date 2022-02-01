import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import NavSocial from "./nav-social"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      logoPrimary: wpMediaItem(id: { eq: "cG9zdDozNA==" }) {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        altText
      }
    }
  `)

  return (
    <>
      <Header
        src={data.logoPrimary.localFile.childImageSharp.gatsbyImageData}
        alt={data.logoPrimary.altText}
      />

      <StyledMain>
        <NavSocial />
        {children}
      </StyledMain>

      <Footer
        src={data.logoPrimary.localFile.childImageSharp.gatsbyImageData}
        alt={data.logoPrimary.altText}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/* STYLED COMPONENTS */

const StyledMain = styled.main`
  > * {
    grid-column: 2;
  }
  display: grid;
  grid-template-columns: 1fr min(1450px, 100%) 1fr;
  justify-items: center;
`
