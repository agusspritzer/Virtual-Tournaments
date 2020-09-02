import React, { Component } from 'react';
import Campeones_Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Ganadores } from 'components';
import { nominalTypeHack } from 'prop-types';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,

        };
        return (
            <div>
                <Campeones_Slider {...settings}>


                    <Ganadores
                        User_Img="1"
                        User="Griffon"
                        Money="7300"
                        Tournament="1er Puesto en Torneo Bank / Border / Chalet"
                    ></Ganadores>



                    <Ganadores
                        User_Img="2"
                        User="AnnyMars"
                        Money="4500"
                        Tournament="1er Puesto en Torneo de
                            Verano Scorpion"
                    ></Ganadores>

                    <Ganadores
                        User_Img="3"
                        User="SmOke"
                        Money="3900"
                        Tournament="1er Puesto en Torneo 
                            DE_Terrorist"
                    ></Ganadores>



                </Campeones_Slider>
            </div>
        );
    }
}
