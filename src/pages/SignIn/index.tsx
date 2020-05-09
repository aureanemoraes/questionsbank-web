import React from 'react';
import {FiUser, FiLock} from 'react-icons/fi';
import Input from '../../components/Input';
import {Container, Header} from './styles';
import logoImg from '../../assets/logo-seed.png';
const SignIn: React.FC = () => {

    return (
        <Container>
            <form>
                <div>
                    <img src={logoImg} alt="Secretaria de Educação do Estado do Amapá" />
                    <h1>Banco de Questões</h1>
                </div>
                <div>
                    <Input icon={FiUser} name="cpf" placeholder="Cpf"/>
                    <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button> 
                </div>
                <div>
                    <a href="a">Esqueci minha senha</a>
                    <a href="b">Cadastre-se</a>
                </div>
            </form>
            
        </Container>
    );
}

export default SignIn;