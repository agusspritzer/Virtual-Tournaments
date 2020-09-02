import styled from 'styled-components';

const SeccionAyuda = styled.div`
width: 70%;
margin: 0 auto;
padding-bottom: 6%;
text-align: center;

h5{
    font-family: 'Maison Neue Extended';
  font-size: 1em;
  font-weight: 600;
  color:#EA33BC;
  margin-bottom: 1%;
text-align: center;
}

h1{
    font-size: 2em;
  font-weight: 700;
  margin-bottom: 1%;
}

 p{
  width: 50%;
  margin: 0 auto;
  color: #B4B4B4;
  font-weight: 400;
  font-size: 0.8em;
}

`

const Navegador = styled.div`
width: 100%;
margin: 0 auto;
margin-bottom: 1%;
border-bottom: 1px solid #707070;
text-align: center;

nav {
    width: 80%;
    margin: 0 auto;
  }
  
  nav ul li{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #9A9A9A;
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
    font-family: 'TTOctosquares';
  }
`

const FaqContainer = styled.div`
  width: 100%;
  padding-top: 5%;
  padding-bottom: 8%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MensajeContainer = styled.div`
text-align: center;

h3{
    padding-bottom: 1%;
    font-size:1.2em;
}
p{
    color: #B4B4B4;
    font-weight: 400;
    font-size: 0.8em;
    margin-bottom:3%;
}
`


const MensajeArea = styled.div`
width:60%;
margin:0 auto;
padding-bottom:10%;

textarea{
    width: 100%;
    height: 300px;
    background-color: #272727;
    color: #EEEEEE;
    
    border: 4px solid #6418DC;

    outline: none;
    padding: 4%;
    resize: none;

    margin-bottom: 3%;
    font-size: 0.9em;
    line-height: 2em;
    
}


textarea::placeholder {
    font-weight: 2em;
  font-weight: 400;
  color: #B4B4B4 ;
}

a{
    text-align: right;
    padding: 2.5% 6% 2.5% 6%;
}

`

export {
  Navegador,
  SeccionAyuda,
  FaqContainer,
  MensajeContainer,
  MensajeArea,
};