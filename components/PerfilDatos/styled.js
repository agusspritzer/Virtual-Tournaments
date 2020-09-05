import styled from 'styled-components';

const DatosContainer = styled.div`
width: 40%;
margin-left: 4%;
h2{
    margin-top: 6%;
    font-size: 3em;
    margin-bottom: 5%;
}
`;

const Datos = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;


`;

const Estadistica = styled.div`
width: 45%;
margin-top: 2%;
p{
    color: #B4B4B4;
    
}
h4{
    font-family: 'TTOctosquares';
    color: #EEEEEE;
}
span{
    color: #3FFE6C;
}

strong{
    color: #FE3F53;
}

`;






export {
    DatosContainer,
    Datos,
    Estadistica,
};