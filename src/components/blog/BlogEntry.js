import React from "react";
import DateFormat from "dateformat";
import {Link} from "gatsby";
import EntryCSS from "./BlogEntry.module.scss"

const BlogEntry = (props) => (
            <div className={EntryCSS.blogentry}>
                <div className={EntryCSS.entryimg}>
                    <div className={EntryCSS.imgFill}></div>
                    <img src={props.entry.fields.blogMainImage.fields.file.url} alt={props.entry.fields.title} />
                </div>
                <div className={EntryCSS.entrycopy}>
                    <h3>{props.entry.fields.title}</h3>
                    <span className={EntryCSS.entrydate}>{props.entry.fields.datePublished}</span>
                    {props.entry.fields.categories.map(element => {
                        return (<span className={EntryCSS.entrycategory}>{element}</span>)
                    })}
                    <p>{props.entry.fields.description}</p>
                    
                    <Link to="/"><button className={EntryCSS.readmorebutton}>Read More</button></Link>
                    
                </div>

            </div>
        )
export default BlogEntry;