import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import LoadingPage from "../components/plugins/LoadingPage"
import SEO from "../components/seo"
import * as contentful from "contentful";
import BlogEntry from "../components/blog/BlogEntry"

class BlogHome extends React.Component {

  state = {
    isBlogsLoading: true,
    "blogsJSON": [],
  }

  client = contentful.createClient({
    space: 'z41rwa3gfxym',
    accessToken: 'V9pTuf1KvaHDpf86kp5tHEJQyKOrHjHEgCAu0NSHwTg'
  })

  // 
  BlogsQuery = {
    content_type: "blogPosts",
  }

  componentDidMount() {
    // Functions to Fetch Data from Contentful
    this.FetchByContentType(this.BlogsQuery).then(this.SetBlogsContent).catch(console.error)
  }
  componentDidUpdate() {
    console.log(this.state.blogsJSON)
  }

  // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
  FetchByContentType = (query) => this.client.getEntries(query)

  // Sets the response once it has come back into state for About Intro
  SetBlogsContent = response => {
    this.setState({
      isBlogsLoading: false,
      "blogsJSON": response.items
    })
  }


  render() {


    if (!this.state.isBlogsLoading) {
      // loops over the list of Objects from the JSON 
      let BlogList = this.state.blogsJSON.map((entry) => {
        return (
          <div key={entry.sys.id}>
            <BlogEntry entry={entry} />
          </div>
        )
      })
      return (
        <Layout>
          <SEO title="Blog" />

          <h1 style={{textAlign:'center'}}>
            The Blog
          </h1>
          <hr/>

          {BlogList}
        </Layout>
      )
    }
    else { return (<LoadingPage />) }
  }
}

export default BlogHome