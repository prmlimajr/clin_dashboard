import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import PatientDetail from '../pages/Dashboard/PatientDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/register' component={SignUp} />
        <PrivateRoute path='/main' component={Dashboard} />
        <PrivateRoute path='/patient/:id' component={PatientDetail} />
      </Switch>
    </BrowserRouter>
  );
}
