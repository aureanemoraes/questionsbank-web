import React, { 
    InputHTMLAttributes, 
    ComponentType, 
    useCallback,
    useState,
    useRef,
    useEffect
} from 'react';
import {useField} from '@unform/core';
import {IconBaseProps} from 'react-icons';
import {FiAlertCircle} from 'react-icons/fi';
import {Container, Error} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon , name, ...props}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const {fieldName, defaultValue, error, registerField} = useField(name);

    useEffect(
        () => {
            registerField({
                name: fieldName,
                ref: inputRef.current,
                path: 'value'
            });
        }, [fieldName, registerField]
    );

    const handleOnBlur = useCallback(
        (): void => {
            setIsFocused(false);
            setIsFilled(!!inputRef.current?.value);
        }, []
    );

    const handleOnFocus = useCallback(
        (): void => {
            setIsFocused(true);
        }, []
    );

    return (
        <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
            {Icon && <Icon size={18}/>}
            <input 
                ref={inputRef}
                {...props}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
            />
            {error && 
                (<Error title={error}>
                    <FiAlertCircle size={18} color="#850900 "/>
                </Error>)
            }
        </Container>
    );
}

export default Input;