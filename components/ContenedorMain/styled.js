import styled, { css } from 'styled-components';
import media from 'lib/constants/media'


export const Main = styled.main`
    background-color: #272727;
    margin: 0 auto;
    padding-top: 10%;
    width: 65%;
    
${props => props.modo === "chico" ? css`
    padding-top: 1% !important;
 `: css`
 ` }


@media (max-width: ${media.desktop1680}) {
    width: 75%;
  }
  @media (max-width: ${media.desktop1366}) {
    width: 80%;
  }

  @media (max-width: ${media.tablet1024}) {
    width: 85%;
  }

  @media (max-width: ${media.mobile651}) {
    width: 90%;
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
  }


`;
