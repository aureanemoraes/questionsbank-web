import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import TeacherHome from '../pages/TeacherHome';
import StudentHome from '../pages/StudentHome';
import Logout from '../pages/Logout';
import NewQuestion from '../pages/NewQuestion';


import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const Routes: React.FC = () => {

  return (
    <Switch>
      <PublicRoute path="/" exact component={SignIn} />
      <PublicRoute path="/signup" component={SignUp} />
      <PrivateRoute path="/teacher/home" userLevel={1} 
        component={TeacherHome} />
      <PrivateRoute path="/teacher/question/new" userLevel={1} 
        component={NewQuestion} />
      <PrivateRoute path="/student/home" component={StudentHome} />
      <Route path="/logout" component={Logout} />

    </Switch>
  );
}

export default Routes;