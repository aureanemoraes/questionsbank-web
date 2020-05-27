import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import {Container, Error} from './styles';
import {FiAlertCircle} from 'react-icons/fi';


interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const customStyles = {
  container: (oldProps: any) => ({...oldProps, width: '100%'}),
  control: () => ({display: 'flex', border: 0}),
}

const Select: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        } else {
          if (!ref.state.value) {
            return '';
          }
          return ref.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Container>
      <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      styles={customStyles}
      {...rest}
      />

      {error && 
        (<Error title={error}>
            <FiAlertCircle size={18} color="#850900 "/>
        </Error>)
      }
    </Container>
    
  );
};
export default Select;