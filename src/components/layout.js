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
import Button from "./button"

Modal.setAppElement("#___gatsby")

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
      wpPage(databaseId: { eq: 38 }) {
        ACFlogaISocial {
          obrazPodpisKolor {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
          obrazPodpisBialy {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            altText
          }
          socialmedia {
            ikona {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              altText
            }
            url
          }
          menu {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Header
        src={
          data?.wpPage?.ACFlogaISocial?.obrazPodpisKolor?.localFile
            ?.childImageSharp?.gatsbyImageData
        }
        alt={data?.wpPage?.ACFlogaISocial?.obrazPodpisKolor?.altText}
        openModal={openModal}
        menu={data?.wpPage.ACFlogaISocial.menu}
        socialmedia={data?.wpPage?.ACFlogaISocial?.socialmedia}
      />

      <StyledMain>
        <StyledBook>
          <Button label="Umów sesję" onClick={openModal} />
        </StyledBook>
        <StyledSocialWrapper>
          <NavSocial socialmedia={data?.wpPage?.ACFlogaISocial?.socialmedia} />
        </StyledSocialWrapper>

        <Modal
          parentSelector={() => document.querySelector("#___gatsby")}
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
              // minWidth: "375px",
              overlfow: "scroll",
            },
            overlay: {
              zIndex: 1000,
              backgroundColor: "rgba(57, 57, 57, 0.9)",
            },
          }}
          // appElement={"#___gatsby"}
        >
          <BookForm closeModal={closeModal} />
        </Modal>

        {children}
      </StyledMain>
      <Footer
        src={
          data?.wpPage?.ACFlogaISocial?.obrazPodpisKolor?.localFile
            ?.childImageSharp?.gatsbyImageData
        }
        alt={data?.wpPage?.ACFlogaISocial?.obrazPodpisKolor?.altText}
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
  position: relative;
  > * {
    grid-column: 2;
  }
  display: grid;
  grid-template-columns: 1fr min(1450px, 100%) 1fr;
  justify-items: center;

  @media only screen and (max-width: 1560px) {
    grid-template-columns: 1fr min(90%, 100%) 1fr;
  }
  /* @media only screen and (max-width: 1310px) {
    grid-template-columns: 1fr min(1100px, 100%) 1fr;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr min(90%, 100%) 1fr;
  } */
  /* @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr min(800px, 100%) 1fr;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr min(90%, 100%) 1fr;
  } */
`
const StyledBook = styled.div`
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 998;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`
const StyledSocialWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`
