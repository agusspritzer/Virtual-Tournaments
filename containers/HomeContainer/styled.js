import styled from 'styled-components';
import media from 'lib/constants/media'




const Principal = styled.div`
padding-top:10%;
width: 65%;
display: flex;
justify-content: center;
align-items:center;
align-content: center;
flex-wrap: wrap;
flex-direction:row;
margin: 0 auto;
  text-align: center;
  h3{
    font-weight: 400;
    font-size: 2.5em;
    line-height: 1.2em;
    padding-bottom:4%;
    width: 100%;
  }

  h4{
    width: 100%;
    letter-spacing: 0.8px;
  }
 
  span{
    font-weight: 700;
    color: #EA33BC;
  }

  @media (max-width: ${media.mobile651}){
    width: 95%;
    padding-top: 12%;
    h3{
      font-size: 2em;
      line-height: 1.4em;
      padding-bottom: 12%;
    }

  }
/*
  @media (max-width: ${media.smallDevice}){
    width: 85%;
    background-color: red;
}
*/
`;

const Presentacion = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 25%;
  left: 50%;
    transform: translate(-50%, 0);
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index:2;


  h4{
    font-size: 1em;
    letter-spacing: 0.2px;
  }

  @media (max-width: ${media.mobile651}){
    h4{
      font-size: 1em;
      line-height: 2.6em;
      
    }

 width: 95%;
  }
`;

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
z-index: 1;


background: rgb(100,24,220);
background: linear-gradient(0deg, rgba(100,24,220,0.65) 0%, rgba(39,39,39,0.65) 100%);
`;

const Overlay = styled.div`
height: 100vh;
width: 100%;
position: absolute;
top: 0;
left: 0;
overflow: hidden;
opacity: 0.75;
@media (max-width: ${media.smallDevice}){
    height:100vh;
}
`;


const Foto = styled.div`
  width: 50%;

  img {
    margin: 0 auto;
    width: 55%;
    height: 55%;
  }

  @media (max-width: ${media.smallDevice}){
 display: none;
  }
`;




const Stream = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  background-color: #272727;
  padding-top: 8%;
  margin-bottom: 18%;

  h4{
    font-size: 1em;
    margin-bottom:4%;
  }

#twitch-embed{
 
  position: relative !important;
  overflow: hidden !important;
  width: 100% !important;
  padding-top: 56.25% !important;
}

#twitch-embed iframe{
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

@media (max-width: ${media.smallDevice}){
    width: 95%;

    h3{
  font-size: 1.4em;
}

    
}

`;

const Ganadores = styled.div`
  padding:4% 0 6% 0;
  width: 65%;
  margin:0 auto;

  @media (max-width: ${media.smallDevice}){
    display: none;
}
`;

const GanadoresTitulo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  align-items:flex-end;
  align-content: flex-end;
  

  padding: 0 0 8% 0;

  h1{
    width:44%;
    font-weight: 600;
    font-size: 1.8em;
    color: #6418DC;
  }

  h5{
    margin: 0;
    font-size: 1em;
    width: 36%;
    color: #272727;
    
  }
`

const Juegos = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 4%;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const Beneficios = styled.div`
  text-align: center;
  background-color: #272727;
  padding-top: 5%;
  margin-bottom: 15%;
  display: flex;
  justify-content: space-around;

  div {
    width: 22%;
    height: 150px;
  }

  img {
    width: auto;
    height: 35%;
    margin: 0 auto;
  }

  p {
    font-size: 0.8em;
    font-weight: 500;
    color: #b5b5b5;
    line-height: 25px;
    padding-top: 8%;
  }
  @media (max-width: ${media.smallDevice}){
    display:none;
}
`;

const Testimonios = styled.div`


  padding:4% 0 20% 0;
  width: 90%;
  margin:0 auto;
  text-align:center;
  display: none;

  @media (max-width: ${media.smallDevice}){
    display:block;
    p{
      font-size: 0.9em;
    }
    button{
      display:none !important;
    }

}

`



const SeccionTorneos = styled.div`
padding-top: 20%;
`


const TorneosCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 8%;

  @media (max-width: ${media.smallDevice}){
  justify-content: center;
    }

`;




const Align = styled.div`
text-align: center;



a{
  text-decoration: none;
  color: #EEEEEE;
  position: relative;
  transition: 0.2s ease 0s;
}
a:after{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: #6418DC;
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    transform: translateY(8.5px);
    cursor: pointer;
}

a:hover:after{
    opacity: 1;
    transform: translateY(4.5px);
    background-color: #6418DC;
  }

  @media (max-width: ${media.smallDevice}){

    h3{
      padding-top:20%;
  font-size: 1.4em;
}

}


`;




export {
  Stream,
  Reel,
  Gradiente,
  Overlay,
  Presentacion,
  Principal,
  Foto,
  Beneficios,
  Ganadores,
  GanadoresTitulo,
  Juegos,
  SeccionTorneos,
  TorneosCardContainer,
  Align,
  Testimonios,
};
