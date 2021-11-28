import styled from 'styled-components';

const NavegadorContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1%;
  border-bottom: 1px solid #707070;
  text-align: center;

  display: none;

  nav {
    width: 80%;
    margin: 0 auto;
  }

  nav ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul li a {
    text-decoration: none;
    color: #9a9a9a;
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
    font-family: 'TTOctosquares';
  }
`;

export { NavegadorContainer };
