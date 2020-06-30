import styled from 'styled-components';

const ImgTorneoContainer = styled.div`

background-image: url('assets/counter.png');

`;


const ImgTorneo = styled.div`

width: 65%;
margin: 0 auto;
height:560px;
padding-top: 350px;

h1{
    width: 20%;
    font-size: 2.5em;
    line-height: 1.2em;
    margin-bottom: 20px;
}
`;

const Codigo = styled.p`

color: #EEEEEE;
font-weight: 500;
font-size: 0.8em;
line-height: 2.5em;
letter-spacing: 0.5px;
 font-family: 'Maison Neue Extended';

`;

const ExtraInfo = styled.div`

display:flex;
justify-content: space-between;
`;

const Game = styled.p`

color: #EA33BC;
font-weight: 400;
letter-spacing: 0.2px;
 font-family: 'Maison Neue Extended';
font-size: 1.3em;

`;

const Available = styled.p`

color: #1BA83C;
font-weight: 400;
letter-spacing: 0.4px;
 font-family: 'Maison Neue Extended';
font-size: 1em;

`;




export {
    ImgTorneoContainer,
    ImgTorneo,
    Codigo,
    ExtraInfo,
    Game,
    Available
};