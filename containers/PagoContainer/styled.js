import styled from 'styled-components';
import media from 'lib/constants/media'


const DataCont = styled.div`
  width: 45%;
  margin: 0 auto;


h1{
    width: 75%;
    margin-bottom: 35px;
    font-size: 1.8em;
}
p{
    font-size: 1em;
    color:#B4B4B4;
    margin-bottom: 1%;
}

h2{
    font-size: 1.2em;
    margin-bottom: 1%;
}

@media (max-width: ${media.desktop1680}) {
    width: 55%;
    padding-top: 4%;
    
    h1{
    font-size: 1.7em;
}

  }
  @media (max-width: ${media.desktop1366}) {
    width: 65%;
    padding-top:6%;
    h1{
    font-size: 1.6em;
}
  }

  @media (max-width: ${media.tablet1024}) {
    width: 80%;
    padding-top: 10%;
    h1{
    font-size: 1.5em;
}
  }

  @media (max-width: ${media.mobile651}) {
    width: 85%;
    padding-top: 16%;
    h1{
        width: 100%;
    font-size: 1.4em;
}
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
    padding-top: 20%;
    h1{
    font-size: 1.3em;
}
  }
`;

const Pe = styled.div`
cursor: pointer;
p{
    font-size: 1em;
color: #B4B4B4;
}
`

const TorneoContainer = styled.div`
margin-bottom: 8%;
h4{
    font-size: 1em;
    color: #EA33BC;
}

@media (max-width: ${media.desktop1366}) {


  }

  @media (max-width: ${media.tablet1024}) {
    h2{
        font-size: 1.2em ;
    }
    h4{
    font-size: 1em;
}
  }

  @media (max-width: ${media.mobile651}) {
    h2{
        font-size: 1em ;
    }
    h4{
    font-size: 0.9em;
}
  }

  @media (max-width: ${media.mobile375}) {
    padding-top: 2%;
    h2{
        font-size: 1em ;
    }
    h4{
    font-size: 0.8em;
}

  }

`

const PrecioContainer = styled.div`
h2{
    font-size: 1.4em;
    margin-bottom: 1%;
}
margin-bottom: 8%;
h4{
    font-size: 1em;
    color: #EA33BC;
}

@media (max-width: ${media.desktop1366}) {
    h4{
    font-size: 1em;
}  
h2{
    font-size: 1.3em;

}


}

  @media (max-width: ${media.tablet1024}) {
    h4{
    font-size: 0.9em;
}  
h2{
    font-size: 1.2em;

}
  }

  @media (max-width: ${media.mobile651}) {
    h4{
    font-size: 0.9em;
}  
h2{
    font-size: 1.1em;

}
  }

  @media (max-width: ${media.mobile375}) {
    h4{
    font-size: 0.8em;
}  
h2{
    font-size: 1em;

}
  }


`

const IniciarSesion = styled.div`
padding-top: 6%;
`;


export {
    Pe,
    DataCont,
    IniciarSesion,
    TorneoContainer,
    PrecioContainer,
};
