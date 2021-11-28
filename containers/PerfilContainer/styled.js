import styled from 'styled-components';
import media from 'lib/constants/media';

const Navegador = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 6%;
  border-bottom: 1px solid #707070;
  text-align: center;

  nav {
    width: 80%;
    margin: 0 auto;
  }
  nav ul {
    padding: 0%;
  }
  nav ul li {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #9a9a9a;
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: 'TTOctosquares';
  }

  nav ul li a span {
    color: #fe3f53;
  }

  @media (max-width: ${media.tablet1024}) {
    nav {
      padding-top: 6%;
      width: 100%;
      margin: 0 auto;
    }
    nav ul li a {
      font-size: 0.8em;
    }
  }
  @media (max-width: ${media.mobile651}) {
    nav ul li a {
      font-size: 0.75em;
    }

    nav ul li {
      justify-content: space-between;
    }
  }
  @media (max-width: ${media.mobile375}) {
    nav {
      width: 95%;
    }
    nav ul li a {
      font-size: 0.7em;
    }
  }
`;

const PerfilSeccion = styled.div`
  margin-bottom: 8%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  @media (max-width: ${media.desktop1366}) {
    margin-top: 3%;
  }
  @media (max-width: ${media.tablet1024}) {
    margin-top: 5%;
  }
  @media (max-width: ${media.mobile651}) {
    margin-top: 15%;
  }
`;

const Jugador = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  figure {
    border: 7px solid #6418dc;
    width: 225px;
    height: 225px;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: inline-block;
  }

  @media (max-width: ${media.desktop1680}) {
  }
  @media (max-width: ${media.desktop1366}) {
    figure {
      width: 215px;
      height: 215px;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    figure {
      width: 205px;
      height: 205px;
    }
  }

  @media (max-width: ${media.mobile651}) {
    justify-content: center;
    flex-wrap: wrap;
    figure {
      margin-bottom: 4%;
      width: 100%;
      height: 205px;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
    margin: 0 auto;
  }
`;

const Config = styled.div`
  img {
    display: inline-block;
    margin-right: 12px;
  }
`;

const ContenedorPartidas = styled.div`
h6{
  font-family: 'TTOctosquares';
  font-weight: 700;
}
  @media (max-width: ${media.desktop1680}) {
    h6 {
      font-size: 1.5em;
    }
  }

  @media (max-width: ${media.desktop1366}) {
    h6 {
      font-size: 1.3em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    h6 {
      font-size: 1.2em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    padding-top: 6%;
  }

  @media (max-width: ${media.mobile375}) {
    padding-top: 8%;
    h6 {
      width: 95%;
      margin: 0 auto;
    }
  }
`;

const Redes = styled.div`
  display: none;
  width: 21%;

  p {
    margin-bottom: 8%;
    text-align: end;
    color: #b4b4b4;
  }
`;

const IconosRedes = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  img {
    margin-left: 15%;
  }
`;

export {
  Navegador,
  PerfilSeccion,
  Jugador,
  Config,
  IconosRedes,
  Redes,
  ContenedorPartidas,
};
