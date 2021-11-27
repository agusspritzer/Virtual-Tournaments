import styled from 'styled-components';
import media from 'lib/constants/media'

const GanadoresContainer = styled.div`
text-align: center;
margin:2% 0 2% 0;
outline:none;
`;

const Usuario_Img = styled.div`
figure{
    width: 80px;
    margin: 0 auto;
    overflow: hidden;
    height: 80px;
    border-radius: 100%;
    margin-bottom:4%;
    }

figure img{
    width: 100%;
    height: 100%;
}

@media (max-width: ${media.tablet1024}) {
    figure{
        width: 55px;
        height: 55px;
    }
  }
`

const Usuario = styled.p`
color: #272727;
text-align: center;
margin-bottom:2%;
font-size: 1.2em;

span{
    font-weight: 500;
    color: #6418DC;
} 

@media (max-width: ${media.tablet1024}) {
    font-size: 1em;
  }
`

const Dinero = styled.h4`
color: #272727;
font-size: 1.6em;
margin-bottom:2%;
font-weight: 600;
font-family: 'TTOctosquares';

span{
    color: #AE9100;
}
@media (max-width: ${media.tablet1024}) {
    font-size: 1.2em;
  }
`

const Torneo = styled.p`
color: #9A9A9A;
width: 45%;
margin:0 auto;
font-size: 0.9em;
text-align: center;

@media (max-width: ${media.tablet1024}) {
    font-size: 0.75em;
  }


`

export {
    GanadoresContainer,
    Usuario_Img,
    Usuario,
    Dinero,
    Torneo,
};