import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"

const FullBleedMobile = ({
  heading,
  multiply,
  logoTop,
  logoBottom,
  hero,
  alt,
  logo,
  altLogo,
  background,
  title,
  subtitle,
  categories,
  ctaLabel,
  ctaUrl,
  $isMain,
  subtitleBig,
  duration,
  format,
  price,
  noStyle,
  date,
  smallTitle,
  centered,
  noPadding,
  objectPosition,
  noMargin,
}) => {
  return (
    <FullBleedWrapper $full={true} noPadding={noPadding} noMargin={noMargin}>
      <StyledImageWrapper>
        <StyledStaticImage
          image={hero}
          alt={alt}
          $isMain={$isMain}
          objectPosition={objectPosition}
        />

        <StyledBox centered={centered}>
          <StyledBoxBackground background={background} multiply={multiply} />
          <StyledBoxContent>
            {heading ? (
              <StyledHeading multiply={multiply}>{heading}</StyledHeading>
            ) : null}
            {date ? <StyledDate>{date}</StyledDate> : null}
            {logoTop ? <StyledStaticLogo image={logo} alt={altLogo} /> : null}
            {title ? (
              <StyledTitle
                dangerouslySetInnerHTML={{ __html: title }}
                multiply={multiply}
                noStyle={noStyle}
                smallTitle={smallTitle}
              />
            ) : null}

            {categories ? (
              <StyledFlex multiply={multiply}>
                {categories &&
                  categories.map(c => (
                    <StyledLink key={c.name} to={`/blog/=?${c.slug}`}>
                      {c.name}
                    </StyledLink>
                  ))}
              </StyledFlex>
            ) : null}

            {logoBottom ? (
              <StyledStaticLogo image={logo} alt={altLogo} />
            ) : null}
          </StyledBoxContent>
        </StyledBox>
      </StyledImageWrapper>
      <FullBleedWrapper noMargin>
        {duration || format || price ? (
          <StyledSuggestion multiply={multiply}>
            <span>
              <strong>Format</strong> - {format}
            </span>
            <span>
              <strong>Długość</strong> - {duration}
            </span>
            <span>
              <strong>Cena</strong> - {price}
            </span>
          </StyledSuggestion>
        ) : null}
        {subtitle ? (
          <StyledFlex
            dangerouslySetInnerHTML={{ __html: subtitle }}
            subtitleBig={subtitleBig}
            multiply={multiply}
          />
        ) : null}
        {ctaLabel && ctaUrl ? (
          <StyledFlex>
            <Button label={ctaLabel} url={ctaUrl} />
          </StyledFlex>
        ) : null}
      </FullBleedWrapper>
    </FullBleedWrapper>
  )
}

export default FullBleedMobile

const StyledImageWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
`

/* STYLED COMPONENTS */
const StyledStaticImage = styled(GatsbyImage)`
  max-width: 100%;
  position: relative;
  height: ${props => (props.$isMain ? "420px" : "400px")};

  /* transform: scale(1.5); */
`

const StyledBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  left: 5%;
  bottom: -5%;
  align-self: center;
  padding: 30px 0;
  min-width: 90%;
  /* min-height: 250px;  */
  /* top: 30%; */
`

const StyledBoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 3;
`
const StyledTitle = styled.h1`
  /* white-space: nowrap; */
  /* margin-top: 30px; */
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: ${props => (props.smallTitle ? "2.2rem" : null)};
  text-transform: ${props => (props.noStyle ? "none" : "uppercase")};
  color: ${props =>
    props.multiply ? styles.color.white : styles.color.primary};

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`

const StyledStaticLogo = styled(GatsbyImage)`
  width: 260px;
  margin-bottom: 35px;
  @media only screen and (max-width: 1150px) {
    margin-bottom: 20px;
    width: 192px;
    height: 64px;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
    width: 130px;
    height: 42px;
  }
`

const StyledBoxBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
  mix-blend-mode: ${props => (props.multiply ? "multiply" : null)};
  opacity: 0.89;
  z-index: 1;
`
const StyledHeading = styled.h4`
  width: max-content;
  padding-bottom: 20px;
  border-bottom: 1px solid
    ${props => (props.multiply ? styles.color.white : styles.color.primary)};
  color: ${props =>
    props.multiply ? styles.color.white : styles.color.primary};
`

const StyledFlex = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto;
  font-size: ${props => (props.subtitleBig ? "1.2rem" : null)};
  color: ${props =>
    props.multiply ? styles.color.white : styles.color.primary};
  /* margin-bottom: 40px; */
  gap: 10px;
  /* text-align: center; */
  justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
  font-style: italic;
  color: ${props =>
    props.multiply ? styles.color.white : styles.color.primary};

  :hover {
    text-decoration: underline;
  }
`

const StyledSuggestion = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props =>
    props.multiply ? styles.color.white : styles.color.primary};
  margin-bottom: 30px;
`
const StyledDate = styled.div`
  font-style: italic;
`
