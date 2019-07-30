import React from 'react'
import classnames from 'classnames'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"

import {
    dot
} from '../css/styles.module.css'

const Carousel = ({ children, className }) => {

    const props = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: dot
    };

    return (
        <Slider {...props} {...className}>
            {children}
        </Slider>
    )
}

export default Carousel