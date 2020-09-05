import styled, { css } from 'styled-components';
import media from 'lib/constants/media'

const ButtonSubmit = styled.button`


@media ${media.mediumDevice} {

    width: ${(props) => props.width};
    text-decoration: none;
    outline: inherit;
    color: #eeeeee;
    font-size: 0.8em;
    font-weight: 600;
    font-family: 'TTOctosquares';
  padding: 20px 15px 20px 15px;
  background-color: #6418DC;
  cursor: pointer;

border: 0px solid transparent;



}
`;

export {
  ButtonSubmit,
};