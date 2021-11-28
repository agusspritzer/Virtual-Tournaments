import styled from 'styled-components';
import media from 'lib/constants/media';

const Reglamento = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4%;

  h2 {
    width: 100%;
    font-family: 'Maison Neue Extended';
    font-size: 2em;
    color: #eeeeee;
    font-weight: 600;
    margin-bottom: 2%;
  }
  p {
    width: 85%;
    font-size: 0.8em;
    color: #b5b5b5;
    line-height: 2em;
  }

  @media (max-width: ${media.tablet1024}) {
    h2 {
      font-size: 1.6em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    width: 100%;
    margin-bottom: 8%;
    h2 {
      font-size: 1.4em;
    }
    p {
      width: 100%;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
    margin-left: 3%;
  }
`;

export { Reglamento };
