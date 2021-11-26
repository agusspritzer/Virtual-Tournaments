import styled from 'styled-components';
import media from 'lib/constants/media';

const Reel = styled.div`
  width: 100%;

  background-image: url('assets/lineas.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;


  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
`;

const Align = styled.div`
  padding-top: 8%;
  text-align: center;
  margin: 0 auto;

  figure {
    display: flex;
    justify-content: center;
  }

  h1 {
    font-size: 3em;
  }

  a {
    color: #b4b4b4;
    font-family: 'TTOctosquares';
    text-decoration: none;
    font-weight: 700;
    font-size: 1em;
    transition: 0.2s all;
  }

  a:hover {
    color: #eeeeee;
  }

  @media (max-width: ${media.desktop1680}) {
    width: 75%;
    h1 {
    font-size: 2.5em;
  }
  }
  @media (max-width: ${media.desktop1366}) {
      padding-top: 12%;
    width: 80%;
    h1 {
    font-size: 2em;
  }
  }

  @media (max-width: ${media.tablet1024}) {
      padding-top: 16%;
    width: 85%;

  }

  @media (max-width: ${media.mobile651}) {
    padding-top: 20%;
    width: 90%;
    h1 {
    font-size: 2em;
    text-align: left;
  }

  figure {
      
    justify-content: left;
  }
  figure img{
    width: 35%;
  }
  }

  @media (max-width: ${media.mobile375}) {
    padding-top: 15%;
    width: 90%;
  }


`;

const Disclaimer = styled.div`
  padding-top: 16px;
  padding-bottom: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #ea33bc;


  @media (max-width: ${media.mobile651}) {
  justify-content: left;
  p{
      text-align: left;
  }
  }

  @media (max-width: ${media.mobile375}) {
      width: 95%;
    align-items: left;
  justify-content: left;
  padding-bottom: 8%;

 
  }


`;

const Texto = styled.p`
  width: 45%;
  margin: 0 auto;
  padding-bottom: 32px;
  font-family: 'Maison Neue Extended';
  font-size: 1em;

  font-weight: 400;
  color: #b4b4b4;
  line-height: 2.2em;
  letter-spacing: 0.8px;

  @media (max-width: ${media.desktop1680}) {
    width: 75%;
    font-size: 0.9em;
    letter-spacing: 0.8px;
  }
  
  @media (max-width: ${media.tablet1024}) {
      width: 85%;
    font-size: 0.9em;
    line-height: 1.8em;
  }

  @media (max-width: ${media.mobile651}) {
      width: 100%;
    font-size: 0.9em;
    text-align: left;
  }

  @media (max-width: ${media.mobile375}) {
    width: 100%;
    font-size: 0.85em;
    line-height: 2.2em;
  }

`;

export { Reel, Align, Disclaimer, Texto };
