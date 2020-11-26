import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Side';
import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <>
          <Header />
          <Sidebar />
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
