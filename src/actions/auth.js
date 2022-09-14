export const authActionType = {
  TO_INITED_STATE: 'To Inited State',
  AUTHENTICATE: 'Authenticate',
  ON_AUTHENTICATE: 'On Authenticate',
  ON_AUTHENTICATE_FAIL: 'On Authenticate Failed',
  REGISTER: 'Register',
  ON_REGISTER: 'On Register',
  ON_REGISTER_FAIL: 'On Register Failed',
  LOGIN: 'Login',
  ON_LOGIN: 'On Login',
  ON_LOGIN_FAIL: 'On Login Failed',
  LOGOUT: 'Logout',
  ON_LOGOUT: 'On Logout',
  ON_LOGOUT_FAIL: 'On Logout Failed',
  ACCOUNT_DELETE: 'Account Delete',
  ON_ACCOUNT_DELETE: 'On Account Delete',
  ON_ACCOUNT_DELETE_FAIL: 'On Account Delete Failed',
};

export const toAuthInitedState = () => {
  return {
    type: authActionType.TO_INITED_STATE,
  };
};

export const checkAuthenticate = (payload) => {
  return {
    type: authActionType.AUTHENTICATE,
    payload,
  };
};

export const onCheckAuthenticate = (payload) => {
  return {
    type: authActionType.ON_AUTHENTICATE,
    payload,
  };
};

export const onCheckAuthenticateFail = (error) => {
  return {
    type: authActionType.ON_AUTHENTICATE_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};

export const register = (payload) => {
  return {
    type: authActionType.REGISTER,
    payload,
  };
};

export const onRegister = () => {
  return {
    type: authActionType.ON_REGISTER,
  };
};

export const onRegisterFail = (error) => {
  return {
    type: authActionType.ON_REGISTER_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};

export const login = (payload) => {
  return {
    type: authActionType.LOGIN,
    payload,
  };
};

export const onLogin = () => {
  return {
    type: authActionType.ON_LOGIN,
  };
};

export const onLoginFail = (error) => {
  return {
    type: authActionType.ON_LOGIN_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};

export const logout = (payload) => {
  return {
    type: authActionType.LOGOUT,
    payload,
  };
};

export const onLogout = () => {
  return {
    type: authActionType.ON_LOGOUT,
  };
};

export const onLogoutFail = (error) => {
  return {
    type: authActionType.ON_LOGOUT_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};

export const deleteAccount = (payload) => {
  return {
    type: authActionType.DELETE_ACCOUNT,
    payload,
  };
};

export const onDeleteAccount = () => {
  return {
    type: authActionType.ON_DELETE_ACCOUNT,
  };
};

export const onDeleteAccountFail = (error) => {
  return {
    type: authActionType.ON_DELETE_ACCOUNT_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};
