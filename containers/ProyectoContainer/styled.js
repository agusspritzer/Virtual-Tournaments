import styled from 'styled-components';


const Presentacion = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20%;

  p{
    line-height: 2em;
    color: #B4B4B4;
  }
`;


const PresentacionPersona = styled.div`
  width: 40%;
  padding:8% 6% 6% 6%;
  text-align:center;

h4{
    font-family: 'Maison Neue Extended';
    font-weight: 600;
    color: #EEEEEE;
    margin-top: 2%;
}

  img {
    display: block;
    height: 30%;
    width: 50%;
    margin:0 auto;
    border-radius: 100%;
  }
`;


const Principal = styled.div`
  width: 60%;

  p{
    margin-top: 2%;
    width: 90%; 
  }
`;

const Testimonios = styled.div`

  padding:4% 0 4% 0;
  width: 70%;
  margin:0 auto;
  text-align:center;

h5{
    font-family: 'Maison Neue Extended';
    color: #EEEEEE;
    letter-spacing: 1.5px;
    margin:0% 0% 4% 0;
    font-weight: 600;
}


`;


const LogosContainer = styled.div`
  text-align:center;
  margin-top: 10%;

h5{
    font-family: 'Maison Neue Extended';
    color: #EEEEEE;
    letter-spacing: 1px;
    margin:0% 0% 8% 0;
    font-weight: 600;
}


`;

const Logos = styled.div`

display:flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: baseline;

figure{
  margin: 0 4% 8% 4%;
}
img{
  width:70%;
  margin: 0 auto;
  
}
`;

const VTpoints = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 20%;

  p{
    line-height: 2em;
     }
`;



const VT_Img = styled.div`
  width: 40%;
  padding:2% 2% 2% 2%;
  
  img {
    display: block;
    height: 30%;
    width: 50%;
    margin:0 auto;

  }

  p{
    text-align:center;
    color: #EEEEEE;
  }
`;


const VT_Info = styled.div`
  width: 60%;

p{
  margin-top: 2%;
  width: 90%; 
}
`;


export {
    Presentacion,
    Principal,
    PresentacionPersona,
    Testimonios,
    LogosContainer,
    Logos,
    VTpoints,
    VT_Info,
    VT_Img,
  };
  