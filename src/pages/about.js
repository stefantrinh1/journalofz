import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from 'gatsby-image';
import Styles from '../pagestyles/about.module.scss';

const About = () => {

    const data = useStaticQuery(graphql`
    {
        contentfulAboutPage (contentful_id: {eq :"428j3DQVxG5IDPvmTo2zOD"}) {
            id
            aboutMetaTitle
            aboutMetaDescription
            aboutTitle
            aboutSubtitle
            aboutContent {
                childMarkdownRemark {
                  html
                }
            }
            aboutPageImage {
              fluid(maxWidth: 2500, maxHeight: 1400) {
               ...GatsbyContentfulFluid
              }
            }
        }

    }
    `
    )
    return (

        <Layout>
            <SEO title={data.contentfulAboutPage.aboutMetaTitle} description={data.contentfulAboutPage.aboutMetaDescription} lang="en" />
            <div className={Styles.aboutHero}>
                <div className={Styles.aboutHeroCopy}>
                    <h1>
                        {data.contentfulAboutPage.aboutTitle}
                    </h1>
                    <p>
                        {data.contentfulAboutPage.aboutSubtitle}
                    </p>
                </div>
                <Img fluid={data.contentfulAboutPage.aboutPageImage.fluid} />

            </div>
            <section className={Styles.aboutContent} dangerouslySetInnerHTML={{ __html: data.contentfulAboutPage.aboutContent.childMarkdownRemark.html }} />
        </Layout>
    )

}

export default About