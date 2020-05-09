import React, { InputHTMLAttributes, ComponentType } from 'react';
import {IconBaseProps} from 'react-icons';
import {Container} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon , ...props}) => {
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...props}></input>
        </Container>
    );
}

export default Input;