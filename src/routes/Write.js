import React, { Component } from "react"
import { Route } from "react-router-dom"
import IndexWrite from "../components/board/IndexWrite";
import "../css/reset.css";
import "../css/main.css";


class Write extends Component {
  render() {
    return (
      <Route component={IndexWrite} />
    )
  }
}

export default Write