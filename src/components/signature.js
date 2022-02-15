import React from "react"
import styles from "../styles"
import styled from "styled-components"

const Signature = ({ svg, width, marginBottom, color }) => {
  return (
    <StyledSvg
      dangerouslySetInnerHTML={{ __html: svg }}
      width={width}
      color={color}
      marginBottom={marginBottom}
    />
  )
}
export default Signature

const StyledSvg = styled.div`
  width: ${props => props.width};
  height: auto;
  margin-bottom: ${props => props.marginBottom};
  svg {
    display: block;
    fill: ${props => props.color};
  }
`
