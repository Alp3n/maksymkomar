import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../styles"

const Button = ({ plain, label, url, onClick, href, disabled, type }) => {
  return url ? (
    <StyledButtonLink to={url} plain={plain}>
      {label}
    </StyledButtonLink>
  ) : href ? (
    <StyledButtonHref plain={plain} href={href}>
      {label}
    </StyledButtonHref>
  ) : (
    <StyledButton
      plain={plain}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
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
  font-size: 1rem;
  text-decoration: none;
  background: ${props =>
    props.plain ? styles.color.white : styles.color.lightBlue};
  color: ${styles.color.primary};
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background: ${styles.color.primary};
    color: ${styles.color.white};
  }

  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 1160px) {
    padding: 4px 30px;
  }
  @media only screen and (max-width: 600px) {
    padding: 4px 20px;
    font-size: 1rem;
  }
`

const StyledButtonLink = styled(Link)`
  width: fit-content;
  padding: 8px 50px;
  border-radius: 32px;
  border: ${props =>
    props.plain ? ` 1px solid ${styles.color.primary}` : "none"};
  font-size: 1rem;
  text-decoration: none;
  background: ${props =>
    props.plain ? styles.color.white : styles.color.lightBlue};
  color: ${styles.color.primary};
  text-transform: capitalize;

  :hover {
    background: ${styles.color.primary};
    color: ${styles.color.white};
  }

  @media only screen and (max-width: 1200px) {
    padding: 4px 40px;
  }

  @media only screen and (max-width: 600px) {
    padding: 4px 30px;
    font-size: 1rem;
  }
`

const StyledButtonHref = styled.a`
  width: fit-content;
  padding: 8px 50px;
  border-radius: 32px;
  border: ${props =>
    props.plain ? ` 1px solid ${styles.color.primary}` : "none"};
  font-size: 1rem;
  text-decoration: none;
  background: ${props =>
    props.plain ? styles.color.white : styles.color.lightBlue};
  color: ${styles.color.primary};
  text-transform: capitalize;

  :hover {
    background: ${styles.color.primary};
    color: ${styles.color.white};
  }

  @media only screen and (max-width: 1200px) {
    padding: 4px 40px;
  }
  @media only screen and (max-width: 1160px) {
    padding: 4px 30px;
    font-size: 1rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 4px 20px;
    font-size: 1rem;
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
