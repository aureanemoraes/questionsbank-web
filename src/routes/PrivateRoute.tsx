import React from 'react';
import {RouteProps, Route, Redirect} from 'react-router-dom';
import {useAuth} from '../hooks/AuthContext';


interface PrivateRouteProps extends RouteProps {
  userLevel?:  1 | 2;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({userLevel = 2, ...props})=> {
  const {user} = useAuth();

  if(!user) return <Redirect to="/"/>

  return user.level === userLevel ?
          <Route {...props}/> :
          <Redirect to="/"/>;
}

export default PrivateRoute;