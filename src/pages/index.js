import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as contentful from "contentful";
import HomepageCarousel from "../components/plugins/HomepageCarousel"
import LoadingPage from "../components/plugins/LoadingPage";


class IndexPage extends React.Component {


  state = {
    isCarouselLoading: true,
    "CarouselJSON": [],
  }

  client = contentful.createClient({
    space: 'z41rwa3gfxym',
    accessToken: 'V9pTuf1KvaHDpf86kp5tHEJQyKOrHjHEgCAu0NSHwTg'
  })

  // 
  CarouselQuery = {
    content_type: "homepageCarousel",
  }

  componentDidMount() {
    // Functions to Fetch Data from Contentful
    this.FetchByContentType(this.CarouselQuery).then(this.SetCarousel).catch(console.error)
  }
  componentDidUpdate() {
    console.log(this.state.CarouselJSON)
  }

  // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
  FetchByContentType = (query) => this.client.getEntries(query)

  // Sets the response once it has come back into state for About Intro
  SetCarousel = response => {
    this.setState({
      "CarouselJSON": response.items,
      isCarouselLoading: false
      
    })
  }

  render() {
    if (!this.state.isCarouselLoading) {
      return (
        <Layout>
          <SEO title="Home" />
          {console.log(this.state.CarouselJSON)}
          <HomepageCarousel images={this.state.CarouselJSON} />
        </Layout>
      )
    }
    else {
      return (<LoadingPage />)
    }
  }

}
export default IndexPage
