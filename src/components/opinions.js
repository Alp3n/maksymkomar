import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Slider from "./slider"

const Opinions = ({ opinions, single, background, marginBottom }) => {
  return (
    <Slider
      background={background ? background : false}
      marginBottom={marginBottom}
      title={"Opinie"}
    >
      {opinions.map(o =>
        single ? (
          <StyledItemSingle key={o.imie}>
            <StyledName>{o.imie}</StyledName>
            <StyledOpinion
              single={single}
              dangerouslySetInnerHTML={{ __html: o.opinia }}
            ></StyledOpinion>
          </StyledItemSingle>
        ) : (
          <StyledItem key={o.imie}>
            <StyledPortraitWrapper>
              <StyledPortraitBackground
                bgColor={
                  o?.obrazPortret?.altText === "portret m"
                    ? styles.color.lightBlue
                    : styles.color.lightOrange
                }
              />
              <StyledPortraitImage
                image={
                  o?.obrazPortret?.localFile?.childImageSharp?.gatsbyImageData
                }
                alt={o?.obrazPortret?.altText ? o.obrazPortret.altText : ""}
              />
            </StyledPortraitWrapper>

            <StyledName>{o?.imie}</StyledName>
            <StyledOpinion
              dangerouslySetInnerHTML={{ __html: o.opinia }}
            ></StyledOpinion>
          </StyledItem>
        )
      )}
    </Slider>
    // </FullBleedWrapper>
  )
}
export default Opinions

/* Opinions.propTypes = {}

Opinions.defaultProps = {} */

/* STYLED COMPONENTS */

const StyledItem = styled.div`
  display: grid;
  padding-right: 50px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 0;
  }
`

const StyledPortraitWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px auto;
  }
`

const StyledPortraitBackground = styled.div`
  position: absolute;
  background-color: ${props => props.bgColor};
  border-radius: 100%;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const StyledPortraitImage = styled(GatsbyImage)`
  position: absolute;
  background-color: ${styles.color.grey};
  border-radius: 100%;
  left: 1.5vw;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const StyledName = styled.h4`
  grid-area: name;
  margin-bottom: 40px;
  font-family: ${styles.font.family.montserrat};
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
    place-self: center;
    text-align: center;
  }
`

const StyledOpinion = styled.div`
  grid-area: opinion;
  ${props =>
    props.single
      ? `column-count: 2;
  column-gap: 40px;`
      : null}

  @media only screen and (max-width: 1100px) {
    ${props => (props.single ? `column-count: 1; ` : null)}
  }
`

const StyledItemSingle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 1fr 1fr;
  grid-template-areas: "name opinion
  opinion opinion
  opinion opinion";
`
