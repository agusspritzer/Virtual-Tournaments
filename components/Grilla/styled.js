import styled from 'styled-components';
{
  /* Aca traigo el styled para escribir el css*/
}

{
  /* Este es el styled el codigo delheader*/
}

const ContenedorHeader = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  background-color: #272727;
  padding: 1% 3% 1% 3%;
  display: flex;
  justify-content: space-between;

  #logo {
    width: 20%;
  }

  nav {
    width: 50%;
  }

  nav ul li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  nav ul li a {
    text-decoration: none;
    color: #eeeeee;
    font-size: 1em;
    font-weight: 600;
  }

`;


const Button_P = styled.a`
  * {
    padding: 0;
    margin: 0;
  }

  padding: 2%;
  font-size: 1em;
  background-color: #6418DC;
  text-align: center;
  color: black;
  display: inline;
  cursor: pointer;
`;

const Button_Prim = styled.a`
  * {
    padding: 0;
    margin: 0;
  }

  padding: 2%;
  font-size: 1em;
  background-color: #6418DC;
  text-align: center;
  color: black;
  display: inline;
  cursor: pointer;
`;

const Button_Sec = styled.a`
  * {
    padding: 0;
    margin: 0;
  }

  padding: 2%;
  font-size: 1em;
  background-color: none;
  border: 4px solid #6418DC;
  text-align: center;
  color: black;
  display: inline;
  cursor: pointer;
`;



export { ContenedorHeader, Button_Prim, Button_Sec };
