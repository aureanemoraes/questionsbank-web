import styled, {css} from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean
}


export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    border: 2px solid #00AFAD;
    border-radius: 20px;
    background-color: #fff;
    font-size: 14px;

    input {
        flex: 1;
        border: 0;
        background: transparent;
        font-size: 14px;

        
        &::placeholder {
            color: #8C8984;
        }
    }

    & + div {
        margin-top: 6px;
    }

    svg {
        margin-right: 6px;
        color: #8C8984;
    }

    ${props => props.isFocused && css`
        border: 2px solid #FCAF17;
        svg {
            color: #FCAF17;
        }
    `}

    ${props => props.isFilled && css`
        svg {
            color: #FCAF17;
        }
    `}
`;

export const Error = styled(Tooltip)`
    height: 18px;
    margin-left: 6px;
    
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
