
import React from "react";
import Styles from "./SectionTitle.module.scss";


const SectionTitle = (props) => (

 <h2 className={Styles.sectionTitle} style={{textAlign: props.textAlign}}>{props.title}</h2>

)


SectionTitle.defaultProps = {
    title: 'Section Title',
    textAlign: 'inherit'
  };

 export default SectionTitle