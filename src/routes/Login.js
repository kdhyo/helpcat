import React, { Component } from "react"
import { Route } from "react-router-dom"
import IndexLogin from "../components/logins/IndexLogin";
import "../css/reset.css";
import "../css/main.css";

class Login extends Component {
  render() {
		return (
			<Route component={IndexLogin} />
    )
  }
}

export default Login