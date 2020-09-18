import styled from 'styled-components';
import media from 'lib/constants/media'


const DataCont = styled.div`
  width: 45%;
  margin: 0 auto;


h1{
    margin-bottom: 35px;
    font-size: 1.8em;
}
p{
    font-size: 1em;
    color:#B4B4B4;
    margin-bottom: 1%;
}

h2{
    font-size: 1.2em;
    margin-bottom: 1%;
}


`;

const Pe = styled.div`
cursor: pointer;
p{
    font-size: 1em;
color: #EEEEEE;
}
`

const TorneoContainer = styled.div`
margin-bottom: 8%;
h4{
    font-size: 1em;
    color: #EA33BC;
}

`

const PrecioContainer = styled.div`
h2{
    font-size: 1.4em;
    margin-bottom: 1%;
}
margin-bottom: 8%;
h4{
    font-size: 1em;
    color: #EA33BC;
}

`

const IniciarSesion = styled.div`
padding-top: 6%;
`;


export {
    Pe,
    DataCont,
    IniciarSesion,
    TorneoContainer,
    PrecioContainer,
};
