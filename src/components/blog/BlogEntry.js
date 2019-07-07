import React from "react";
// import DateFormat from "dateformat";
import BlogEntryCSS from "./BlogEntry.module.scss"

class BlogEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

            <div className={BlogEntryCSS.blogentry}>
                <div className={BlogEntryCSS.blogentry__img}>
                    <div className={BlogEntryCSS.blogentry__imgFill}></div>
                    <img src={this.props.entry.fields.blogMainImage.fields.file.url} alt={this.props.entry.fields.title} />
                </div>
                <div className={BlogEntryCSS.blogentry__copy}>
                    <h3>{this.props.entry.fields.title}</h3>
                    <span>{this.props.entry.fields.datePublished} |
                    {this.props.entry.fields.categories.map(element => {
                        return (<span>{element}</span>)
                    })}</span>
                    <p>{this.props.entry.fields.description}</p>
                </div>
            </div>
        )
    }
}
export default BlogEntry;