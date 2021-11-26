import styled from 'styled-components';
import media from 'lib/constants/media';

const PreguntaContainer = styled.div`
  width: 45%;
  text-align: left;
  height: auto;
  margin-bottom: 8%;

  h3 {
    font-family: 'Maison Neue Extended';
    font-size: 1.1em;
    width: 75%;
    color: #eeeeee;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  p {
    color: #b5b5b5;
    font-weight: 500;
    font-size: 0.8em;
    line-height: 2.2em;
    overflow: hidden;
  }

  @media (max-width: ${media.desktop1366}) {
    h3 {
      font-size: 1em;
    }
    p {
      font-size: 0.7em;
    }
  }

  @media (max-width: ${media.tablet1024}) {

    h3 {
      font-size: 0.9em;
      display: inline;
    }

  p{
    font-size: 0.65em;
    line-height: 2em;
  }
  }

 @media (max-width: ${media.mobile651}) {
  width: 85%;
 margin-bottom: 8%;

  h3{
    font-size: 1.1em;
    
  }

  p{
    font-size: 0.8em;

  }
    
  
  } 

  @media (max-width: ${media.mobile375}) {
    width: 95%;
 margin-bottom: 10%;
 
 p{
  line-height: 1.8em;

  }

  }
`;

export { PreguntaContainer };
