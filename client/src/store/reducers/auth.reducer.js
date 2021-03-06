import { LOGIN_SUCCESS, LOGIN_ERROR } from "./../constants";

const initialState = {
  isAuth: false,
  email: "",
  token: "",
  error: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        email: action.payload.credentials.email,
        password: action.payload.credentials.password,
        token: action.payload.token,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
