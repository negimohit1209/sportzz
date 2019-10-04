import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import "./App.css";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";

const route = (
  <Switch>
    <Route path="/" component={Homepage} exact></Route>
    <Route path="/login" component={LoginPage}></Route>
    <Route path="/signup" component={SignupPage}></Route>
    <Route path="/dashboard" component={DashboardPage}></Route>
    <Redirect to="/"></Redirect>
  </Switch>
);
class App extends Component {
  render() {
    return <div className="App">{route}</div>;
  }
}

export default App;
