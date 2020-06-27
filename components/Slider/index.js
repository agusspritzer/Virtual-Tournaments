import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Quote } from 'components';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Quote
              Frase="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, tortor eget congue consectetur,
    mauris mi tincidunt nunc, vel posuere ex velit quis eros. Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus.
     Cras laoreet porttitor libero sed tincidunt. Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus."
              Autor="Javier Kunsa"
              Descripcion="Jugador profesional de Mortal Kombat"
            ></Quote>
          </div>
          <div>
            <Quote
              Frase="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, tortor eget congue consectetur,
    mauris mi tincidunt nunc, vel posuere ex velit quis eros. Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus.
     Cras laoreet porttitor libero sed tincidunt. Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus."
              Autor="Ricardo Barreda"
              Descripcion="Exterminador profesional"
            ></Quote>
          </div>
          <div>
            <Quote
              Frase="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, tortor eget congue consectetur,
    mauris mi tincidunt nunc, vel posuere ex velit quis eros. Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus.
     Cras laoreet porttitor libero sed tincidunt. Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus."
              Autor="Lionel Messi"
              Descripcion="Jugador profesional de Barcelona"
            ></Quote>
          </div>
        </Slider>
      </div>
    );
  }
}
