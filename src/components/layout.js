import React, { useState } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CartContext from "../context/cartContext"
import styled from "styled-components"
import Modal from "react-modal"
import Header from "./header"
import "./layout.css"
import NavSocial from "./nav-social"
import Footer from "./footer"
import BookForm from "./book-form"
import { useMediaQuery } from "react-responsive"
import HeaderMobile from "./header-mobile"

Modal.setAppElement("#___gatsby")

const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })
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
          obrazPodpisBialy {
            localFile {
              svg {
                content
              }
            }
            altText
          }
          obrazPodpisKrotki {
            localFile {
              svg {
                content
              }
            }
            altText
          }
          socialmedia {
            ikona {
              localFile {
                svg {
                  content
                }
              }
              altText
            }
            url
          }
          sklep {
            localFile {
              svg {
                content
              }
            }
            altText
          }
          booking {
            localFile {
              svg {
                content
              }
            }
            altText
          }
        }
      }
    }
  `)
  return (
    <CartContext.Consumer>
      {value => (
        <>
          {isMobile ? (
            <HeaderMobile
              src={
                data?.wpPage?.ACFlogaISocial?.obrazPodpisBialy?.localFile?.svg
                  .content
              }
              alt={data?.wpPage?.ACFlogaISocial?.obrazPodpisBialy?.altText}
              openModal={openModal}
              socialmedia={data?.wpPage?.ACFlogaISocial?.socialmedia}
              sklep={
                data?.wpPage?.ACFlogaISocial?.sklep?.localFile?.svg.content
              }
              booking={
                data?.wpPage?.ACFlogaISocial?.booking?.localFile?.svg.content
              }
            />
          ) : (
            <Header
              src={
                data?.wpPage?.ACFlogaISocial?.obrazPodpisBialy?.localFile?.svg
                  .content
              }
              alt={data?.wpPage?.ACFlogaISocial?.obrazPodpisBialy?.altText}
              openModal={openModal}
              socialmedia={data?.wpPage?.ACFlogaISocial?.socialmedia}
              sklep={data?.wpPage.ACFlogaISocial.sklep.localFile.svg.content}
            />
          )}

          <main>
            {/* <StyledBook>
          <Button label="Umów sesję" onClick={openModal} />
        </StyledBook> */}
            <StyledSocialWrapper>
              <NavSocial
                socialmedia={data?.wpPage?.ACFlogaISocial?.socialmedia}
              />
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
          </main>
          <Footer
            src={
              data?.wpPage?.ACFlogaISocial?.obrazPodpisBialy?.localFile?.svg
                .content
            }
            alt={data?.wpPage?.ACFlogaISocial?.obrazPodpisBialy?.altText}
          />
        </>
      )}
    </CartContext.Consumer>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Layout

/* STYLED COMPONENTS */

const StyledSocialWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`
