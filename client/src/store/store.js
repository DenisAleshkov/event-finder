import AuthReducer from "./reducers/auth.reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  AuthReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
