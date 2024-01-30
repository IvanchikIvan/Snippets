import { SET_AUTH_STATUS, SET_TOKEN } from './actions';

const initialState = {
  authStatus: false,
  csrfToken: null,
};



const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload,
      };
    case SET_TOKEN:
        return {
          ...state,
          csrfToken: action.payload,
        };
      default:
        return state;
  }
};


export default rootReducer;