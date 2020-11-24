import styled from 'styled-components';
import media from 'lib/constants/media'


const Reel = styled.div`
width: 100%;

    background-image: url("assets/lineas.png");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
  background-attachment: fixed;

`;



const Align = styled.div`
padding-top: 8%;
text-align: center;

figure{
    display:flex;
    justify-content: center;
    
}




h1{
    font-size: 3em;
}

a{
    
    color: #B4B4B4;
    font-family: 'TTOctosquares';
    text-decoration: none;
    font-weight: 700;
    font-size: 1em;
transition: 0.2s all;


}

a:hover{
    color: #EEEEEE;

}




`

const Disclaimer = styled.div`
padding-top: 16px;
padding-bottom: 48px;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
color: #EA33BC;

p{
    margin-left: 15px;
}

`

const Texto = styled.p`
width:45%;
margin: 0 auto;
padding-bottom: 32px;
font-family: 'Maison Neue Extended';
  font-size: 1em;
  
  font-weight: 400;
  color:#B4B4B4;
  line-height: 2.2em;
  letter-spacing: 0.8px;


  @media (max-width: ${media.mediumDevice}){
    font-size: 0.8em;
    line-height: 1.8em;
    letter-spacing: 0.6em;
    width: 55%;
}
`


export {
    Reel,
    Align,
    Disclaimer,
    Texto
};