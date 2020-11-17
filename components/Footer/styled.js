import styled, { css } from 'styled-components';
import media from 'lib/constants/media'


const ContenedorFooter = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  ${props => props.tipo === "0" ? css`
p{
color: red;
}
 `: css`
 ` }

 
width: 40%;
margin: 0 auto;
background-color: #272727;
padding-top: 5%;
padding-bottom: 2%;


h3{
  text-align: center;
    font-size:1.2em;
    padding:3%;
}

nav {
    width: 70%;
    margin: 0 auto;
    padding:3%;
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
    width: 5%;
  }

  p{
      text-align: center;
      color: #B4B4B4;
      font-size: 0.9em;
      
  }

  p:nth-child(even){
      margin-bottom: 2%;
      font-size: 0.7em;
  }
  @media (max-width: ${media.smallDevice}){
width:90%;
nav{
  width: 85%;
}
  nav ul li a{
    width:8%;
    padding-bottom: 4%;
  }
  
  }
`

const Logo = styled.div`

    width: 30%;
    margin: 0 auto;
    padding: 4%;

    @media (max-width: ${media.smallDevice}){
width:45%;
}
`





export { ContenedorFooter, Logo, };
