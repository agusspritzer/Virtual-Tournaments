import styled from 'styled-components';

const Inscripcion = styled.div`
`
const Navegador = styled.div`
width: 100%;
margin: 0 auto;
margin-bottom: 4%;
border-bottom: 1px solid #707070;
text-align: center;

nav {
    width: 80%;
    margin: 0 auto;
  }
  
  nav ul li{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #9A9A9A;
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: 'TTOctosquares';
  }
`
const ParticipantesContainer = styled.div`

`;

const ReglasContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`;



const UsuariosContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
margin-top: 2%;
`;


export {
    Inscripcion,
    Navegador,
    ParticipantesContainer,
    ReglasContainer,
    UsuariosContainer,

};

