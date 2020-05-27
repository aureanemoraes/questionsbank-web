import styled, {keyframes} from 'styled-components';

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

export const Body = styled.div`
   display: flex;
   height: 100%;
`;

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  animation: ${appearFromLeft} 1s;

`;