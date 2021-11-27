import styled from 'styled-components';
import media from 'lib/constants/media'

const Card = styled.div`
background-color: #eeeeee;
padding: 3% 3% 0 3%;
width: 100%;
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

@media (max-width: ${media.mobile375}) {
width: 95%;
margin: 0 auto;
}

`

const InfoPrincipal = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
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

@media (max-width: ${media.desktop1680}) {
    h2{
        font-size: 1.1em;
    }
    h3{
        font-size: 0.9em;
    }
}
  @media (max-width: ${media.desktop1366}) {
    h2{
        font-size: 1em;
    }
    h3{
        font-size: 0.8em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    h2{
        width: 100%;
        font-size: 1.1em;
        padding-bottom: 4%;
    }
    h3{
        font-size: 0.9em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    h2{
        font-size: 1em;
    }
    h3{
        font-size: 0.8em;
    }
  }

  @media (max-width: ${media.mobile375}) {
width: 95%;
margin: 0 auto;
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

h3:nth-child(2){

    font-weight: 600;
    padding-right: 15%;
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


@media (max-width: ${media.desktop1680}) {
    width: 30%;

}
  @media (max-width: ${media.desktop1366}) {
    width: 40%;
  }

  @media (max-width: ${media.tablet1024}) {
    width: 45%;
  }

  @media (max-width: ${media.mobile651}) {
    width: 80%;
    margin: 0 auto;
    padding:4% 0 4% 0;

    h3:nth-child(2){
padding-right: 8%;
}
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
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