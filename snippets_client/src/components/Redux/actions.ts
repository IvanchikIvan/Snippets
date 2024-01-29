export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

export const setAuthStatus = (status: boolean) => ({
  type: SET_AUTH_STATUS,
  payload: status,
});