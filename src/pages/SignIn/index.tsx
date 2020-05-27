import React, {useRef, useCallback} from 'react';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import {FiUser, FiLock} from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InputValidation from '../../helpers/InputValidation';
import {Container, AnimationContent} from './styles';
import logoImg from '../../assets/logo-seed.png';

import {useAuth} from '../../hooks/AuthContext';
import {useToast} from '../../hooks/ToastContext';


interface SignInData {
    cpf: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const {signIn} = useAuth();
    const {addToast} = useToast();

    const handleSubmit = useCallback(
        async (data: SignInData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    cpf: Yup.string().length(11, 'Cpf deve possuir 11 caracteres.'),
                    password: Yup.string()
                        .required('Senha obrigatória.')
                });
                
                await schema.validate(data, {
                    abortEarly: false
                });

                await signIn(data);
            } catch(err) {
                if(err instanceof Yup.ValidationError) {
                    const errors = InputValidation(err);
                    formRef.current?.setErrors(errors);
                } else {
                    addToast({
                        type: 'error',
                        title: 'Falha na autenticação',
                        description: 'Credenciais incorretas.'
                    });
                }
            }
        }, [addToast, signIn]
    );

    return (
        <Container>
            <AnimationContent>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <img src={logoImg} alt="Secretaria de Educação do Estado do Amapá" />
                    <h1>Banco de Questões</h1>
                    <Input icon={FiUser} name="cpf" placeholder="Cpf"/>
                    <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
                    <Button type="submit">Entrar</Button> 
                
                    <a href="a">Esqueci minha senha</a>
                    <Link to="/signup">Cadastre-se</Link>
                </Form>
            </AnimationContent> 
        </Container>
    );
}

export default SignIn;