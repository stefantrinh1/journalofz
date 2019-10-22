// import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Styles from "./IntroContentBlock.module.scss";
import SectionTitle from "./SectionTitle";

const IntroContentBlock = (props) => (

    <section className={Styles.intro}>
        <SectionTitle title='What Should We Talk About?' textAlign='center' />
        <div className={Styles.introBlocks}>
            <div>
                <Img fluid={props.homepageContent.introBlock1Image.fluid} />
        
                <h2>{props.homepageContent.introBlock1Title}</h2>
                <div dangerouslySetInnerHTML={{__html:props.homepageContent.introBlock1Text.childMarkdownRemark.html}}/>
                
            </div>
            <div>
            <Img fluid={props.homepageContent.introBlock2Image.fluid} />
                <h2>{props.homepageContent.introBlock2Title}</h2>
                <div dangerouslySetInnerHTML={{__html:props.homepageContent.introBlock2Text.childMarkdownRemark.html}}/>
            </div>

            <div>
            <Img fluid={props.homepageContent.introBlock3Image.fluid} />
                <h2>{props.homepageContent.introBlock3Title}</h2>
                <div dangerouslySetInnerHTML={{__html:props.homepageContent.introBlock3Text.childMarkdownRemark.html}}/>
            </div>
        </div>
    </section>

)

export default IntroContentBlock