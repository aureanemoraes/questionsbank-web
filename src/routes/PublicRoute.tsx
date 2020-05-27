import React from 'react';
import {RouteProps, Route, Redirect} from 'react-router-dom';
import {useAuth} from '../hooks/AuthContext';

const PublicRoute: React.FC<RouteProps> = (props) => {
    const {user} = useAuth();

    if(!user) return <Route {...props} />
    
    return user.level === 1 ? 
            <Redirect to="/teacher/home"/> : 
            <Redirect to="/student/home"/>
  }

export default PublicRoute;