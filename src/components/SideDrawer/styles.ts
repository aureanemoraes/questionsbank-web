import styled, {keyframes, css} from 'styled-components';

interface ContainerProps {
  action: boolean;
}

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const hideToRight = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-50px);
    }
`;

export const Item = styled.ul`
  list-style: none;

  li {
    border: 0;
    
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 16px 8px;
      text-align: start;
      background: transparent;
      font-size: 14px;
      font-weight: bold;
      color: #fff;

      &:hover {
        background: #0083CA;
        color: #fff;
      }
    } 
  }
`;

export const SubItem = styled.ul`
  list-style: none;

  li {
    border: 0;
    margin: 0;
    font-size: 14px;

    a {
      display: block;
      text-decoration: none;
      color: #000;
      padding: 14px 16px;
      background: transparent;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
 
      &:hover {
        background: #F26522;
        color: #fff;
      }
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  background: #00AFAD;
  width: 240px;
  border: 0;

  ${props => props.action ? 
      css`animation: ${appearFromLeft} 1s;` : 
      css`animation: ${hideToRight} 3s;`
    }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px 0;
    text-align: start;
    border: 0;
    background: transparent;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      background-color: rgba(0, 175, 173, 0.5);

    }  
  }
`;