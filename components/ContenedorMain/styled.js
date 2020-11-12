import styled, { css } from 'styled-components';
import media from 'lib/constants/media'


export const Main = styled.main`
    background-color: #272727;
    margin: 0 auto;
    padding-top: 10%;
    width: 65%;
    
${props => props.modo === "0" ? css`
    padding-top: 1% !important;
 `: css`
 ` }


 @media (max-width: ${media.smallDevice}){
    width: 90%;
}


`;
