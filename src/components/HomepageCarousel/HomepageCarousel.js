import React from 'react';
import {Link} from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import("./HomepageCarousel.scss")

const HomepageCarousel = (props) => {
    const slidesData = props.images
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={500}>
            {
                slidesData.map(element => {
                    return (
                        <div key={element.sys.id}>
                            <img src={element.fields.slideImage.fields.file.url} alt="carousel-slide" />
                            <div className="legend">
                                <p className="categories">Travel Medicine</p>
                                <h3 className="blogTitle">{element.fields.slideCaption}</h3>
                                <p className="blogDescription">Description of Blog</p>
                                <Link to="/">
                                    <button className="readBtn">Read More</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    );
}

export default HomepageCarousel