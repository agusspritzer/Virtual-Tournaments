import styled from 'styled-components';
import media from 'lib/constants/media'

const NavegadorContainer = styled.div`
width: 100%;
margin: 0 auto;
margin-bottom: 1%;
border-bottom: 1px solid #707070;
text-align: center;



display: none;

nav {
    width: 80%;
    margin: 0 auto;
  }
  
  nav ul li{
    display: flex;
    justify-content: space-between;
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

  @media (max-width: ${media.tablet1024}) {
    nav {
      padding-top: 6%;
      width: 100%;
      margin: 0 auto;
    }
    nav ul li a {
      font-size: 0.8em;
    }
  }
  @media (max-width: ${media.mobile651}) {
    nav ul li a {
      font-size: 0.75em;
    }

    nav ul li {
      justify-content: space-between;
    }
  }
  @media (max-width: ${media.mobile375}) {
    nav {
      width: 95%;
    }
    nav ul li a {
      font-size: 0.7em;
    }
  }
`

export { NavegadorContainer };