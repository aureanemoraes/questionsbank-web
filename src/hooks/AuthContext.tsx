import React, {createContext, useCallback, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';


import api from '../services/api';

interface UserFormat {
  id: number;
  cpf: string;
  name: string;
  email: string;
  level: number;
}

interface AuthData {
  user: UserFormat;
  token: string;
}

interface SignInData {
  cpf: string;
  password: string;
}

interface SignUpData {
  cpf: string;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface AuthContextData {
  token: string;
  user: UserFormat;
  signIn(data: SignInData): Promise<void>;
  signOut(): Promise<void>;
  signUp(data: SignUpData): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const history = useHistory();
  
  const [data, setData] = useState<AuthData>(() => {
    const user = localStorage.getItem('@QuestionsBank::user');
    const token = localStorage.getItem('@QuestionsBank::token');

    if(user && token) return {user: JSON.parse(user), token};

    return {} as AuthData;
  });

  const signIn = useCallback(
    async (request: SignInData) => {
      const response = await api.post('/login', request);

      const {user, token} = response.data;

      localStorage.setItem('@QuestionsBank::user', JSON.stringify(user));
      localStorage.setItem('@QuestionsBank::token', token);

      await setData({user, token});

      if(user.level === 1) history.push('/teacher/home');
      if(user.level === 2) history.push('/student/home');
    },
    [history]
  );

   const signOut = useCallback( async () => {
    localStorage.removeItem('@QuestionsBank::user');
    localStorage.removeItem('@QuestionsBank::token');

    await setData({} as AuthData);

    history.push('/');
    
   }, [history]);

   const signUp = useCallback( async (request: SignUpData) => {
    await api.post('signup', request);
    await signIn({cpf: request.cpf, password: request.password});
   }, [signIn]);

  return (
    <AuthContext.Provider value={{
      user: data.user, 
      signIn, 
      signOut, 
      signUp,
      token: data.token
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if(!context)
  throw new Error('useAuth must be used within AuthProvider');
  
  return context;
}

export {AuthProvider, useAuth};