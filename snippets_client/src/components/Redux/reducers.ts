import { SET_AUTH_STATUS, SET_NAME, SET_CSRF_TOKEN } from "./actions";

const initialState = {
  authStatus: localStorage.getItem("authStatus") || false,
  csrfToken: null,
  name: localStorage.getItem("username") || null,
  userID: localStorage.getItem("userID") || null,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_CSRF_TOKEN:
      return {
        ...state,
        csrfToken: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
