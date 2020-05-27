import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #00AFAD;
    
    
`;

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

export const AnimationContent = styled.div`
    form {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        margin: 5px;
        padding: 5px;
        min-width: 240px;
        max-width: 300px;
        animation: ${appearFromLeft} 1s;

        img {
            max-width: 100%;
            margin-bottom: 10px;
        }

        h1 {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #2E2E2E;
            margin-bottom: 20px;
        }
    
        a {
            text-decoration: none;
            color: #fff;
            font-weight: 500;
            font-size: 12px;

            &:hover {
                opacity: 0.5;
            }
        }
    }
`;
