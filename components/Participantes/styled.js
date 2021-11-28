import styled from 'styled-components';
import media from 'lib/constants/media';

const Usuarios = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-right: 12px;
  }
  h5 {
    color: #9a9a9a;
    letter-spacing: 0.6px;
    transition: 0.2s ease 0s;

    :hover {
      color: #eeeeee;
      font-weight: 600;
      cursor: pointer;
    }
  }

  @media (max-width: ${media.desktop1680}) {
  }
  @media (max-width: ${media.desktop1366}) {
  }

  @media (max-width: ${media.tablet1024}) {
    width: 30%;
    font-size: 0.9em;
  }

  @media (max-width: ${media.mobile651}) {
    width: 30%;
    font-size: 0.9em;

    img {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width: 45%;
    font-size: 0.8em;
  }
`;

export { Usuarios };
