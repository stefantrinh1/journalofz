import React from "react";
import Layout from "../layout";
import SEO from "../seo";

const BlogTemplate = (props) => {

    const blogContent = props.pageContext.node

    return (

    <Layout>
    <SEO title="About" description="About Page for Stefan Trinh the Web Developer" />
        <article>
            <h1>{blogContent.title}</h1>
            
        </article>
    
    </Layout>
    )
}

export default BlogTemplate