import styled from 'styled-components';

const PagoContainer = styled.div`
h4{
    color: #B4B4B4;
}

`;

const Opciones = styled.div`
h4{
    color: #272727;
    font-weight: 500;
}
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2%;

a{
color: #272727;
padding: 4% 3% 4% 3%;
background-color: #FFFFFF;
width: 48%;
display: flex;
text-decoration: none;
justify-content: flex-start;
align-items: center;
img{
    margin-right: 4%;
}
transition: 0.2s ease-out 0s;

:hover{
    h4{
        color: #EEEEEE;
    }
    cursor: pointer;
    background-color: #6418DC;
}
}
`;



const Monedas = styled.div`
color: #272727;
padding: 4% 3% 4% 3%;
background-color: #FFFFFF;
width: 48%;
display: flex;
justify-content: flex-start;
align-items: center;
img{
    margin-right: 4%;
}
span{
    font-weight: 700;
}

transition: 0.2s ease-out 0s;
:hover{
    h4{
        color: #EEEEEE;
    }
    cursor: pointer;
    background-color: #6418DC;
}

`;

export {
    PagoContainer,
    Opciones,
    Monedas,
};