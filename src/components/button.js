import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../styles"

const Button = ({ plain, label, url, onClick, href }) => {
  return url ? (
    <StyledButtonLink to={url} plain={plain}>
      {label}
    </StyledButtonLink>
  ) : href ? (
    <StyledButtonHref plain={plain} href={href}>
      {label}
    </StyledButtonHref>
  ) : (
    <StyledButton plain={plain} onClick={onClick}>
      {label}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
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
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    padding: 4px 40px;
  }
`

const StyledButtonLink = styled(Link)`
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

const StyledButtonHref = styled.a`
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
