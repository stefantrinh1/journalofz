import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>The current page does not exist or has been deleted.</p>

    <Link to="/">Return To Homepage</Link>
    
  </Layout>
)

export default NotFoundPage
