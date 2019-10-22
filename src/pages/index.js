import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby"
import HomepageHeroHeader from '../components/Homepage/HomepageHeroHeader';
import IntroContentBlock from '../components/Homepage/IntroContentBlock';
import LatestBlog from "../components/Homepage/LatestBlog";
import InstagramFeed from "../components/Instagram/InstagramFeed";
import "../pagestyles/homepage.scss"



const IndexPage = () => {

  // a graphql query for homepage content
  // The content is sourced from contentful
  let homepageContent = useStaticQuery(graphql`
  {
    allContentfulHomepageContent {
      edges {
        node {
          homepageHeroTitle
          homepageHeroSubtitle
          homepageHeroButton1
          homepageHeroButton1Link
          homepageHeroButton2
          homepageHeroButton2Link
          homepageHeroImage {
            fluid (maxWidth:1500) {
              ...GatsbyContentfulFluid
            }
          }
          introTitle
          introBlock1Title
          introBlock2Title
          introBlock3Title
          introBlock1Image {
            fluid(maxWidth:100) {
              ...GatsbyContentfulFluid
            }
          }
          introBlock2Image {
            fluid(maxWidth:100) {
              ...GatsbyContentfulFluid
            }
          }
          introBlock3Image {
            fluid(maxWidth:100) {
              ...GatsbyContentfulFluid
            }
          }
          introBlock1Text {
            childMarkdownRemark {
              html
            }
          }
          introBlock2Text {
            childMarkdownRemark {
              html
            }
          }
          introBlock3Text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
  `
  )

    return (
      <Layout>
        <div className="homepage">
          <SEO title="Home" />
          <HomepageHeroHeader homepageContent={homepageContent.allContentfulHomepageContent.edges[0].node} />
          <IntroContentBlock homepageContent={homepageContent.allContentfulHomepageContent.edges[0].node}/>
          <LatestBlog /> {/* No props for latest blog as static queries don't allow dyanmic variables yet in gatsby latest blogs */}
          <InstagramFeed NumberPhotosToLoad={8} loadUserData={false} className={"instaHomepageWidget"} />
        </div>
      </Layout>
    )

  }

export default IndexPage
