import styled from 'styled-components';
import media from 'lib/constants/media'

const Card = styled.div`
@media ${media.mediumDevice} {
width: 30%;
background-color: #eeeeee;
padding: 3%;
margin-bottom: 4%;
font-family: 'Maison Neue Extended';

h2{
color: #272727;
width: 80%;
font-size: 1.2em;
font-family: 'TTOctosquares';
margin-bottom: 15%;
}
}
`



const AsideInfo = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 4%;

h5{
font-size: 1em;
color:#6418DC;
margin: 0;
font-weight: 500;
}

p{
font-size: 0.8em;
color: #707070;
}
`



const Jugador = styled.div`
display: flex;
justify-content: space-between;

h3{
font-family: 'Maison Neue Extended';
font-size: 1.2em;
color: #707070;
font-weight: 450;
}
`



const MatchInfo = styled.div`
display: flex;
flex-wrap: wrap;
`

const Etiqueta = styled.div`
background-color: #6418DC;
padding: 3%;
margin: 5px 5px 5px 0;
width: min-content;
display: flex;
align-items: center;

p{
color: #EEEEEE;
font-size: 0.8em;
display: inline-block;
}

img {    
width: 25%;
display: inline-block;
margin-right: 12%;
} 
`


export {
    Card,
    AsideInfo,
    Jugador,
    MatchInfo,
    Etiqueta
};