import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    border: 2px solid #ADD8E6;
    border-radius: 20px;
    background-color: #fff;

    input {
        font-size: 18px;
        &:focus {
            border: 2px solid #FFD700;
        }
        & + input {
            margin-top: 4px;
        }
    }

    svg {
        
    }
`;