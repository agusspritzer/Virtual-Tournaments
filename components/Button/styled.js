import styled,{css} from 'styled-components';
import media from 'lib/constants/media'

const ButtonType= styled.a`


@media ${media.mediumDevice} {
    text-decoration: none;
    color: #eeeeee;
    font-size: 0.8em;
    font-weight: 400;
    font-family: 'TTOctosquares';
  padding: 2% 3% 2% 3%;
  background-color: #6418DC;
  cursor: pointer;

  ${props => props.modo === "outline"? css`
 
  background-color: #272727;
      border: 2.5px solid #6418DC;

  `: css`
  background-color: #6418DC;
 
  ` }
}
`;

export {
ButtonType
};