import styled from 'styled-components';
import media from 'lib/constants/media';

const Inscripcion = styled.div``;
const Navegador = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 4%;
  border-bottom: 1px solid #707070;
  text-align: center;

  nav {
    width: 80%;
    margin: 0 auto;
  }

  nav ul li {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  nav ul {
    padding: 0;
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
    width: 95%;
    nav {
      width: 100%;
      margin: 0 auto;
    }
    nav ul li a {
      font-size: 0.7em;
    }
  }
`;
const ParticipantesContainer = styled.div``;

const ReglasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${media.mobile375}) {
    padding-bottom: 20%;
  }
`;

const UsuariosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 2%;
  margin-bottom: 6%;
  @media (max-width: ${media.mobile375}) {
    margin: 2%;
    padding-bottom: 12%;
  }
`;

export {
  Inscripcion,
  Navegador,
  ParticipantesContainer,
  ReglasContainer,
  UsuariosContainer,
};
