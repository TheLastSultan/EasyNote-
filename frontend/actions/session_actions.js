import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const recieveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

// const logoutCurrentUser = () => ({
//   type: LOGOUT_CURRENT_USER,
//   currentUser: null,
// });

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});


export const signup = (formUser) => dispatch => (
  SessionUtil.signup(formUser).then(
    user => {dispatch(recieveCurrentUser(user));
             dispatch(receiveErrors(null));},
    errors => dispatch(receiveErrors(errors))
  )
);

export const login = (formUser) => dispatch => (
  SessionUtil.login(formUser).then(
    user => {dispatch(recieveCurrentUser(user));
             dispatch(receiveErrors(null));},
    errors => dispatch(receiveErrors(errors))
  )
);

export const logout = () => dispatch => (
  SessionUtil.logout().then(
    () => dispatch(recieveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors))
  )
);
