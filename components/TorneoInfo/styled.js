import styled from 'styled-components';
import media from 'lib/constants/media'


const ContenedorMayor = styled.div`

display:flex;
justify-content: space-between;
align-items: flex-end;
margin-bottom: 10%;
flex-wrap: wrap;

a{
  margin-bottom: 30px;
  font-size: 0.8em;
  padding: 1.5% 3% 1.5% 3%;
}

@media (max-width: ${media.mobile375}) {
    margin-left:3%;
  }
`;

const InfoTorneoContainer = styled.div`

width: 80%;
display:flex;
justify-content: flex-start;


  @media (max-width: ${media.tablet1024}) {
    width: 95%;
    margin-bottom: 6%;
  }

  @media (max-width: ${media.mobile651}) {
    width: 95%;
    
  }

  @media (max-width: ${media.mobile375}) {
    width: 90%;
  }

`;

const InfoTorneo = styled.div`
width:40%;
margin-right:5%;

ul {
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  margin: 0;

}

li{
    margin-bottom: 20px;
}
p {
  color: #B4B4B4;
  font-size: 0.8em;
}

h3 {
  font-size: 0.9em;
  font-weight: 600;
  padding-bottom:0;
  color: #EEEEEE;

  margin-bottom: 5px;
}
@media (max-width: ${media.mobile651}) {
    width: 45%;
    margin-right: 10%;
  }
`;

const Prizes = styled.div`
width: 40%;


div {
  display: flex;
  justify-content: flex-start;
  
}

div img {
  width: 8%;
  height: 8%;
  margin-right: 4%;
}


p {
color: #B4B4B4;
  font-size: 0.8em;
  margin-top:5px;
  margin-bottom: 20px;
}

h3 {
  font-size: 0.9em;
  font-weight: 600;
  padding-bottom:0;
  color: #EEEEEE;
}

h2 {
  font-size: 0.9em;
  font-weight: 600;
  padding-bottom:0;
  color: #EEEEEE;
}

@media (max-width: ${media.mobile651}) {
    width: 45%;
  }

`;






export {
  ContenedorMayor,
  InfoTorneoContainer,
  InfoTorneo,
  Prizes,

};