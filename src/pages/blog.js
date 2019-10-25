import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import SEO from "../components/seo";
import BlogEntry from "../components/blog/BlogEntry";
import Styles from '../pagestyles/blog.module.scss'
const BlogHome = () => {

  let blogPageContent = useStaticQuery(graphql`
  {
    allContentfulBlogPosts {
      edges {
        node {
          id
          slug
          title
          categories
          datePublished(fromNow: true)
          blogMainImage {
            fluid(maxWidth: 768) {
              ...GatsbyContentfulFluid
            }
            description
          }
          description {
            description
          }
          blogContent {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
          updatedAt(fromNow: true)
        }
      }
    }
  
    allContentfulBlogMenu {
      edges {
        node {
          id
          blogMenuTitle
          blogMenuSubtitle
          blogMenuHeaderImage {
            fluid(maxWidth: 2500, maxHeight: 1250) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  
  `
  )

  // Shortend the Header Query for more Readable JSX
  const blogPageHeader = blogPageContent.allContentfulBlogMenu.edges[0].node

  return (

    <Layout>
      <SEO title="Blog" />
      <section className={Styles.blogHome}>

        <div className={Styles.blogHeader}>
          <Img fluid={blogPageHeader.blogMenuHeaderImage.fluid} alt="" />
          <div className={Styles.blogHeaderCopy}>
            <h1>
              {blogPageHeader.blogMenuTitle}
            </h1>
            <p>{blogPageHeader.blogMenuSubtitle}</p>
          </div>
        </div>

        <div className={Styles.blogList}>
          {blogPageContent.allContentfulBlogPosts.edges.map((entry) => {
            return (
              <div key={entry.node.id}>
                <BlogEntry entry={entry} />
              </div>
            )
          })}

        </div>
      </section>
    </Layout>
  )

}

export default BlogHome