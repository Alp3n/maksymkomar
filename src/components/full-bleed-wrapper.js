import * as React from "react"
import styled from "styled-components"

const FullBleedWrapper = ({
  children,
  background,
  height,
  id,
  $full,
  noMargin,
  somePadding,
  marginBottom
}) => (
  <StyledWrapper
    background={background}
    height={height}
    id={id}
    noMargin={noMargin}
    somePadding={somePadding}
    marginBottom={marginBottom}
  >
    <StyledInner $full={$full ? true : false}>{children}</StyledInner>
  </StyledWrapper>
)

export default FullBleedWrapper

/* STYLED COMPONENTS */
const StyledWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${props => (props.somePadding ? "65px 0" : "0")};
  margin-bottom: ${props => (props.noMargin ? "0" : "100px")};
  place-content: center;
  background-color: ${props => (props.background ? props.background : "none")};
  scroll-margin-top: 120px;
  ${props =>
    props.height === "small"
      ? `min-height: 400px`
      : props.height === "medium"
      ? `min-height: 550px`
      : props.height === "big"
      ? `min-height: 680px`
      : null};
  @media only screen and (max-width: 600px) {
    margin-bottom: ${props => (props.noMargin ? "0" : "50px")};
    padding: ${props => (props.somePadding ? "25px 0" : "0")};
    /* scroll-margin-top: 1000px; */
  }
`
const StyledInner = styled.div`
  position: relative;
  > * {
    grid-column: 2;
  }
  display: grid;
  grid-template-columns: ${props =>
    props.$full ? `1fr min(1920px, 100%) 1fr` : `1fr min(1420px, 100%) 1fr`};
  @media only screen and (max-width: 1560px) {
    grid-template-columns: ${props =>
      props.$full ? `1fr min(1920px, 100%) 1fr` : `1fr min(90%, 100%) 1fr`};
  }
`
