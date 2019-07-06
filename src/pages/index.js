import React from "react";
import Layout from "../components/layout";
import HomepageCarousel from "../components/plugins/HomepageCarousel"
import SEO from "../components/seo";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <HomepageCarousel />



  </Layout>
)

export default IndexPage
