import styled from 'styled-components';
import media from 'lib/constants/media';

const SeccionAyuda = styled.div`
width: 70%;
margin: 0 auto;
padding-bottom: 3%;
text-align: center;

h5{
    font-family: 'Maison Neue Extended';
  font-size: 1em;
  font-weight: 600;
  color:#EA33BC;
  margin-bottom: 1%;
text-align: center;
}

h3{
    font-size: 2em;
  font-weight: 700;
  margin-bottom: 1%;
}

 p{
  width: 50%;
  margin: 0 auto;
  color: #B4B4B4;
  font-weight: 400;
  font-size: 0.8em;
}

@media (max-width: ${media.desktop1366}) {
  padding-top: 4%;
  h3{
    font-size: 1.7em
  }
    width: 85%;
    p{
      width: 65%;
    }
  }

@media (max-width: ${media.tablet1024}) {
  padding-top: 5%;
  h3{
    font-size: 1.6em
  }
    width: 85%;
    p{
      width: 65%;
    }
  }

  @media (max-width: ${media.mobile651}) {
    width: 90%;
    padding-top: 6%;
    h3{
    font-size: 1.5em
  }
    p{
      width: 85%;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width:95;
    h3{
    font-size: 1.4em;
  }
    p{
      width: 90%;
    }
  }



`

const FaqContainer = styled.div`
  width: 100%;
  padding-top: 5%;
  padding-bottom: 8%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


  @media (max-width: ${media.mobile651}) {
    text-align: center;
    justify-content: center;
  }

`;

const MensajeContainer = styled.div`
text-align: center;

h3{
    padding-bottom: 1%;
    font-size:1.2em;
}
p{
    color: #B4B4B4;
    font-weight: 400;
    font-size: 0.8em;
    margin-bottom:3%;
}
`


const MensajeArea = styled.div`
width:60%;
margin:0 auto;
padding-bottom:10%;

textarea{
    width: 100%;
    height: 300px;
    background-color: #272727;
    color: #EEEEEE;
    
    border: 4px solid #6418DC;

    outline: none;
    padding: 4%;
    resize: none;

    margin-bottom: 3%;
    font-size: 0.9em;
    line-height: 2em;
    
}


textarea::placeholder {
    font-weight: 2em;
  font-weight: 400;
  color: #B4B4B4 ;
}

a{
    text-align: right;
    padding: 2.5% 6% 2.5% 6%;
}

@media (max-width: ${media.desktop1366}) {
    width: 75%;
  }

@media (max-width: ${media.tablet1024}) {
    width: 85%;
  }

  @media (max-width: ${media.mobile651}) {
    width: 90%;
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
  }

`

export {
  SeccionAyuda,
  FaqContainer,
  MensajeContainer,
  MensajeArea,
};