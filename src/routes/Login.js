import React, { Component } from "react"
import IndexLogin from "../components/logins/IndexLogin";
import "../css/reset.css";
import "../css/main.css";

class Login extends Component {
  render() {
		const test = this.props;
		console.log(test.location.name);
		return (
			<IndexLogin />
    )
  }
}

export default Login