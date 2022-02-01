import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styles from "../styles"
import Button from "./button"
import { Link } from "gatsby"

const BlogPreview = ({ posts }) => {
  return (
    <StyledWrapper>
      <StyledTitleMain>Blog</StyledTitleMain>
      <StyledPostsWrapper>
        {posts.map(p => (
          <StyledBlogItem key={p.node.id}>
            <StyledImageWrapper>
              <StyledCategory>
                {p.node.categories.nodes.map(c => c.name)}
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
            <StyledLink to={`blog/${p.node.slug}`}>Więcej</StyledLink>
          </StyledBlogItem>
        ))}
      </StyledPostsWrapper>
      <StyledButtonWrapper>
        <Button label="Zobacz wszystkie" />
      </StyledButtonWrapper>
    </StyledWrapper>
  )
}

export default BlogPreview

BlogPreview.propTypes = {}

BlogPreview.defaultProps = {}

/* STYLED COMPONENTS */
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vw 0;
`
const StyledTitleMain = styled.h1`
  white-space: nowrap;
  margin-bottom: 3vw;
  font-size: 4vw;
  font-weight: 400;
  line-height: 4.4vw;
  color: ${styles.color.primary};
`

const StyledPostsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`
const StyledBlogItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`
const StyledImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  margin-bottom: 30px;
`
const StyledCategory = styled.div`
  position: absolute;
  bottom: 25px;
  left: -15px;
  padding: 5px 10px;
  background-color: ${styles.color.lightBlue};
  z-index: 2;
`
const StyledImage = styled(GatsbyImage)``

const StyledTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
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
`
const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
