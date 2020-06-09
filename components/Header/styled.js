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
  padding: 0.5% 3% 0.5% 3%;
  display: flex;
  justify-content: space-between;
align-items: center; 


  nav {
    width: 50%;
  }
  
  
  nav ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #eeeeee;
    font-size: 1em;
    font-weight: 600;
  }

  img{
    height:100%;
    width:100%
  }

`;

const Logo = styled.div`

    width: 10%;


`


{
  /* BOTONES */
}


{  /* Boton Relleno */}
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
  cursor: pointer;
`;

{  /* Boton solo bordes*/}
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
  cursor: pointer;
`;



export { ContenedorHeader, Logo, Button_Prim, Button_Sec };
