import React, { Component } from "react"
import { Route } from "react-router-dom"
import "../css/reset.css";
import "../css/main.css";
import IndexUpdate from "../components/users/IndexUpdate";


class UserUpdate extends Component {
  render() {
    return (
      <Route component={IndexUpdate} />
    )
  }
}

export default UserUpdate