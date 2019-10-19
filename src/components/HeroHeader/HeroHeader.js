import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import Styles from "./HeroHeader.module.scss";


const HeroHeader = (props) => {
  
    return (
      <section className={Styles.hero} >
        <div className={Styles.heroCopy}>
          <h1>{props.pageTitle}</h1>
        </div>
      </section>
  
    )
  }

  HeroHeader.defaultProps = {
    pageTitle: 'Page Title'
};
  
  export default HeroHeader