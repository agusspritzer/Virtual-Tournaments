import styled from 'styled-components';
import media from 'lib/constants/media';

const PagoContainer = styled.div`

p{
    font-size: 1em;
    color: #B4B4B4;
    margin-bottom: 1%;
}

@media (max-width: ${media.mobile651}) {
    p{

    padding-bottom: 4%;
}

  }

  @media (max-width: ${media.mobile375}) {
    p{

padding-bottom: 4%;
}
padding-top: 8%;
padding-bottom: 16%;
  }
`;

const Opciones = styled.div`
h4{
    color: #272727;
    font-weight: 500;
    font-size: 1em;
}
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 2%;
flex-wrap: wrap;

a{

padding: 4% 3% 4% 3%;
background-color: #FFFFFF;
width: 45%;
display: flex;
text-decoration: none;
justify-content: flex-start;
align-items: center;
margin-right:6%;
img{
    margin-right: 4%;
}
transition: 0.2s ease-out 0s;

:hover{
    h4{
        color: #EEEEEE;
    }
    cursor: pointer;
    background-color: #6418DC;
}
}

@media (max-width: ${media.desktop1680}) {
    

  }
  @media (max-width: ${media.desktop1366}) {
    a{
        font-size: 1em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    a{
        font-size: 0.9em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    
    a{
        width: 75%;
        margin-bottom: 6%;
        font-size: 0.9em;
        margin-right: 0%;
    }
  }

  @media (max-width: ${media.mobile375}) {
    a{
        width: 100%;
font-size: 0.8em;
    }
  }


`;



const Monedas = styled.div`
padding: 4% 3% 4% 3%;
background-color: #FFFFFF;
width: 45%;
display: flex;
justify-content: flex-start;
align-items: center;

h4{
    display: inline-block;
}
img{
    margin-right: 4%;
}
span{
    font-weight: 700;
}

transition: 0.2s ease-out 0s;
:hover{
    h4{
        color: #EEEEEE;
    }
    cursor: pointer;
    background-color: #6418DC;
}

@media (max-width: ${media.desktop1680}) {
    

}
@media (max-width: ${media.desktop1366}) {
  font-size: 1em;
}

@media (max-width: ${media.tablet1024}) {
h4{
    font-size: 0.9em ;
}
}

@media (max-width: ${media.mobile651}) {
  

      width: 75%;
      margin-bottom: 6%;
      h4{
    font-size: 0.9em ;
}

}

@media (max-width: ${media.mobile375}) {
    width: 100%;
    h4{
    font-size: 0.8em ;
}
}

`;

export {
    PagoContainer,
    Opciones,
    Monedas,
};