import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogHome = () => (
  <Layout>
    <SEO title="Blog" />

        <h1>Blog</h1>


    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/instagram">Go to Instagram</Link>
  </Layout>
)

export default BlogHome