import styled from 'styled-components';
import media from 'lib/constants/media'

const Card = styled.div`
@media ${media.mediumDevice} {
width: 100%;
background-color: #eeeeee;
padding: 3% 3% 0 3%;
font-family: 'Maison Neue Extended';
}
h5{
font-size: 0.8em;
color:#9A9A9A;
margin: 0;
font-weight: 500;
}
h3{
   
    font-size: 1em;
    color: #272727;
margin: 0;
font-weight: 500;
    font-family: 'Maison Neue Extended';
    

}
`

const InfoPrincipal = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-bottom: 3%;
border-bottom: 1.5px solid #D6D6D6;

h2{
color: #272727;
font-size: 1.2em;
font-family: 'TTOctosquares';
margin-right: 10%;
}

h3{
    font-size: 1em;
    color: #707070;
    margin-right: 10px;
}
span{
    color: #272727;
    font-weight: 700;
}

`

const Resultado = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-right: 5%;

`

const JuegoContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-right: 5%;

`



const Jugador = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 2%;
h3{
font-family: 'Maison Neue Extended';
font-size: 1.2em;
color: #707070;
font-weight: 450;
}
`

const InfoResultados = styled.div`
margin-top: 3%;
display: flex;
justify-content:space-between;
flex-wrap: wrap;

`

const InfoFase = styled.div`
width: 26%;
margin-bottom: 4%;
h4{
    margin-bottom: 4%;
font-family: 'Maison Neue Extended';
font-size: 1em;
color: #6418DC;
font-weight: 700;
}
`



export {
    InfoPrincipal,
    Resultado,
    JuegoContainer,
    Card,
    Jugador,
    InfoResultados,
    InfoFase,
};