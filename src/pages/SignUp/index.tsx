import React, {useCallback, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import {FiUser, FiLock, FiMail} from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, AnimationContent} from './styles';
import logoImg from '../../assets/logo-seed.png';
import InputValidation from '../../helpers/InputValidation';
import api from '../../services/api';
import {useToast} from '../../hooks/ToastContext';
import {useAuth} from '../../hooks/AuthContext';


interface SignUpData {
    cpf: string;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const {addToast} = useToast();
    const {signUp} = useAuth();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SignUpData) => {
            try {
                const schema = Yup.object().shape({
                    cpf: Yup.string()
                        .length(11, 'Cpf deve possuir 11 caracteres.'),
                    name: Yup.string().required('Nome obrigatório.'),
                    email: Yup.string().required('E-mail obrigatório.')
                        .email('Insira um endereço de e-mail válido.'),
                    password: Yup.string()
                        .min(6, 'Senha deve possuir no mínimo 6 digitos.'),
                    password_confirmation: Yup.string()
                        .required('É obrigatório confirmar a senha.')
                        .test('password-match', 
                        'Senhas não coincidem.',
                        () => data.password === data.password_confirmation)
                });
                
                await schema.validate(data, {
                    abortEarly: false
                });

                //await api.post('signup', data);
                await signUp(data);
                addToast({
                    type: 'success',
                    title: 'Cadastro realizado com sucesso.',
                    description: 'Você já pode utilizar esta plataforma.'
                });
                //history.push('/');
            } catch(err) {
                if(err instanceof Yup.ValidationError) {
                    const errors = InputValidation(err);
                    formRef.current?.setErrors(errors);
                } else {
                    addToast({
                        type: 'error',
                        title: 'Falha no cadastro',
                        description: 'Verifique seus dados e tente novamente.'
                    });
                }
            }
        }, [addToast, signUp]
    );

    return (
        <Container>
            <AnimationContent>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <img 
                        src={logoImg} 
                        alt="Secretaria de Educação do Estado do Amapá"
                    />
                    <h1>Banco de Questões</h1>
                    <Input icon={FiUser} name="cpf" placeholder="Cpf"/>
                    <Input icon={FiUser} name="name" placeholder="Nome"/>
                    <Input icon={FiMail} name="email" placeholder="E-mail"/>
                    <Input icon={FiLock} name="password" type="password" 
                        placeholder="Senha"/>
                    <Input 
                        icon={FiLock} 
                        name="password_confirmation" 
                        type="password" 
                        placeholder="Senha"
                    />
                    
                    <Button type="submit">Cadastrar</Button> 
                
                    <Link to="/">Voltar</Link>
                </Form>
            </AnimationContent>
        </Container>
    );
}

export default SignUp;