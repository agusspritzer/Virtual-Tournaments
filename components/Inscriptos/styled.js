import styled from 'styled-components';
import media from 'lib/constants/media'



const InscriptosContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
p{
    margin-left: 2%;
    
}
span{
    font-weight: 700;
}

@media (max-width: ${media.desktop1366}) {
    p{
    font-size: 0.9em;
    }
}

@media (max-width: ${media.mobile375}) {
    p{
    margin-left: 6%;
    }
}

`;

const Inscriptos = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
h4{
    color:#EEEEEE;
    font-size: 1em;
    
}


@media (max-width: ${media.desktop1366}) {
    h4{
    font-size: 0.9em;
    }
}

@media (max-width: ${media.mobile651}) {
    h4{
    margin-right: 4%;
    }
}

@media (max-width: ${media.mobile375}) {
    h4{
    margin-left: 10%;
    }
}


`;




export {
    InscriptosContainer,
    Inscriptos,
};