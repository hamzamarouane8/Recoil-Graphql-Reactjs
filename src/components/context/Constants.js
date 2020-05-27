export const LOGOUT_URI = '/logout';
export const LOGIN_URI = '/login';
export const HOME_URI = '/dashboard';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (payload) => ({ type: LOGIN, payload });
export const logoutAction = (payload) => ({ type: LOGOUT, payload });
