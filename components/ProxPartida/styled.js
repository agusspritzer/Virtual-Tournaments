import styled from 'styled-components';
import media from 'lib/constants/media';

const Card = styled.div`
  width: 30%;
  background-color: #eeeeee;
  padding: 3%;
  margin-bottom: 4%;
  font-family: 'Maison Neue Extended';

  h2 {
    color: #272727;
    width: 80%;
    font-size: 1.2em;
    font-family: 'TTOctosquares';
    margin-bottom: 15%;
  }


  @media (max-width: ${media.desktop1680}) {
    h2 {
      font-size: 1.1em;
    }
    width:40%;
  }
  @media (max-width: ${media.desktop1366}) {
    h2 {
      font-size: 1em;
    }
    width:50%;
  }

  @media (max-width: ${media.tablet1024}) {
    h2 {
      width: 100%;
      font-size: 1.1em;
      padding-bottom: 4%;
    }
    width:60%;
    padding: 4%;

  }

  @media (max-width: ${media.mobile651}) {
    h2 {
      font-size: 1em;
      margin-bottom: 8%;
    }
    width:100%;

  }



  @media (max-width: ${media.mobile375}) {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20%;
    h2{
        margin-bottom: 4%;
    }
    padding: 5%;
  }
`;

const AsideInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;

  h5 {
    font-size: 1em;
    color: #6418dc;
    margin: 0;
    font-weight: 500;
  }

  p {
    font-size: 0.8em;
    color: #707070;
  }

  @media (max-width: ${media.desktop1366}) {

    h5 {
      font-size: 0.9em;
    }
  }

  @media (max-width: ${media.tablet1024}) {

    h5 {
      font-size: 0.9em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    h5 {
      font-size: 0.8em;
    }
  }
`;

const Jugador = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-family: 'Maison Neue Extended';
    font-size: 1.2em;
    color: #707070;
    font-weight: 450;
  }
  
  @media (max-width: ${media.desktop1680}) {
    h3 {
      font-size: 1.1em;
    }
  }
  @media (max-width: ${media.desktop1366}) {

    h3 {
      font-size: 1.1em;
    }
  }

  @media (max-width: ${media.tablet1024}) {

    h3 {
      font-size: 1em;
    }
  }

  @media (max-width: ${media.mobile651}) {

    h3 {
      font-size: 1em;
    }
  }


`;

const MatchInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Etiqueta = styled.div`
  background-color: #6418dc;
  padding: 3%;
  margin: 5px 5px 5px 0;
  width: min-content;
  display: flex;
  align-items: center;

  p {
    color: #eeeeee;
    font-size: 0.8em;
    display: inline-block;
  }

  img {
    width: 25%;
    display: inline-block;
    margin-right: 12%;
  }
`;

export { Card, AsideInfo, Jugador, MatchInfo, Etiqueta };
