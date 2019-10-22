import React from "react";
import { Link} from "gatsby"
import Img from "gatsby-image";
import Styles from "./HomepageHeroHeader.module.scss";

const HomepageHeroHeader = (props) => {

  return (
    <section className={Styles.hero} >
      <div className={Styles.heroCopy}>
        <h1>{props.homepageContent.homepageHeroTitle}</h1>
        <p>{props.homepageContent.homepageHeroSubtitle}</p>
        <Link to={props.homepageContent.homepageHeroButton1Link}>
          <button className={Styles.btn1}>
            {props.homepageContent.homepageHeroButton1}
          </button>
        </Link>
        <Link to={props.homepageContent.homepageHeroButton2Link}>
          <button className={Styles.btn2}>
            {props.homepageContent.homepageHeroButton2}
          </button>
        </Link>
      </div>
      <Img fluid={props.homepageContent.homepageHeroImage.fluid}/>
    </section>

  )
}

export default HomepageHeroHeader