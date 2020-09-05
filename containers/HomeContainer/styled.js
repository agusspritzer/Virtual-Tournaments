import styled from 'styled-components';



const Principal = styled.div`
  width: 50%;
  h3{
    font-weight: 400;
    font-size: 2em;
    line-height: 1.2em;
    padding-bottom:4%;
  }

  h4{
    letter-spacing: 0.8px;
  }
 
  span{
    font-weight: 700;
    color: #EA33BC;
  }
`;

const Reel = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Overlay = styled.div`
height: 100vh;
width: 100%;
position: absolute;
top: 0;
left: 0;
overflow: hidden;
opacity: 0.75;
`;


const Foto = styled.div`
  width: 50%;

  img {
    margin: 0 auto;
    width: 55%;
    height: 55%;
  }
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


  h4{
    font-size: 1em;
    letter-spacing: 0.2px;
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
`;

const Ganadores = styled.div`
  padding:4% 0 6% 0;
  width: 65%;
  margin:0 auto;
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
  margin-bottom: 20%;
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
`;


const SeccionTorneos = styled.div`
padding-top: 20%;
`


const TorneosCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 8%;
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


`;




export {
  Stream,
  Reel,
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
};
