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

  z-index: 99;
  background-color: #272727;
  padding: 1% 3% 1% 3%;
  display: flex;
  justify-content: space-between;
align-items: center; 
position: fixed;
width:100%;

box-shadow: 4px 8px 20px -6px rgba(0,0,0,0.75);

  nav {
    width: 45%;
  }
  
  
  nav ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #eeeeee;
    font-size: 0.9em;
    font-weight: 400;
   letter-spacing: 0.4px;
   position: relative;
  transition: 0.2s ease 0s;
    font-family: 'Maison Neue Extended';
  }

a:after{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: #6418DC;
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    transform: translateY(8.5px);
    cursor: pointer;
}

a:hover:after{
    opacity: 1;
    transform: translateY(4.5px);
    background-color: #6418DC;
  }


  img{
    height:100%;
    width:100%
  }

`;

const Logo = styled.div`

    width: 10%;
    cursor: pointer;


`;


export { ContenedorHeader, Logo };
