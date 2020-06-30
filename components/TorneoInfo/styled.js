import styled from 'styled-components';



const ContenedorMayor = styled.div`

display:flex;
justify-content: space-between;
align-items: flex-end;
`;

const InfoTorneoContainer = styled.div`

width: 80%;
display:flex;
justify-content: flex-start;


`;

const InfoTorneo = styled.div`
width:40%;
margin-right:25px;

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
  font-size: 0.9em;
}

h3 {
  font-size: 1.2em;
  font-weight: 600;
  padding-bottom:0;
  color: #EEEEEE;

  margin-bottom: 5px;
}

`;

const Prizes = styled.div`
width: 30%;


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
  font-size: 0.9em;
  margin-top:5px;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.2em;
  font-weight: 600;
  padding-bottom:0;
  color: #EEEEEE;
}

h2 {
  font-size: 1.4em;
  font-weight: 600;
  padding-bottom:0;
  color: #EEEEEE;
}

`;






export {
    ContenedorMayor,
    InfoTorneoContainer,
    InfoTorneo,
    Prizes,

};