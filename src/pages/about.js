import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LoadingPage from "../components/plugins/LoadingPage"
import * as contentful from "contentful";
const ReactMarkdown = require('react-markdown/with-html');
import("./routestyles/about.scss");




class About extends React.Component {

    state = {
        isAboutLoading: true,
        "aboutJSON": [],
    }

    client = contentful.createClient({
        space: 'z41rwa3gfxym',
        accessToken: 'V9pTuf1KvaHDpf86kp5tHEJQyKOrHjHEgCAu0NSHwTg'
    })

    // 
    AboutQuery = {
        content_type: "aboutPage",
    }

    componentDidMount() {
        // Functions to Fetch Data from Contentful
        this.FetchByContentType(this.AboutQuery).then(this.SetAboutContent).catch(console.error)
    }

    // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
    FetchByContentType = (query) => this.client.getEntries(query)

    // Sets the response once it has come back into state for About Intro
    SetAboutContent = response => {
        this.setState({
            isAboutLoading: false,
            "aboutJSON": response.items[0].fields
        })
    }

    render() {
        if (!this.state.isAboutLoading) {
            return (

                <Layout>
                    <SEO title="Blog" description="testing" lang="en" meta="what what" />
                    <div className="about__container">

                        <h1>{this.state.aboutJSON.aboutTitle}</h1>
                        <hr />

                        <ReactMarkdown escapeHtml={false}>
                            {this.state.aboutJSON.aboutContent ? this.state.aboutJSON.aboutContent:null }
                        </ReactMarkdown>

                    </div>
                </Layout>
            )
        }
        else { return (<LoadingPage />) }


    }
}

export default About