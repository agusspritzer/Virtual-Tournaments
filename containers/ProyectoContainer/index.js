import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Principal,
  Presentacion,
  PresentacionPersona,
  Testimonios,
  LogosContainer,
  Logos,
  VTpoints,
  VT_Info,
  VT_Img,
} from './styled';

import { ContenedorMain } from 'components';
import { FullWidthSection } from 'components';
import { Titulo } from 'components';
import { Slider } from 'components';

export default function ProyectoContainer() {
  return (
    <>
      <ContenedorMain>
        <Presentacion>
          <PresentacionPersona>
            <img src="/assets/players/prueba.jpg" />

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

      <ContenedorMain>
        <LogosContainer>
          <Titulo level={4}>
            {' '}
            Las empresas mas reconocidas del gaming ya colaboraron con nosotros{' '}
          </Titulo>
          <Logos>
            <figure>
              <img src="/assets/logos/nvidia.png" />
            </figure>
            <figure>
              {' '}
              <img src="/assets/logos/razer.png" />
            </figure>
            <figure>
              <img src="/assets/logos/hyper.png" />
            </figure>
            <figure>
              {' '}
              <img src="/assets/logos/predator.png" />
            </figure>
            <figure>
              {' '}
              <img src="/assets/logos/logi.png" />
            </figure>
            <figure>
              <img src="/assets/logos/msi.png" />
            </figure>
            <figure>
              <img src="/assets/logos/steel.png" />
            </figure>
          </Logos>
        </LogosContainer>

        <VTpoints>
          <VT_Info>
            <Titulo level={1}>QUE TODAS TUS VICTORIAS VALGAN LA PENA</Titulo>
            <p>
              El principal objetivo fue crear una plataforma que unifique los
              torneos amateurs que se juegan todos los dias. Era darle una
              posiblidad al gamer no profesional un espacio donde participar en
              torneos abiertos donde pueda mejorar su nivel de habilidad
            </p>
          </VT_Info>

          <VT_Img>
            <img src="/assets/vtpoints.png" />
            <p>VT Points</p>
          </VT_Img>
        </VTpoints>
      </ContenedorMain>
    </>
  );
}
