import styled from 'styled-components';



const Principal = styled.div`
  width: 50%;
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
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 15%;
  padding-top: 2%;
`;


const Stream = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  background-color: #272727;
  padding-top: 8%;
  padding-bottom: 8%;
`;

const Juegos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3%;
`;

const Card_Juego = styled.div`
  width: 22%;
  height: 380px;
  border-radius: 20px;

  img {
    width: auto;
    height: 100%;
    border-radius: 10px;
  }
`;

const Beneficios = styled.div`
  text-align: center;
  background-color: #272727;
  padding-top: 5%;
  padding-bottom: 8%;
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


const TorneosActivos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 2.5%;
  padding-bottom: 10%;
`;




export {
  Stream,
  Presentacion,
  Principal,
  Foto,
  Beneficios,
  Card_Juego,
  Juegos,
  TorneosActivos,
};
