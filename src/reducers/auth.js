import { authActionType } from '../actions';

const initialState = {
  isAuthenticated: false,
  isAuthenticated_state: 'init',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
  case authActionType.TO_INITED_STATE:
    return {
      ...state,
      isAuthenticated_state: 'inited',
      isAuthenticated: payload,
    };
  case authActionType.AUTHENTICATE:
    return {
      ...state,
      isAuthenticated_state: 'authenticating',
      isAuthenticated: payload,
    };
  case authActionType.ON_AUTHENTICATE:
    return {
      ...state,
      isAuthenticated_state: 'authenticated',
      isAuthenticated: payload,
    };
  case authActionType.ON_AUTHENTICATE_FAIL:
    return {
      ...state,
      isAuthenticated_state: 'authenticate_failed',
      isAuthenticated: payload,
    };
  case authActionType.REGISTER:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticated_state: 'registering',
    };
  case authActionType.ON_REGISTER:
    return {
      ...state,
      isAuthenticated: true,
      isAuthenticated_state: 'registered',
    };
  case authActionType.ON_REGISTER_FAILED:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticated_state: 'register_failed',
    };
  case authActionType.LOGIN:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticated_state: 'logining',
    };
  case authActionType.ON_LOGIN:
    return {
      ...state,
      isAuthenticated: true,
      isAuthenticated_state: 'logined',
    };
  case authActionType.ON_LOGIN_FAILED:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticated_state: 'login_failed',
    };
  case authActionType.LOGOUT:
    return {
      ...state,
      isAuthenticated: true,
      isAuthenticated_state: 'logouting',
    };
  case authActionType.ON_LOGOUT:
    return {
      ...state,
      isAuthenticated: true,
      isAuthenticated_state: 'logouted',
    };
  case authActionType.ON_LOGOUT_FAILED:
    return {
      ...state,
      isAuthenticated: true,
      isAuthenticated_state: 'logout_failed',
    };
  case authActionType.ACCOUNT_DELETE:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticated_state: 'acount_deleting',
    };
  case authActionType.ON_ACCOUNT_DELETE:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticated_state: 'acount_deleted',
    };
  case authActionType.ON_ACCOUNT_DELETE_FAILED:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticated_state: 'acount_delete_failed',
    };
  default:
    return state;
  }
};

export default reducer;