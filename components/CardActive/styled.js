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