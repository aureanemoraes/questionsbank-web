import styled from 'styled-components';
import Tooltip from '../Tooltip';




export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 2px;
    border: 2px solid #00AFAD;
    border-radius: 20px;
    font-size: 14px;
    
    & + div {
        margin-top: 6px;
    }
    
`;

export const Error = styled(Tooltip)`
    height: 18px;
    margin-right: 6px;
    
    svg {
        margin: 0;
    }

    span {
        background-color: rgba(133, 9, 0, 0.8);
        color: white;

        &::before {
            border-color: rgba(133, 9, 0, 0.8) transparent;
        }
    }
`;