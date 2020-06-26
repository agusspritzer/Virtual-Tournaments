import styled,{css} from 'styled-components';
import media from 'lib/constants/media'

const Button= styled.a`
@media ${media.mediumDevice} {
    text-decoration: none;
    color: #eeeeee;
    font-size: 0.8em;
    font-weight: 400;
    font-family: 'TTOctosquares';
  padding: 2.5% 4% 2.5% 4%;
  background-color: #6418DC;
  cursor: pointer;

  ${props => props.modo === "relleno"? css`
  background-color: #6418DC;

  `: css`
      background-color: #272727;
      border: 3px solid #6418DC;
 
  ` }
}
`;

export {
Button
};