import styled from 'styled-components';
import media from 'lib/constants/media'


const Card_Img = styled.div`
  width: 32%;
  height: 150px;
  margin-bottom: 2%;
  background: url(../assets/juegos/color/${(props) => props.GameImg}); 
  background-size: 450px;
  background-position: center;
  overflow: hidden;
  filter: grayscale(100%);
  transition: ease 0.2s, transform 0.2s ease-out 2s;
  
  :hover{
    filter: none;
}


  @media (max-width: ${media.desktop1366}) {
    width: 46%;
    background-size: 600px;
  }

  @media (max-width: ${media.tablet1024}) {
    
  }

  @media (max-width: ${media.mobile651}){
    width: 100%;
    height: 85px;
    margin-bottom: 4%;
}

  @media (max-width: ${media.mobile375}) {
    height: 65px;
  }




  
`

const Card_Overlay = styled.div`
padding: 0 0% 2% 5%;
display: flex;
align-items: flex-end;
overflow: hidden;
height: 100%;
z-index: 2;

h3{
  font-size: 1em;
    font-weight: 500;
   letter-spacing: 0.8px;
    font-family: 'Maison Neue Extended';
}



`


export {
  Card_Overlay,
  Card_Img,
};