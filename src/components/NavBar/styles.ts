import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #00AFAD;

  /*position: fixed; */

  button {
    background: transparent;
    border: 0;
    margin: 0 8px;
    padding: 0;
    height: 25px;
  }
  

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    &:hover {
      color: #F26522;
    }

    &:active {
      color: #FCAF17;
    }
  }
`;




