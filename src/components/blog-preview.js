import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import FullBleedWrapper from "./full-bleed-wrapper"
import Title from "./title"
import { useMediaQuery } from "react-responsive"

const BlogPreview = ({ noButton, grid, filterPhrase }) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" })
  const [blogPosts, setBlogPosts] = useState(null)
  const data = useStaticQuery(graphql`
    query BlogPosts {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { databaseId: { ne: 115 } } } }
        }
      ) {
        edges {
          node {
            id
            excerpt
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(quality: 100)
                  }
                }
                altText
              }
            }
            title
            slug
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `)

  /* let resultArray = blogPosts.filter(post =>
    post.node.categories.nodes.every(category => filterPhrase.includes(category.name))
  ) */

  useEffect(() => {
    console.log(data.allWpPost.edges)
    setBlogPosts(
      data.allWpPost.edges.filter(post =>
        post.node.categories.nodes.some(category =>
          filterPhrase?.includes(category.name)
        )
      )
    )
  }, [filterPhrase])

  const settings = {
    infinite: false,
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <StyledArrow right />,
    prevArrow: <StyledArrow left />,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  }
  return (
    <FullBleedWrapper noPadding={isMobile ? true : false}>
      {grid ? (
        <StyledGrid>
          {blogPosts?.map(p => (
            <StyledBlogItem key={p.node.id}>
              <StyledImageWrapper>
                <StyledCategory p={p.node.categories.nodes}>
                  {p.node.categories.nodes[0].name}
                  {p.node.categories.nodes[1]?.name ? ", " : null}
                  {p.node.categories.nodes[1]?.name}
                </StyledCategory>
                <StyledImage
                  image={
                    p.node.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={p.node.title}
                />
              </StyledImageWrapper>
              <StyledTitle>{p.node.title}</StyledTitle>
              <StyledDesc
                dangerouslySetInnerHTML={{ __html: p.node.excerpt }}
              ></StyledDesc>
              <StyledLink to={`/blog/${p.node.slug}`} className="more">
                Więcej
              </StyledLink>
            </StyledBlogItem>
          ))}
        </StyledGrid>
      ) : filterPhrase ? (
        <>
          <Title title={filterPhrase} />
          <Slider {...settings}>
            {blogPosts?.map(p => (
              <StyledBlogItem key={p.node.id}>
                <StyledImageWrapper>
                  <StyledCategory>
                    {p.node.categories.nodes[0].name}
                    {p.node.categories.nodes[1]?.name ? ", " : null}
                    {p.node.categories.nodes[1]?.name}
                  </StyledCategory>
                  <StyledImage
                    image={
                      p.node.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={p.node.title}
                  />
                </StyledImageWrapper>
                <StyledTitle>{p.node.title}</StyledTitle>
                <StyledDesc
                  dangerouslySetInnerHTML={{ __html: p.node.excerpt }}
                ></StyledDesc>
                <StyledLink to={`/blog/${p.node.slug}`} className="more">
                  Więcej
                </StyledLink>
              </StyledBlogItem>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <Title title={"Blog"} />
          <Slider {...settings}>
            {data.allWpPost.edges.map(p => (
              <StyledBlogItem key={p.node.id}>
                <StyledImageWrapper>
                  <StyledCategory>
                    {p.node.categories.nodes[0].name}
                    {p.node.categories.nodes[1]?.name ? ", " : null}

                    {p.node.categories.nodes[1]?.name}
                  </StyledCategory>
                  <StyledImage
                    image={
                      p.node.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={p.node.title}
                  />
                </StyledImageWrapper>
                <StyledTitle>{p.node.title}</StyledTitle>
                <StyledDesc
                  dangerouslySetInnerHTML={{ __html: p.node.excerpt }}
                ></StyledDesc>
                <StyledLink to={`/blog/${p.node.slug}`} className="more">
                  Więcej
                </StyledLink>
              </StyledBlogItem>
            ))}
          </Slider>
        </>
      )}
      {noButton ? null : (
        <StyledButtonWrapper>
          <Button label="Zobacz wszystkie" url={"/blog/"} />
        </StyledButtonWrapper>
      )}
    </FullBleedWrapper>
  )
}

export default BlogPreview

/* STYLED COMPONENTS */
const StyledTitleMain = styled.h1`
  margin-bottom: 60px;
  @media only screen and (max-width: 1200px) {
    padding: 0 40px;
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 20px;
    font-size: 2rem;
    margin-bottom: 30px;
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;

  @media only screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const StyledBlogItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  padding: 0 20px;
`
const StyledImageWrapper = styled.div`
  position: relative;
  max-width: 400px;
  height: auto;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    max-width: 300px;
  }
`
const StyledCategory = styled.div`
  position: absolute;
  bottom: 8%;
  left: -15px;
  padding: 5px 10px;
  background-color: ${styles.color.lightBlue};
  z-index: 9;
  ${props => (props.p > 1 ? `font-size: 5px` : null)}
`
const StyledImage = styled(GatsbyImage)`
  max-height: 260px;
`

const StyledTitle = styled.h4`
  font-family: ${styles.font.family.montserrat};
  @media only screen and (max-width: 1200px) {
    font-size: 1.7rem;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const StyledDesc = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 33px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${styles.color.primary};
  z-index: 3;
  width: fit-content;
`
const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const StyledArrow = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.left ? "-50px" : null)};
  right: ${props => (props.right ? "-50px" : null)};
  border-top: 2px solid ${styles.color.primary};
  border-right: 2px solid ${styles.color.primary};
  transform: ${props => (props.left ? "rotate(-135deg)" : "rotate(45deg)")};
  height: 30px;
  width: 30px;
  z-index: 100;
  cursor: pointer;
`
