import React, { useState } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Modal from "react-modal"
import Header from "./header"
import "./layout.css"
import NavSocial from "./nav-social"
import Footer from "./footer"
import BookForm from "./book-form"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

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
        openModal={openModal}
      />
      <NavSocial socialmedia={data.layout.logos.socialmedia} />

      <StyledMain>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          onAfterOpen={() => (document.body.style.overflow = "hidden")}
          onAfterClose={() => (document.body.style.overflow = "unset")}
          style={{
            content: {
              padding: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              minWidth: "600px",
            },
            overlay: {
              zIndex: 1000,
              backgroundColor: "rgba(57, 57, 57, 0.9)",
            },
          }}
        >
          <BookForm closeModal={closeModal} />
        </Modal>
        {children}
      </StyledMain>
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
