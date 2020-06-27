import React from 'react';
<<<<<<< HEAD
=======
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
>>>>>>> ffa4354cc3bc514cb9ae503d53f287feb09fcca5

import {
  Principal,
  Presentacion,
  PresentacionPersona,
  Testimonios,
} from './styled';

import { ContenedorMain } from 'components';
import { FullWidthSection } from 'components';
import { Titulo } from 'components';
import { Quote } from 'components';
import { Slider } from 'components';

export default function ProyectoContainer() {
  return (
    <>
      <ContenedorMain>
        <Presentacion>
          <PresentacionPersona>
            <figure>
              <img src="/assets/players/prueba.jpg" />
            </figure>
            <Titulo level={4}>Agustín Spritzer</Titulo>
            <p>Fundador de Virtual Tournaments</p>
          </PresentacionPersona>

          <Principal>
            <Titulo level={1}>
              VIRTUAL TOURNAMENTS, UN LUGAR HECHO A TU MEDIDA
            </Titulo>
            <p>
              El principal objetivo fue crear una plataforma que unifique los
              torneos amateurs que se juegan todos los dias. Era darle una
              posiblidad al gamer no profesional un espacio donde participar en
              torneos abiertos donde pueda mejorar su nivel de habilidad
            </p>
          </Principal>
        </Presentacion>
      </ContenedorMain>

      <FullWidthSection>
        <Testimonios>
          <Titulo level={5}>TESTIMONIOS</Titulo>
          <Slider></Slider>
        </Testimonios>
      </FullWidthSection>

      <ContenedorMain>Lo que iene despues del fulll section</ContenedorMain>
    </>
  );
}
