import styled from 'styled-components';


const QuoteContainer = styled.div`
text-align: center;
margin:2% 0 2% 0;
outline:none;
height: 180px;
img {
    width: auto;
    height: 35%;
    margin: 0 auto;
  }
`;

const Phrase = styled.p`

display:flex;
align-items:center;

margin:0 auto;
margin-bottom: 4%;

line-height: 25px;
padding-top: 8%;



width:90%;
font-size: 1em;
    font-weight: 400;
    color: #b5b5b5;

  
`



export {
    QuoteContainer,
    Phrase,
};