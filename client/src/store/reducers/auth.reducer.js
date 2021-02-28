import {} from "./../constants";

const initialState = {
  isAuth: false,
  email: "",
  uid: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AuthReducer;
