import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ("./HomepageCarousel.scss")
 
class HomepageCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Lake Berryessa, California</p>
                </div>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.journalofz.com/wp-content/uploads/2019/01/IMG_6679-1020x600.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
export default HomepageCarousel