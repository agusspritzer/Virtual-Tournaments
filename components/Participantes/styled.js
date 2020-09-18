import styled from 'styled-components';


const Usuarios = styled.div`
width: 25%;
display:flex;
justify-content: flex-start;
align-items: center;
img{
    margin-right: 12px;
}
h5{
    color: #9A9A9A;
    letter-spacing: 0.6px;
    transition: 0.2s ease 0s;

    :hover{
    color: #EEEEEE;
    font-weight: 600;
    cursor: pointer;

}
}



`;



export {
    Usuarios,
};