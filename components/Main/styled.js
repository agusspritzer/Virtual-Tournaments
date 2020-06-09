import styled from 'styled-components';

const ContenedorMain = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  background-color: #272727;

width:65%;
margin:0 auto;
padding-top: 7%;

`
const H3 = styled.h3`

        font-family: 'TTOctosquares';
        font-size:1.6em;
        font-weight:700;
        padding:1%;
`

const H4 = styled.h4`

font-size:1em;
    font-weight:500;
    color: #B5B5B5;
    padding-bottom: 2%;
`

const H5 = styled.h5`

    font-size:0.9em;
    font-weight: 700;
    color: #EEEEEE;
    font-family: 'TTOctosquares';
    text-align: right;
`



const Stream = styled.div`

    width: 70%;
    margin: 0 auto;
    text-align: center;
    background-color: #272727;
    padding-bottom:8%;
    
`

const Juegos = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    padding-bottom: 3%;
`

const Card = styled.div`
    width: 22%;
    height: 380px;
    border-radius: 20px;

    img{
        width: auto;
        height: 100%;
        border-radius: 10px;
    }
`

export { Stream, Card, H3, H4, H5, ContenedorMain, Juegos };
