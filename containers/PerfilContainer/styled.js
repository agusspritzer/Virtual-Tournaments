import styled from 'styled-components';



const Navegador = styled.div`
width: 100%;
margin: 0 auto;
margin-bottom: 6%;
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

  nav ul li a span{
    color: #FE3F53;
  }
`

const PerfilSeccion = styled.div`
margin-bottom: 8%;
display: flex;
justify-content: space-between;
align-items: flex-end;
`

const Jugador = styled.div`
display: flex;
justify-content: flex-start;
width: 80%;

figure{
  border: 7px solid #6418DC;
}
img{
  height: 100%;
  display:inline-block; 
}
`
const Config = styled.div`

img{
  display: inline-block;
  margin-right: 12px;
}
`


const Redes = styled.div`
width: 15%;

p{
  margin-bottom: 8%;
  text-align: end;
  color: #B4B4B4;
}
`

const IconosRedes = styled.div`
display: flex;
justify-content: flex-end;
cursor: pointer;

img{
  margin-left: 15%;
}
`



export {
  Navegador,
  PerfilSeccion,
  Jugador,
  Config,
  IconosRedes,
  Redes,
};