import styled from 'styled-components';
import media from 'lib/constants/media';

const QuoteContainer = styled.div`
  text-align: center;
  margin: 2% 0 2% 0;
  outline: none;

`;

const Phrase = styled.p`
  display: flex;
  align-items: center;
  color: #eeeeee;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 4%;
  font-weight: 400;
  line-height: 1.8em;
  height: 180px;
  text-align: center;
  font-size: 1.1em;

  @media (max-width: ${media.desktop1680}) {
    width: 75%;
    font-size: 1em;
  }
  @media (max-width: ${media.desktop1366}) {
    width: 80%;
  }

  @media (max-width: ${media.tablet1024}) {
    width: 85%;
  }

  @media (max-width: ${media.mobile651}) {
    width: 90%;
    font-size: 0.9em;
  }

  @media (max-width: ${media.mobile375}) {
    width: 100%;
    font-size: 0.8em;
  }
`;

const Author = styled.h4`
  color: #eeeeee;
  font-size: 1.2em;
  margin-bottom: 0.5%;
  font-weight: 600;
  @media (max-width: ${media.desktop1680}) {
    font-size: 1em;
  }
  @media (max-width: ${media.desktop1366}) {
    font-size: 1em;
  }

  @media (max-width: ${media.tablet1024}) {
  }

  @media (max-width: ${media.mobile651}) {
  }

  @media (max-width: ${media.mobile375}) {
    font-size: 0.8em;
  }
`;

const Description = styled.p`
  color: #b4b4b4;
  @media (max-width: ${media.desktop1680}) {
    font-size: 0.9em;
  }
  @media (max-width: ${media.desktop1366}) {
    font-size: 0.9em;
  }

  @media (max-width: ${media.tablet1024}) {
    font-size: 0.8em;
  }

  @media (max-width: ${media.mobile651}) {
    font-size: 0.75em;
  }

  @media (max-width: ${media.mobile375}) {
    font-size: 0.75em;
  }
`;

export { QuoteContainer, Author, Phrase, Description };
