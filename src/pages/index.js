import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomepageHeroHeader from '../components/Homepage/HomepageHeroHeader';
import IntroContentBlock from '../components/Homepage/IntroContentBlock';
import LatestBlog from "../components/Homepage/LatestBlog";
import InstagramFeed from "../components/Instagram/InstagramFeed";
import "../pagestyles/homepage.scss"



class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <div className="homepage">
          <SEO title="Home" />
          <HomepageHeroHeader />
          <IntroContentBlock />
          <LatestBlog />
          <InstagramFeed NumberPhotosToLoad={8} loadUserData={false} className={"instaHomepageWidget"} />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
