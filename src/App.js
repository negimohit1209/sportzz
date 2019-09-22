import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

const route = (
  <Switch>
    <Route path="/" component={Homepage} exact></Route>
    <Route path="/login" component={LoginPage}></Route>
    <Route path="/signup" component={SignupPage}></Route>
    <Redirect to="/"></Redirect>
  </Switch>
);
class App extends Component {
  render() {
    return <div className="App">{route}</div>;
  }
}

export default App;
