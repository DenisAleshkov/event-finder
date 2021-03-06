import React from "react"
import Login from "./view/Login/Login"
import Home from "./view/Home/Home"
import Register from "./view/Register/Register"
import {useSelector, useDispatch} from "react-redux"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
