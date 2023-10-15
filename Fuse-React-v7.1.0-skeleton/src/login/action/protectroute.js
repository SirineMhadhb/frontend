import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => (<div>Private</div>);

export default withAuthenticationRequired(PrivateRoute, {

  onRedirecting: () => (<div ></div>)
});
