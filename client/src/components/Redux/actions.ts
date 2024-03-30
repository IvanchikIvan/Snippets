export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
export const SET_CSRF_TOKEN = 'SET_CSRF_TOKEN';
export const SET_NAME = 'SET_NAME';
export const SET_USERID = 'SET_USERID';

export const setAuthStatus = (status: boolean) => ({
  type: SET_AUTH_STATUS,
  payload: status,
});

export const setCsrfToken = (token: string) => ({
  type: SET_CSRF_TOKEN,
  payload: token,
});

export const setUsername = (name: string) => ({
  type: SET_NAME,
  payload: name,
});

export const setUserID = (id: number) => ({
  type: SET_USERID,
  payload: id,
});