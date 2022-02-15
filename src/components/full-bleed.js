import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import FullBleedWrapper from "./full-bleed-wrapper"

const FullBleed = ({
  heading,
  multiply,
  logoTop,
  logoBottom,
  hero,
  alt,
  logo,
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
}) => {
  return (
    <FullBleedWrapper $full={true} noPadding={noPadding}>
      <StyledImageWrapper>
        <StyledStaticImage image={hero} alt={alt} $isMain={$isMain} />
      </StyledImageWrapper>
      <StyledBox centered={centered}>
        <StyledBoxBackground background={background} multiply={multiply} />
        <StyledBoxContent>
          {heading ? (
            <StyledHeading multiply={multiply}>{heading}</StyledHeading>
          ) : null}
          {date ? <StyledDate>{date}</StyledDate> : null}
          {logoTop ? (
            <StyledStaticLogo dangerouslySetInnerHTML={{ __html: logo }} />
          ) : null}
          {title ? (
            <StyledTitle
              dangerouslySetInnerHTML={{ __html: title }}
              multiply={multiply}
              noStyle={noStyle}
              smallTitle={smallTitle}
            />
          ) : null}
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
          {ctaLabel && ctaUrl ? <Button label={ctaLabel} url={ctaUrl} /> : null}
          {logoBottom ? (
            <StyledStaticLogo
              dangerouslySetInnerHTML={{ __html: logo }}
              logoBottom={logoBottom}
            />
          ) : null}
        </StyledBoxContent>
      </StyledBox>
    </FullBleedWrapper>
  )
}

export default FullBleed

/* STYLED COMPONENTS */
const StyledImageWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    object-fit: contain;
    object-position: 500% 50%;
  }
`
const StyledStaticImage = styled(GatsbyImage)`
  max-width: 100%;
  position: relative;
  height: ${props => (props.$isMain ? "780px" : "670px")};

  @media only screen and (max-width: 1200px) {
    height: 540px;
  }
  @media only screen and (max-width: 600px) {
    height: 320px;
    transform: scale(1.3);
  }
`

const StyledBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  left: 8%;
  top: ${props => (props.centered ? "-4%" : "15%")};
  min-width: 600px;
  max-width: 750px;
  min-height: 600px;
  padding: 60px 80px;

  @media only screen and (max-width: 1200px) {
    padding: 30px 40px;
    min-width: 400px;
    max-width: 550px;
    min-height: 400px;
    top: ${props => (props.centered ? "-4%" : "20%")};
  }

  @media only screen and (max-width: 600px) {
    align-self: center;
    padding: 0px 25px;
    min-width: 90%;
    min-height: 250px;
    top: 30%;
  }
`

const StyledBoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 3;
`
const StyledTitle = styled.h1`
  /* white-space: nowrap; */
  margin-top: 30px;
  /* margin-bottom: 70px; */
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

const StyledStaticLogo = styled.div`
  width: 260px;
  height: auto;
  margin-top: ${props => (props.logoBottom ? "100px" : null)};
  @media only screen and (max-width: 1200px) {
    width: 192px;
    height: auto;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
    width: 130px;
    height: auto;
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
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
