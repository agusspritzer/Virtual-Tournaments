import styled from 'styled-components';


const QuoteContainer = styled.div`
text-align: center;
margin:2% 0 2% 0;
outline:none;

`;

const Phrase = styled.p`
display:flex;
align-items:center;
color: #EEEEEE;
width:60%;
margin:0 auto;
margin-bottom: 4%;
font-weight: 400;
line-height: 1.8em;
height: 180px;
text-align:center;
`

const Author = styled.h4`
color: #EEEEEE;
font-size: 1.2em;
margin-bottom:0.5%;
font-weight: 600;

`

const Description = styled.p`
color: #B4B4B4;
`

export {
    QuoteContainer,
    Author,
    Phrase,
    Description
};