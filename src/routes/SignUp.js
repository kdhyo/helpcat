import React, { Component } from "react"
import { Route } from "react-router-dom"
import IndexSignUp from "../components/logins/IndexSignUp";
import "../css/reset.css";
import "../css/main.css";


class SignUp extends Component {
  render() {
    return (
      <Route component={IndexSignUp} />
    )
  }
}

export default SignUp