import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthenticate } from '../actions/auth';
import CSRFToken from '../components/auth/CSRFToken';

function PrivateRoute () {
  const [csrfToken, setCsrfToken] = useState('');

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const isAuthenticated_state = useSelector(
    (state) => state.auth.isAuthenticated_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated === 'init') {
      fetchToken();
      dispatch(checkAuthenticate(csrfToken));
    }
  }, [isAuthenticated_state, dispatch]);

  async function fetchToken() {
    let token = CSRFToken();
    setCsrfToken(token);
  }

  if (isAuthenticated !== 'init') {
    return isAuthenticated === true ? <Outlet /> : <Navigate to='/login' />;
  }
}

export default PrivateRoute;
