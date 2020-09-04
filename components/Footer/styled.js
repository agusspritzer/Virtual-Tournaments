import styled, { css } from 'styled-components';



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

`

const Logo = styled.div`

    width: 30%;
    margin: 0 auto;
    padding: 4%;
`





export { ContenedorFooter, Logo, };
