import styled from 'styled-components';
import media from 'lib/constants/media';

const Presentacion = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20%;

  p {
    line-height: 2em;
    color: #b4b4b4;
  }

  @media (max-width: ${media.desktop1680}) {
    padding-top: 4%;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20%;
  }
  @media (max-width: ${media.desktop1366}) {
    padding-top: 6%;
    width: 85%;
  }

  @media (max-width: ${media.tablet1024}) {
    width: 90%;
    flex-wrap: wrap;
    text-align: center;
  }

  @media (max-width: ${media.mobile651}) {
    width: 90%;
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
  }
`;

const PresentacionPersona = styled.div`
  width: 40%;
  padding: 8% 6% 6% 6%;
  text-align: center;

  h4 {
    font-family: 'Maison Neue Extended';
    font-weight: 600;
    color: #eeeeee;
    margin-top: 2%;
  }

  img {
    display: block;
    height: 30%;
    width: 50%;
    margin: 0 auto;
    border-radius: 100%;
  }

  @media (max-width: ${media.desktop1680}) {
    h4 {
      font-size: 1em;
    }
    p {
      font-size: 0.8em;
    }
  }

  @media (max-width: ${media.desktop1366}) {
    h1 {
      font-size: 0.9em;
    }
    p {
      font-size: 0.7em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    width: 60%;
    margin: 0 auto;
    padding-bottom: 4%;
    h1 {
      font-size: 1em;
    }
    p {
      font-size: 0.9em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    width: 75%;
    margin: 0 auto;
    padding-bottom: 4%;
    h1 {
      font-size: 1.2em;
    }
    p {
      font-size: 1em;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width: 90%;
    padding-bottom: 6%;
    h1 {
      font-size: 1em;
    }
    p {
      font-size: 0.8em;
    }
  }
`;

const Principal = styled.div`
  width: 60%;

  p {
    margin-top: 2%;
    width: 90%;
  }

  @media (max-width: ${media.desktop1680}) {
    h1 {
      font-size: 1.8em;
    }
    p {
      font-size: 0.9em;
      margin-right: 20px;
      width: 95%;
    }
  }

  @media (max-width: ${media.desktop1366}) {
    h1 {
      font-size: 1.4em;
    }
    p {
      font-size: 0.8em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    width: 85%;
    h1 {
      font-size: 1.7em;
    }
    p {
      font-size: 0.9em;
    }
    margin: 0 auto;
  }


  @media (max-width: ${media.mobile651}) {
    width: 90%;
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.85em;
    }
    margin: 0 auto;
  }

  @media (max-width: ${media.mobile375}) {
    width: 100%;
    text-align: left;
    h1 {
      font-size: 1.3em;
    }
    p {
      font-size: 0.85em;
    }
    margin: 0 auto;
  }

`;

const Testimonios = styled.div`
  padding: 4% 0 4% 0;
  width: 70%;
  margin: 0 auto;
  text-align: center;

  h5 {
    font-family: 'Maison Neue Extended';
    color: #eeeeee;
    letter-spacing: 1.5px;
    margin: 0% 0% 4% 0;
    font-weight: 600;
  }

  @media (max-width: ${media.desktop1366}) {
    padding: 6% 0 6% 0;
  }

  @media (max-width: ${media.mobile651}) {
    padding: 8% 0 12% 0;
  }

  @media (max-width: ${media.mobile375}) {
    padding: 10% 0 14% 0;
  }
`;

const LogosContainer = styled.div`
  text-align: center;
  margin-top: 10%;

  h4 {
    color: #eeeeee;
    letter-spacing: 0.2px;
    margin: 0% 0% 8% 0;
    font-weight: 500;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;

  figure {
    margin: 0 4% 8% 4%;
  }
  img {
    width: 70%;
    margin: 0 auto;
  }
`;

const VTpoints = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 20%;

  p {
    line-height: 2em;
  }

  @media (max-width: ${media.desktop1680}) {
    padding-top: 4%;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20%;
  }
  @media (max-width: ${media.desktop1366}) {
    padding-top: 6%;
    width: 85%;
  }

  @media (max-width: ${media.tablet1024}) {
    width: 90%;
    flex-wrap: wrap;
    text-align: center;
  }

  @media (max-width: ${media.mobile651}) {
    width: 90%;
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
  }
`;

const VT_Img = styled.div`
  width: 40%;
  padding: 2% 2% 2% 2%;

  img {
    display: block;
    height: 30%;
    width: 50%;
    margin: 0 auto;
  }

  p {
    text-align: center;
    color: #eeeeee;
  }

  @media (max-width: ${media.desktop1680}) {
    h4 {
      font-size: 1em;
    }
    p {
      font-size: 0.8em;
    }
  }

  @media (max-width: ${media.desktop1366}) {
    h1 {
      font-size: 0.9em;
    }
    p {
      font-size: 0.7em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    width: 60%;
    margin: 0 auto;
    padding-bottom: 4%;
    h1 {
      font-size: 1em;
    }
    p {
      font-size: 0.9em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    width: 75%;
    margin: 0 auto;
    padding-bottom: 4%;
    h1 {
      font-size: 1.2em;
    }
    p {
      font-size: 1em;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width: 90%;
    padding-bottom: 6%;
    h1 {
      font-size: 1em;
    }
    p {
      font-size: 0.8em;
    }
  }

`;


const VT_Info = styled.div`
  width: 60%;

  p {
    margin-top: 2%;
    width: 90%;
    color: #b4b4b4;
  }

  @media (max-width: ${media.desktop1680}) {
    h1 {
      font-size: 1.8em;
    }
    p {
      font-size: 0.9em;
      margin-right: 20px;
      width: 95%;
    }
  }

  @media (max-width: ${media.desktop1366}) {
    h1 {
      font-size: 1.4em;
    }
    p {
      font-size: 0.8em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    width: 85%;
    h1 {
      font-size: 1.7em;
    }
    p {
      font-size: 0.9em;
    }
    margin: 0 auto;
  }


  @media (max-width: ${media.mobile651}) {
    width: 90%;
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.85em;
    }
    margin: 0 auto;
  }

  @media (max-width: ${media.mobile375}) {
    width: 100%;
    text-align: left;
    h1 {
      font-size: 1.3em;
    }
    p {
      font-size: 0.85em;
    }
    margin: 0 auto;
  }
`;

export {
  Presentacion,
  Principal,
  PresentacionPersona,
  Testimonios,
  LogosContainer,
  Logos,
  VTpoints,
  VT_Info,
  VT_Img,
};
