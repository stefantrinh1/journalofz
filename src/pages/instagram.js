
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InstagramFeed from "../components/Instagram/InstagramFeed"

const InstagramPage = () => (

    <Layout>
        <SEO title="Blog" />
        <div className="instagramApp">
            <InstagramFeed NumberPhotosToLoad={20}/>
        </div>
    </Layout>

)

export default InstagramPage