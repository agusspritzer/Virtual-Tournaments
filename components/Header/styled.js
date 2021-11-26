import styled from 'styled-components';
import media from 'lib/constants/media';

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
  width: 100%;

  box-shadow: 4px 8px 20px -6px rgba(0, 0, 0, 0.75);

  nav {
    width: 45%;
  }

  nav ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #eeeeee;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 0.4px;
    position: relative;
    transition: 0.2s ease 0s;
    font-family: 'Maison Neue Extended';
    font-family: 'TTOctosquares';
  }

  a:after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: #6418dc;
    content: '';
    opacity: 0;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    transform: translateY(8.5px);
    cursor: pointer;
  }

  a:hover:after {
    opacity: 1;
    transform: translateY(4.5px);
    background-color: #6418dc;
  }

  #nonAfter:hover:after {
    opacity: 0 !important;
  }

  img {
    height: 100%;
    width: 100%;
  }

  nav ul li div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  nav ul li div a {
    font-family: 'Maison Neue Extended';
    margin-left: 15px;
    font-size: 1em;
    font-weight: 400;
  }

  nav ul li div img {
    height: 40px;
    width: 40px;
    border-radius: 200px;
    object-fit: cover;
  }


  @media (max-width: ${media.mobile651}) {
    nav {
      display: none;
    }
  }
`;

const Logo = styled.div`
  width: 10%;
  cursor: pointer;

  @media (max-width: ${media.mobile651}) {
    padding: 3%;
    width: 35%;
  }
`;

export { ContenedorHeader, Logo };
