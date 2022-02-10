import * as React from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "../styles"

const MenuItem = ({ to, label, inverted, className }) => {
  return (
    <StyledLink to={to} inverted={inverted} className={className}>
      {label}
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  width: fit-content;
  margin: 0 16px;

  /* unvisited link */
  :link {
    color: ${styles.color.primary};
  }

  /* visited link */
  :visited {
    color: ${styles.color.primary};
  }

  /* mouse over link */
  :hover {
    color: ${props =>
      props.inverted ? styles.color.white : styles.color.lightBlue};
  }

  /* selected link */
  :active {
    color: ${styles.color.lightBlue};
  }
`

/* MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
}

MenuItem.defaultProps = {
  url: `/`,
  label: ``,
} */

export default MenuItem
