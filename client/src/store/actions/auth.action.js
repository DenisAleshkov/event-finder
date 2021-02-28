import axios from "axios";
import {} from "./../constants";
import { USER } from "./../api/index";

export const Register = (credentials) => (dispatch) => {
  axios
    .post(USER.REGISTER(), credentials)
    .then((data) => {
      console.log("data", data);
    })
    .catch((error) => {
      console.log("error", error.response);
    });
};

export const Login = (credentials) => (dispatch) => {
    axios
      .post(USER.LOGIN(), credentials)
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
