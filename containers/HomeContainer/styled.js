import styled from 'styled-components';

const ContenedorMain = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  background-color: #272727;

  width: 65%;
  margin: 0 auto;
  padding-top: 10%;
`;

const H1 = styled.h1`
  * {
    padding: 0;
    margin: 0;
  }

  font-family: 'TTOctosquares';
  font-size: 2em;
  font-weight: 400;
`;

const Titulo = styled.div`
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
const H3 = styled.h3`
  font-family: 'TTOctosquares';
  font-size: 1.6em;
  font-weight: 700;
  padding-bottom: 2%;
`;

const H4 = styled.h4`
  font-size: 1em;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 30px;
  padding-bottom: 2%;
`;

const H5 = styled.h5`
  font-size: 0.9em;
  font-weight: 700;
  color: #eeeeee;
  font-family: 'TTOctosquares';
  text-align: right;
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
  padding-bottom: 15%;
`;

const Card = styled.div`
  width: 23%;
  background-color: #eeeeee;

  figure {
    height: 24%;
    overflow: hidden;
    border-bottom: 8px solid #6418dc;
  }
`;
const Card_Info = styled.div`
  padding: 8% 8% 8% 8%;
  height: 290px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  div img {
    width: 8%;
    height: 8%;
    margin-right: 4%;
  }

  p {
    color: #707070;
    font-size: 0.8em;
  }
  h3 {
    font-size: 1.1em;
    font-weight: 700;
    padding-bottom: 5%;
    color: #272727;
  }

  h4 {
    font-size: 1em;
    color: #6418dc;
    font-weight: 600;
    padding-bottom: 0;
    padding-top: 0.5%;
  }

  h5 {
    font-size: 1em;
    color: #272727;
    font-weight: 500;
    text-align: left;
    font-family: 'Maison Neue Extended';
  }

  ul {
    text-decoration: none;
    list-style-type: none;
  }
  li {
    line-height: 35px;
    padding-bottom: 0;
    margin-top: 4%;
    text-align: left;
  }
`;

export {
  Stream,
  Presentacion,
  Titulo,
  Foto,
  Beneficios,
  Card_Juego,
  Card_Info,
  H1,
  H3,
  H4,
  H5,
  ContenedorMain,
  Juegos,
  TorneosActivos,
  Card,
};
