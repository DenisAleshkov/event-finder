import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./../constants";
import { USER } from "./../api/index";
import store from "./../store";
const state = store.getState();

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const loginError = (payload) => ({ type: LOGIN_ERROR, payload });
export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});
export const registerError = (payload) => ({ type: REGISTER_ERROR, payload });

export const Register = (credentials) => (dispatch) => {
  axios
    .post(USER.REGISTER(), credentials)
    .then((data) => {})
    .catch((error) => {
      console.log("error", error.response);
    });
};

export const Login = (credentials) => (dispatch) => {
  axios
    .post(USER.LOGIN(), credentials)
    .then((data) => {
      dispatch(loginSuccess({ credentials, token: data.data.token }));
    })
    .catch((error) => {
      dispatch(loginError(error.response.data.message));
    });
};

export const Auth = (token) => (dispatch) => {
  const token = state.AuthReducer.token;
  axios
    .get(USER.AUTH(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
