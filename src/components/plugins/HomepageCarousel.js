import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import("./HomepageCarousel.scss")

const HomepageCarousel = (props) => {

    const slidesData = props.images
    console.log(slidesData)
    console.log(props.images)

    const Slides = slidesData.map(element => {
        return (
            <div key={element.sys.id}>
                <img src={element.fields.slideImage.fields.file.url} alt="carousel-slide" />
                <p className="legend">{element.fields.slideCaption}</p>
            </div>
        )

    });



    return (
        <Carousel>
            {Slides}
        </Carousel>
    );
}

export default HomepageCarousel