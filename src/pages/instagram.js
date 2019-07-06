
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InstagramFeed from "../components/plugins/InstagramFeed"

const InstagramPage = () => (

    <Layout>
        <SEO title="Blog" />
        <div className="instagramApp">
            <InstagramFeed />
        </div>
    </Layout>

)

export default InstagramPage