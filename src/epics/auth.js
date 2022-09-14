import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import Cookies from 'js-cookie';

import {
  authActionType,
  onRegister,
  onRegisterFail,
  onLogin,
  onLoginFail,
  onLogout,
  onLogoutFail,
  onCheckAuthenticate,
  onCheckAuthenticateFail,
  onDeleteAccount,
  onDeleteAccountFail,
} from '../actions';

const apiUrl = '/api/';
const coreUrl = `${apiUrl}core/`;

export const CheckAuthenticateEpic = (action$) =>
  action$.pipe(
    ofType(authActionType.AUTHENTICATE),
    mergeMap((action) => {
      return ajax({
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        url: `${coreUrl}session`
      }).pipe(
        map((res) => onCheckAuthenticate(res)),
        catchError((error) => of(onCheckAuthenticateFail(error)))
      );
    })
  );

// action.payload = JSON.stringify({ username, password }
export const LoginEpic = (action$) =>
  action$.pipe(
    ofType(authActionType.LOGIN),
    mergeMap((action) => {
      return ajax({
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken')
        },
        url: `${coreUrl}login`
      }, action.payload).pipe(
        map((res) => onLogin(res)),
        catchError((error) => of(onLoginFail(error)))
      );
    })
  );

// const action.payload = JSON.stringify({ 'withCredentials': true });
export const LogoutEpic = (action$) =>
  action$.pipe(
    ofType(authActionType.LOGOUT),
    mergeMap((action) => {
      return ajax({
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken')
        },
        url: `${coreUrl}logout`
      }, action.payload).pipe(
        map((res) => onLogout(res)),
        catchError((error) => of(onLogoutFail(error)))
      );
    })
  );

// const action.payload = JSON.stringify({ username, password, re_password });
export const RegisterEpic = (action$) =>
  action$.pipe(
    ofType(authActionType.REGISTER),
    mergeMap((action) => {
      return ajax({
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken')
        },
        url: `${coreUrl}register`
      }, action.payload).pipe(
        map((res) => onRegister(res)),
        catchError((error) => of(onRegisterFail(error)))
      );
    })
  );

// const action.payload = JSON.stringify({ 'withCredentials': true });
export const DeleteAccountEpic = (action$) =>
  action$.pipe(
    ofType(authActionType.ACCOUNT_DELETE),
    mergeMap((action) => {
      return ajax({
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken')
        },
        url: `${coreUrl}delete-account`
      }, action.payload).pipe(
        map((res) => onDeleteAccount(res)),
        catchError((error) => of(onDeleteAccountFail(error)))
      );
    })
  );

export default combineEpics(
  CheckAuthenticateEpic,
  LoginEpic,
  LogoutEpic,
  RegisterEpic,
  DeleteAccountEpic
);
