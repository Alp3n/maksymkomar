import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "../styles"

const MenuItem = ({ url, label }) => {
  return <StyledLink to={url}>{label}</StyledLink>
}

const StyledLink = styled(Link)`
  font-family: ${styles.font.family.montserrat};
  font-size: 20px;
  /* font-size: ${styles.font.size.menu}; */
  text-transform: capitalize;
  text-decoration: none;
  margin: 0 1vw;

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
    color: ${styles.color.lightBlue};
  }

  /* selected link */
  :active {
    color: ${styles.color.lightBlue};
  }
`

MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
}

MenuItem.defaultProps = {
  url: `/`,
  label: ``,
}

export default MenuItem
