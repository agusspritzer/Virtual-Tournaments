import styled, { css } from 'styled-components';
import media from 'lib/constants/media'

const ButtonType = styled.a`


@media ${media.mediumDevice} {
    text-decoration: none;
    color: #eeeeee;
    font-size: 0.9em;
    font-weight: 400;
    font-family: 'TTOctosquares';
    letter-spacing: 0.4px;
  padding: 2% 3% 2% 3%;
  background-color: #6418DC;
  cursor: pointer;
  transition: 0.2s ease 0s;

  ${props => props.modo === "outline" ? css`
 
  background-color: #272727;
  border: 2.5px solid #6418DC;

  :hover{
    background-color: #6418DC;
  }

  `: css`
  background-color: #6418DC;
 
  ` }
}
`;


export {
  ButtonType
};