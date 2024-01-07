// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="https://placekitten.com/800/400" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://placekitten.com/800/401" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://placekitten.com/800/402" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
