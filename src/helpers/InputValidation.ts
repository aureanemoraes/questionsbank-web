import {ValidationError} from 'yup';

interface InputErros {
  [key: string]: string;
}

const InputValidation = (errors: ValidationError): InputErros => {
  const validatedInputs: InputErros = {};

  errors.inner.forEach(error => validatedInputs[error.path] = error.message);

  return validatedInputs;
}

export default InputValidation;