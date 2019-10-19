import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";


import "../pagestyles/homepage.scss"



class Portfolio extends React.Component {


  render() {
    return (
      <Layout>
        <div className="homepage">
          <SEO title="Home" />
          <h1>Portfolio</h1>
        </div>
      </Layout>
    )
  }
}
export default Portfolio