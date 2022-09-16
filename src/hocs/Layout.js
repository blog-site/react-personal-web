import React, { useEffect, Fragment } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticate } from '../actions/auth';

const Layout = ({ children, checkAuthenticate }) => {
  useEffect(() => {
    checkAuthenticate();
  }, []);

  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default connect(null, { checkAuthenticate })(Layout);