import styled from 'styled-components';

const Card = styled.div`
  width: 23%;
  background-color: #eeeeee;
  margin-bottom:5%;

  figure {
    height: 24%;
    overflow: hidden;
    border-bottom: 8px solid #6418dc;
  }
`;

const Card_Info = styled.div`
  padding: 8%;
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
    font-size: 1.2em;
    font-weight: 600;
    padding-bottom:0;
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
    margin:1% 0 1% 0;
    color: #272727;
    font-weight: 500;
    text-align: left;
    font-family: 'Maison Neue Extended';
  }

  ul {
    text-decoration: none;
    list-style-type: none;
    padding: 0;

  }
  li {
    text-align: left;
    margin-bottom: 8%;
  }
`;

export {
  Card_Info,
  Card
};