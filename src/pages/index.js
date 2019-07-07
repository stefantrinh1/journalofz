import React from "react";
import Layout from "../components/layout";
import HomepageCarousel from "../components/plugins/HomepageCarousel"
import SEO from "../components/seo";
import * as contentful from "contentful";


const IndexPage = () => {

  const client = contentful.createClient({
    space: '6uk9nhmjdkre',
    accessToken: 'vRPrbrCwApcb4AXyT2yS3mXp2JNvSMdzTZ1k2jhmEAA'
  })

  return (
  <Layout>
    <SEO title="Home" />

    <HomepageCarousel />



  </Layout>
  )
  }

export default IndexPage
