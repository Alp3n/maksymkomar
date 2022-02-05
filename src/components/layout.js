import * as React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import NavSocial from "./nav-social"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Layout {
      layout: wpPage(databaseId: { eq: 170 }) {
        logos {
          signatureColor {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
              name
            }
            altText
          }
          signatureWhite {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
              name
            }
            altText
          }
          socialmedia {
            icon {
              localFile {
                url
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
              mediaType
            }
            url
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <Header
        src={
          data.layout.logos.signatureColor.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={data.layout.logos.signatureColor.altText}
      />
      <NavSocial socialmedia={data.layout.logos.socialmedia} />
      <StyledMain>{children}</StyledMain>
      <Footer
        src={
          data.layout.logos.signatureColor.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={data.layout.logos.signatureColor.altText}
      />
    </>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

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
