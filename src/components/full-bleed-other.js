import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"

const FullBleedOther = ({
  hero,
  altHero,
  title,
  subtitle,
  client,
  orange,
  blend,
}) => {
  return (
    <StyledWrapper>
      <StyledStaticImage image={hero} alt={altHero} />
      <StyledBox>
        <StyledBoxBackground orange={orange} blend={blend} />
        <StyledBoxContent blend={blend}>
          <StyledBlog blend={blend}>
            {client ? "strefa klienta" : "strefa terapeuty"}
          </StyledBlog>
          <StyledTitle>{title}</StyledTitle>
          <StyledFlex
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></StyledFlex>
        </StyledBoxContent>
      </StyledBox>
    </StyledWrapper>
  )
}

export default FullBleedOther

/* FullBleedOther.propTypes = {
  hero: PropTypes.object,
  altHero: PropTypes.string,
  title: PropTypes.string,
}

FullBleedOther.defaultProps = {
  hero: {},
  altHero: "",
  title: "",
} */

/* STYLED COMPONENTS */

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  grid-column: 1 / -1;
  margin-bottom: 150px;
`

const StyledStaticImage = styled(GatsbyImage)`
  max-width: 100%;
  position: relative;
  min-height: 670px;
`
const StyledBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  left: 8%;
  top: 15%;
  padding: 60px 80px;
  min-height: 600px;
  font-family: Marcellus;
`

const StyledBoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  z-index: 3;
  color: ${props => (props.blend ? styles.color.white : styles.color.primary)};
`

const StyledTitle = styled.h1`
  margin-bottom: 40px;
  text-transform: uppercase;
`
const StyledBoxBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props =>
    props.orange ? styles.color.lightOrange : styles.color.grey};
  mix-blend-mode: ${props => (props.blend ? "multiply" : "none")};
  opacity: 0.89;
  z-index: 1;
`
const StyledBlog = styled.h4`
  width: max-content;
  padding-bottom: 20px;
  border-bottom: 1px solid
    ${props => (props.blend ? styles.color.white : styles.color.primary)};
`

const StyledFlex = styled.div`
  display: flex;
`


/* 
Pojedyncza sesja w niektórych przypadkach już może przynieść pożądany efekt.<br/>
Pierwsza sesja zazwyczaj stanowi gruntowne przygotowanie psychiczne i stawia fundamenty pod dalszą pracę terapeutyczną. Z mojej praktyki wynika, że większość problemów pozwala się rozwiązać w ciągu 3-5 
seansów. Konkretna liczba seansów będzie dokładnie oszacowana po wywiadzie diagnostycznym podczas pierwszego spotkania.<br/>

*/