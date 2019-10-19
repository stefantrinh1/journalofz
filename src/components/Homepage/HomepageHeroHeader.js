// import { Link } from "gatsby";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import HeaderImage from "../../images/headerImage.jpg";
import Styles from "./HomepageHeroHeader.module.scss";

// heroImage: file(relativePath: { eq: "headerImage.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 2500, maxHeight: 1500) {
//      srcSet
//    }
//  }
// }
const HomepageHeroHeader = () => {

  const headerContent = useStaticQuery(graphql`
{
  allContentfulHomepageContent {
    edges {
      node {
        homepageHeroImage {
          fluid {
            srcSet
          }
        }
      }
    }
  }

  allContentfulGeneralInformation {
      nodes {
        id
        siteTitle
        siteSubtitle
      }
    }
}
`
  )

  return (
    <section className={Styles.hero} >
      <div className={Styles.heroCopy}>
        <h1>{headerContent.allContentfulGeneralInformation.nodes[0].siteTitle}</h1>
        <p>{headerContent.allContentfulGeneralInformation.nodes[0].siteSubtitle}</p>
        <Link to='/blog'><button className={Styles.btn1}>Explore with me</button></Link>
        <Link to='/instagram'><button className={Styles.btn2}>Go To Instagram</button></Link>
      </div>
      {console.log(headerContent.allContentfulHomepageContent.edges[0].node.homepageHeroImage.fluid)}
      <img srcSet={headerContent.allContentfulHomepageContent.edges[0].node.homepageHeroImage.fluid.srcSet} />
    </section>

  )
}

export default HomepageHeroHeader