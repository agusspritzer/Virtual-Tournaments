import styled from 'styled-components';
import media from 'lib/constants/media'

const DataCont = styled.form`
  width: 45%;
  margin: 0 auto;
display:flex;
flex-direction: column;
justify-content: space-between;

h2{
    text-align: center;
    margin-bottom: 35px;
}
p{
    margin-top: 15px;
    text-align: center;
    cursor: pointer;

    & span{
        font-weight: 600;
    }

}


`;

const FormLogin = styled.div`

display: flex;
flex-wrap: no-wrap;
justify-content: space-between;
flex-direction: column;


@media ${media.mediumDevice} {
    flex-direction: row;
}
`;



export {
    DataCont,
    FormLogin,
};
