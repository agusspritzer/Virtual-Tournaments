import styled from 'styled-components';

const Card= styled.div`
  width: 45%;
text-align: left;
height: 150px;
margin-bottom:6%;
background-color: #EEEEEE;

display: flex;
  justify-content: flex-start;
`;


const Info_Fecha = styled.div`
  width: 30%;
  padding: 5% 3% 3% 3%;
  text-align: center;
  border-spacing: 2em;
  border-right: 1px solid #B5B5B5;
`;

const NumeroFecha = styled.h3`
font-family: 'TTOctosquares';
    margin:0;
    padding:0;
    color: #272727;
    font-size: 3em;
    text-align: center;

`;

const DiaFecha = styled.h5`
    color: #272727;
    text-align: center;
    font-size: 0.8em;
    font-weight: 500;
    margin: 0;
`;

const Info_Torneo= styled.div`
  width: 70%;
  padding: 6% 4% 4% 4%;
`;

const CodigoTorneo= styled.p`
    font-size: 0.6em;
    color: #707070;
    font-weight: 500;
    padding:0;
`;

const NombreTorneo= styled.h3`
      font-family: 'TTOctosquares';
    font-size: 1em;
    color: #272727;
    font-weight: 700;
    padding:0;
    margin-bottom: 2%;

`;

const FaseTorneo= styled.h4`
    font-size: 0.8em;
    color: #272727;
    font-weight: 600;
    padding: 0;
    margin-bottom: 2%;
`;

const HorarioTorneo= styled.h4`
    font-family: 'Maison Neue Extended';
    font-size: 0.8em;
    color: #6418DC;
    font-weight: 600;
    text-align: left;
    margin: 0;

`;


export {
    Card,

    Info_Fecha,
    DiaFecha,
    NumeroFecha,

    Info_Torneo,
    CodigoTorneo,
    NombreTorneo,
    FaseTorneo,
    HorarioTorneo
};
