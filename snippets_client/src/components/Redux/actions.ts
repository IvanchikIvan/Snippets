export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_NAME = 'SET_NAME';

export const setAuthStatus = (status: boolean) => ({
  type: SET_AUTH_STATUS,
  payload: status,
});

export const setCsrfToken = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUsername = (name: string) => ({
  type: SET_NAME,
  payload: name,
});