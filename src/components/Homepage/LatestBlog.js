
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import SectionTitle from "./SectionTitle";
import Styles from "./LatestBlog.module.scss";


const LatestBlog = () => {

    const data = useStaticQuery(graphql`
    {
        allContentfulBlogPosts (sort:{fields: updatedAt, order:[DESC]}, limit:3){
        edges {
            node {
                id
                title
                description {
                    description
                }
                updatedAt (fromNow:true)
                categories
                blogMainImage {
                    fluid{
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
    `
    )

    return (
        <section className={Styles.blogList}>

            <SectionTitle title="What's New" textAlign="center"/>

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
                                    <i>By <b><Link to='/about'>Journal of Z</Link></b></i> | {blog.node.updatedAt} | {`${blog.node.blogContent.childMarkdownRemark.timeToRead} Min Read`} 
                                    </p>

                                <p className={Styles.description}>
                                    {`${blog.node.description.description.substr(0, 100)}...`}
                                </p>
                                <button>Find Out More ></button>
                            </div>
                        </div>
                        <div className={Styles.imageContainer}>

                            <div className={Styles.imageSubContainer}>
                                <div className={Styles.imageFill} />
                                <img
                                    srcSet={blog.node.blogMainImage.fluid.srcSet}
                                    alt={blog.node.blogMainImage.description}
                                />
                                


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


export default LatestBlog