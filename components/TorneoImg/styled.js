import styled from 'styled-components';
import media from 'lib/constants/media';

const ImgTorneo = styled.div`
  width: 65%;
  margin: 0 auto;
  height: 490px;
  padding-top: 130px;

  h1 {
    width: 40%;
    font-size: 2em;
    line-height: 1.2em;
    margin-bottom: 12px;
  }

  @media (max-width: ${media.desktop1680}) {
    width: 75%;
  }
  @media (max-width: ${media.desktop1366}) {
    width: 80%;
  }

  @media (max-width: ${media.tablet1024}) {
    width: 85%;
    h1 {
      width: 60%;
      font-size: 1.8em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    width: 90%;
    h1 {
      width: 85%;
      font-size: 1.5em;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width: 90%;
    h1 {
      width: 95%;
      font-size: 1.2em;
    }
  }
`;

const Codigo = styled.p`
  margin-top: 175px;
  color: #eeeeee;
  font-weight: 500;
  font-size: 0.8em;
  line-height: 2.5em;
  letter-spacing: 0.5px;
  font-family: 'Maison Neue Extended';
`;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Game = styled.p`
  color: #ea33bc;
  font-weight: 400;
  letter-spacing: 0.2px;
  font-family: 'Maison Neue Extended';
  font-size: 1em;

  @media (max-width: ${media.tablet1024}) {
    width: 100%;
    margin-bottom: 2%;
  }
`;

const Available = styled.p`
  color: #1ba83c;
  font-weight: 400;
  letter-spacing: 0.4px;
  font-family: 'Maison Neue Extended';
  font-size: 1em;
  @media (max-width: ${media.tablet1024}) {
    font-size: 0.9em;
  }

  @media (max-width: ${media.mobile651}) {
    font-size: 0.8em;
  }
`;

const ImgContainer = styled.div`
  background-size: cover;
  position: relative;
  background-color: transparent !important;
  z-index: -2;
`;

const Gradiente = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  background: rgb(39, 39, 39);
  background: linear-gradient(
    0deg,
    rgba(39, 39, 39, 1) 0%,
    rgba(39, 39, 39, 0.896796218487395) 25%,
    rgba(39, 39, 39, 0.7959558823529411) 37%,
    rgba(39, 39, 39, 0.6530987394957983) 50%,
    rgba(39, 39, 39, 0.4514180672268907) 75%,
    rgba(39, 39, 39, 0.30015756302521013) 87%,
    rgba(39, 39, 39, 0) 100%
  );
`;

const Fondo = styled.div`
  background-size: cover;
  position: absolute;
`;

export {
  ImgTorneo,
  Codigo,
  ExtraInfo,
  Game,
  Available,
  ImgContainer,
  Gradiente,
  Fondo,
};
