import React from 'react';
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
                            <p className="legend">{element.fields.slideCaption}</p>
                        </div>
                    )
                })
            }
        </Carousel>
    );
}

export default HomepageCarousel