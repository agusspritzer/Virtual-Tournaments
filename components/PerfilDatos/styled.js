import styled from 'styled-components';
import media from 'lib/constants/media'


const DatosContainer = styled.div`
width: 35%;
margin-left: 4%;
h2{
    font-size: 3em;
    margin-bottom: 5%;
}


@media (max-width: ${media.desktop1680}) {
    width: 40%;
    h2{
        font-size: 2.8em;
    }
    p{
        font-size: 1em;
}

    h4{
        font-size: 1.1em;
    }

  }
  @media (max-width: ${media.desktop1366}) {
    width: 50%;

    h2{
        font-size: 2.4em;
    }
    p{
        font-size: 1em;
}

    h4{
        font-size: 1.1em;
    }
  }

  @media (max-width: ${media.tablet1024}) {
    width: 55%;
    h2{
        font-size: 2em;
    }
    p{
        font-size: 0.9em;
}

    h4{
        font-size: 1em;
    }
  }

  @media (max-width: ${media.mobile651}) {
    width: 100%;
    margin-left: 0%;
    h2{
        font-size: 2.2em;
        margin-bottom: 2%;
    }
    p{
        font-size: 1em;
}

    h4{
        font-size: 1.2em;
    }
  }

  @media (max-width: ${media.mobile375}) {
    width: 95%;
    h2{
        font-size: 2.2em;
    }
    p{
        font-size: 0.8em;
}

    h4{
        font-size: 1em;
    }
  }



`;

const Datos = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;



`;

const Estadistica = styled.div`
width: 45%;
margin-top: 2%;
p{
    color: #B4B4B4;
    
}
h4{
    font-family: 'TTOctosquares';
    color: #EEEEEE;
}
span{
    color: #3FFE6C;
}

strong{
    color: #FE3F53;
}

`;






export {
    DatosContainer,
    Datos,
    Estadistica,
};