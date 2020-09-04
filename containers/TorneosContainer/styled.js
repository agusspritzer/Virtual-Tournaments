import styled from 'styled-components';

const Buscador = styled.div`
width: 70%;
margin: 0 auto;
padding-bottom: 10%;

h3{
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  padding-bottom: 5%;
}

input{
  width: 100%;
  padding: 2% 3% 1.5% 3%;
  font-size: 1em;
  font-weight: 600;
  color: #272727;
  outline: none;
}

input::placeholder {
  font-weight: 400;
  color: #B4B4B4 ;
}
`


const Filtros = styled.div`
width: 70%;
margin: 0 auto;
display: flex;
justify-content: space-between;
padding-top: 10%;

select{
  outline: none;
  background-color: #6418DC;
  color: #FAFAFA;
  padding: 3% 5% 3% 5%;
  font-size: 1.2em;
}

`



const TorneosCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 12%;
`;

export {
  TorneosCardContainer,
  Buscador,
  Filtros
};