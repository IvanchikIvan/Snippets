import { SET_AUTH_STATUS } from './actions';

const initialState = {
  authStatus: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;