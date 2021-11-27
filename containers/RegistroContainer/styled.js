import styled from 'styled-components';
import media from 'lib/constants/media';

const DataContainer = styled.form`
  width: 45%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    text-align: center;
    margin-bottom: 35px;
  }
  p {
    margin-top: 15px;
    text-align: center;
    cursor: pointer;

    & span {
      font-weight: 600;
    }
  }

  @media (max-width: ${media.desktop1680}) {
    padding-top: 3%;
    width: 48%;
  }
  @media (max-width: ${media.desktop1366}) {
    h2 {
      font-size: 1.6em;
    }

    a {
      font-size: 0.95em;
    }
    padding-top: 6%;
    width: 45%;
  }

  @media (max-width: ${media.tablet1024}) {
    padding-top: 9%;
    width: 60%;
    a {
      font-size: 0.86em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    padding-top: 14%;
    width: 85%;
    a {
      font-size: 0.75em;
    }
  }

  @media (max-width: ${media.mobile375}) {
    padding-top: 22%;
    padding-bottom: 10%;
    width: 95%;
  }
`;

const FormRow = styled.div`

  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  flex-direction: column;

  @media ${media.mediumDevice} {
    flex-direction: row;
  }
`;

const CrearCuenta = styled.form`
  padding-top: 4%;
`;

export { DataContainer, FormRow, CrearCuenta };
