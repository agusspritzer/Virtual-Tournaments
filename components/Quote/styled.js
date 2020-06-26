import styled from 'styled-components';


const QuoteContainer = styled.div`
text-align: center;
margin-top:4%;


`;

const Phrase = styled.p`
color: #EEEEEE;
width:60%;
margin:0 auto;
margin-bottom: 4%;
font-weight: 400;
line-height: 1.8em;

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