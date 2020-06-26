import React from 'react';

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

export default function ProyectoContainer() {
  return <>
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
            <Titulo level={1}>VIRTUAL TOURNAMENTS, UN LUGAR HECHO A TU MEDIDA</Titulo>
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
    <Quote
    Frase="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, tortor eget congue consectetur,
    mauris mi tincidunt nunc, vel posuere ex velit quis eros. Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus.
     Cras laoreet porttitor libero sed tincidunt. Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus."
    Autor="Javier Kunsa"
    Descripcion="Jugador profesional de Mortal Kombat"
    ></Quote>
  </Testimonios>


</FullWidthSection>

<ContenedorMain>
Lo que iene despues del fulll section
</ContenedorMain>


  </>;
}
