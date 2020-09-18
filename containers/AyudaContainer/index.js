import React from 'react';
import Link from 'next/link';

import {
  SeccionAyuda,
  FaqContainer,
  MensajeContainer,
  MensajeArea,
} from './styled';

import { Titulo, Faq, ContenedorMain, Button, Navegador } from 'components';



export default function AyudaContainer() {
  return <>
    <ContenedorMain>
      <SeccionAyuda>
        <Titulo level={5}>AYUDA</Titulo>
        <Titulo level={0}>¿EN QUE PODEMOS AYUDARTE?</Titulo>
        <p>Seleccionamos las preguntas mas frecuentes para que encuentres una solución sencilla y rapida </p>
      </SeccionAyuda>

      <Navegador>
        <a>HOLAS</a>
        <a>EY</a>
        <a>GAAA</a>
      </Navegador>

      <FaqContainer>
        <Faq
          Pregunta="¿Hay otros métodos aparte de pago con VT Points o Mercado Pago?"
          Respuesta="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo,
                     tortor eget congue consectetur, mauris mi tincidunt nunc, vel posuere ex velit quis eros.
                    Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus. Cras laoreet porttitor libero
                   sed tincidunt. Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus."
        >
        </Faq>

        <Faq
          Pregunta="¿Que pasa si cancelo mi pago?"
          Respuesta="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo,
                  tortor eget congue consectetur, mauris mi tincidunt nunc, vel posuere ex velit quis eros.
                  Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus. Cras laoreet porttitor libero sed tincidunt.
                  Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus."
        >
        </Faq>

        <Faq
          Pregunta="¿Puedo pagar una parte por Mercado Pago y la otra con VT Points?"
          Respuesta="Mauris mi tincidunt nunc, vel posuere ex velit quis eros.
                  Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus. Cras laoreet porttitor libero
                  sed tincidunt."
        >
        </Faq>

        <Faq
          Pregunta="¿Los VT Points tienen un tiempo de uso limitado?"
          Respuesta=" Aliquam commodo, tortor eget congue consectetur, mauris mi tincidunt nunc, vel posuere ex
                  velit quis eros. Vivamus eros leo, finibus a rutrum sit amet, pretium a lectus. Cras laoreet porttitor libero
                sed tincidunt. Sed dignissim ex eget justo scelerisque, a suscipit tellus cursus."
        >
        </Faq>


      </FaqContainer>

      <MensajeContainer>
        <Titulo level={3}>¿NO ENCONTRASTE UNA SOLUCION?</Titulo>
        <p>Deja tu mensaje y te ayudaremos</p>

        <MensajeArea>
          <textarea name="comment" form="usrform" placeholder="Escribi tu consulta aca..." autoComplete="off" ></textarea>

          <Link href="/registro" passHref >
            <Button ancho="50%" mensaje="ENVIAR" />
          </Link>

        </MensajeArea>

      </MensajeContainer>
    </ContenedorMain>


  </>;
}
