import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../styles"

const Button = ({ plain, label, url }) => {
  return (
    <StyledButton to={url} plain={plain}>
      {label}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled(Link)`
  width: fit-content;
  padding: 8px 50px;
  border-radius: 32px;
  border: ${props =>
    props.plain ? ` 1px solid ${styles.color.primary}` : "none"};
  font-size: 20px;
  text-decoration: none;
  background: ${props =>
    props.plain ? styles.color.white : styles.color.lightBlue};
  color: ${styles.color.primary};
  text-transform: capitalize;

  @media only screen and (max-width: 1200px) {
    padding: 4px 40px;
  }
`
/* Button.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
}

Button.defaultProps = {
  url: "",
  label: "",
} */
