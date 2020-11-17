import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Quote } from 'components';
import { nominalTypeHack } from 'prop-types';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (

      <Slider {...settings}>

        <Quote
          Frase="'Una de las comunidades virtuales más queridas por el público, ha llegado para quedarse y ser mas que una comunidad'"
          Autor="Javier Kunsa"
          Descripcion="Jugador profesional de Mortal Kombat"
        ></Quote>

        <Quote
          Frase="'Hi Ken, Awesome plugin. Any chance for dots color setting? Tried to change it in the slick-active class with no luck'"
          Autor="Jose Sand"
          Descripcion="Inigualable"
        ></Quote>

        <Quote
          Frase="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, tortor eget congue consectetur,
    mauris mi tincidunt nunc, vel posuere ex velit quis eros. Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus.
     Cras laoreet porttitor libero sed tincidunt. Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus'"
          Autor="Lionel Messi"
          Descripcion="Jugador profesional de Barcelona"
        ></Quote>

      </Slider>

    );
  }
}
