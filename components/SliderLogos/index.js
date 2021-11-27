import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import QuoteBeneficios from '../QuoteBeneficios';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4600,
    };
    return (
      <Slider {...settings}>
        <QuoteBeneficios User_Img="nvidia"></QuoteBeneficios>

        <QuoteBeneficios User_Img="razer"></QuoteBeneficios>

        <QuoteBeneficios User_Img="hyper"></QuoteBeneficios>

        <QuoteBeneficios User_Img="predator"></QuoteBeneficios>

        <QuoteBeneficios User_Img="logi"></QuoteBeneficios>

        <QuoteBeneficios User_Img="msi"></QuoteBeneficios>

        <QuoteBeneficios User_Img="steel"></QuoteBeneficios>
      </Slider>
    );
  }
}
