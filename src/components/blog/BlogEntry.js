import React from "react";
import DateFormat from "dateformat";
import EntryCSS from "./BlogEntry.module.scss"

class BlogEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

            <div className={EntryCSS.blogentry}>
                <div className={EntryCSS.entryimg}>
                    <div className={EntryCSS.imgFill}></div>
                    <img src={this.props.entry.fields.blogMainImage.fields.file.url} alt={this.props.entry.fields.title} />
                </div>
                <div className={EntryCSS.entrycopy}>
                    <h3>{this.props.entry.fields.title}</h3>
                    <span className={EntryCSS.entrydate}>{this.props.entry.fields.datePublished}</span>
                    {this.props.entry.fields.categories.map(element => {
                        return (<span className={EntryCSS.entrycategory}>{element}</span>)
                    })}
                    <p>{this.props.entry.fields.description}</p>
                </div>
            </div>
        )
    }
}
export default BlogEntry;