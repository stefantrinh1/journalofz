
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import SectionTitle from "./SectionTitle";
import Styles from "./LatestBlog.module.scss";

const LatestBlog = (props) => {

    const data = useStaticQuery(graphql`
    {
        allContentfulBlogPosts (sort:{fields: updatedAt, order:[DESC]}, limit:3){
        edges {
            node {
                id
                slug
                title
                description {
                    description
                }
                updatedAt (fromNow:true)
                categories
                blogMainImage {
                    fluid (maxWidth:1500) {
                        ...GatsbyContentfulFluid
                    }
                }
                blogContent{
                    childMarkdownRemark {
                      timeToRead
                    }
                  }
            }
        }
      }
    }
    `)

    return (
        <section className={Styles.blogList}>

           <SectionTitle title="What's New" textAlign="center" />

          {
                data.allContentfulBlogPosts.edges.map((blog) => (

                    <section key={blog.node.id} className={Styles.latestBlog}>
                        <div className={Styles.copyContainer}>

                            <div className={Styles.copySubContainer}>

                                <h2><u>{blog.node.title}</u></h2>

                                <div className={Styles.category}>
                                    {blog.node.categories.map((category) => {
                                        return <span key={category}>{category}</span>
                                    }
                                    )}
                                </div>

                                <p>
                                    <i>By <b><Link to='/about'>Journal of Z</Link></b></i> 
                                    <span className={Styles.interpunct}>·</span> 
                                    {blog.node.updatedAt} 
                                    <span className={Styles.interpunct}>·</span> 
                                    {`${blog.node.blogContent.childMarkdownRemark.timeToRead} Min Read`}
                                </p>

                                <p className={Styles.description}>
                                    {`${blog.node.description.description.substr(0, 100)}...`}
                                </p>
                                
                                <Link to={`/blog/${blog.node.slug}`}><button>Find Out More ></button></Link>
                            </div>
                        </div>
                        <div className={Styles.imageContainer}>

                            <div className={Styles.imageSubContainer}>
                                {/* <div className={Styles.imageFill} /> */}
                                {/* <img
                                    srcSet={blog.node.blogMainImage.fluid.srcSet}
                                    alt={blog.node.blogMainImage.description}
                                /> */}

                                <Img fluid={blog.node.blogMainImage.fluid} />



                            </div>

                        </div>
                        <hr />


                    </section>

                )
                )
            }

        </section>
    )
}

LatestBlog.defaultProps = {
    numberBlogs: '3'
};


export default LatestBlog