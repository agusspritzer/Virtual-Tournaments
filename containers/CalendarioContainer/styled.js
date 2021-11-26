import styled from 'styled-components';
import { media } from "constants";


const Itinerario = styled.div`
margin: 1% 0 1% 0;


`


const Mes = styled.div`

width: 100%;
margin: 0 auto;
margin-bottom: 1%;
border-bottom: 1px solid #707070;
`

const CardsContainer = styled.div`
  width: 100%;
  padding-top: 5%;
  padding-bottom: 8%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${media.desktop1680}) {

  }

  @media (max-width: ${media.desktop1366}) {
  }

  @media (max-width: ${media.tablet1024}) {
    justify-content: center;
  }

  
`;



export {
  Itinerario,
  Mes,
  CardsContainer,
};