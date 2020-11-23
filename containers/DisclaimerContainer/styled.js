import styled from 'styled-components';
import { media } from "constants";


const Reel = styled.div`
  height: 100vh;
  overflow: hidden;
 position: relative;
    video{
      width: auto !important;
        height: 100% !important;
        @media (min-width:1000px){      
        transform: scale(1.5);
    }

    @media (min-width:1250px){      
        transform: scale(1.8);
    }

    @media (min-width:1500px){      
        transform: scale(2);
    }

    
}
`;

const Gradiente = styled.div`
position: absolute;

top:0;
left:0;
width: 100%;
height:100%;
z-index: -1;
background-image: url("assets/lineas.png");
`;

const Align = styled.div`
padding-top: 8%;
text-align: center;

figure{
    display:flex;
    justify-content: center;
}
h1{
    font-size: 3em;
}

a{
    
    color: #B4B4B4;
    font-family: 'TTOctosquares';
    text-decoration: none;
    font-weight: 700;
    font-size: 1em;
transition: 0.2s all;
    
}

a:hover{
    color: #EEEEEE;

}


`

const Disclaimer = styled.div`
padding-top: 16px;
padding-bottom: 48px;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
color: #EA33BC;

p{
    margin-left: 15px;
}

`

const Texto = styled.p`
width:45%;
margin: 0 auto;
padding-bottom: 32px;
font-family: 'Maison Neue Extended';
  font-size: 1em;
  
  font-weight: 400;
  color:#B4B4B4;
  line-height: 2.2em;
  letter-spacing: 0.8px;
`


export {
    Gradiente,
    Reel,
    Align,
    Disclaimer,
    Texto
};