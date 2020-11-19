import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { nominalTypeHack } from 'prop-types';
import { QuoteBeneficios } from '../QuoteBeneficios';

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

                <QuoteBeneficios
                    User_Img="trofeo"
                    Frase="Podrás acceder a grandes premios monetarios por ganar torneos de tus juegos favoritos"
                ></QuoteBeneficios>

                <QuoteBeneficios
                    User_Img="twitch"
                    Frase="'Contar con la posibilidad de que tus partidas sean vistas por miles de jugadores a través de Twitch"

                ></QuoteBeneficios>

                <QuoteBeneficios
                    User_Img="personas"
                    Frase="Formar parte de una comunidad que apoya la escena local de jugadores no profesionales en E-Sports"

                ></QuoteBeneficios>

            </Slider>

        );
    }
}
