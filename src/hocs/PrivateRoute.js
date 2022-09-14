import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => (
  isAuthenticated ? <Outlet /> : <Navigate to='/login' />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(PrivateRoute);
