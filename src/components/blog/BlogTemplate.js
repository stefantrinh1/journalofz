import React from "react";
import Layout from "../layout";
import SEO from "../seo";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby"
import Styles from "./BlogTemplate.module.scss";

export default ({ data }) => {

    const authorDetails = data.allContentfulGeneralInformation.edges[0].node
    const blogData = data.contentfulBlogPosts

    return (

        <Layout>
            <SEO title="About" description="About Page for Stefan Trinh the Web Developer" />
            <article className={Styles.blogContainer}>
                <h1>{blogData.title}</h1>
                <div className={Styles.blogInfoWidget}>
                    <Img fluid={authorDetails.profilePicture.fluid} alt={authorDetails.profilePicture.description} />
                    <div className={Styles.blogInfoWidgetSubContainer}>
                        <p>By <Link to="/about" >{authorDetails.authorOfSite}</Link></p>
                        <p>{blogData.updatedAt} · {blogData.blogContent.childMarkdownRemark.timeToRead} Min Read</p>
                    </div>
                </div>
                <div className={Styles.categories}>
                    {blogData.categories.map((category)=>(
                        <span>{category}</span>
                    ))}
                </div>
                <Img
                    fluid={blogData.blogMainImage.fluid}
                    alt={blogData.blogMainImage.description} />
                <div class={Styles.blogMainContent}dangerouslySetInnerHTML={{ __html: blogData.blogContent.childMarkdownRemark.html }} />
            </article>
        </Layout>
    )
}


export const query = graphql`
query($slug: String!) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      id
      slug
      title
      categories
      blogMainImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      blogContent {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      updatedAt(formatString: "MMM DD")
    }
    allContentfulGeneralInformation {
        edges{
            node {
                authorOfSite
                profilePicture {
                   fluid (maxWidth: 100){
                    ...GatsbyContentfulFluid
                   }
                   description
                }
            }
        }
      } 
  }
    

  
  `

