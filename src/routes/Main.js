import React, { Component } from "react"
import { Route } from "react-router-dom"
import IndexMain from "../components/mains/IndexMain";
import "../css/reset.css";
import "../css/main.css";

class Main extends Component {
  render() {
    return (
      <Route component={IndexMain} />
    )
  }
}


export default Main