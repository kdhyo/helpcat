import React, { Component } from "react"
import { Route } from "react-router-dom"
import Aside from "../basics/Aside";
import Footer from "../basics/Footer";
import MessageMain from "./MessageMain"


class IndexMessage extends Component {
  render() {
    return (
      <>
        <Aside />
        <Route component={MessageMain} />
        <Footer />
      </>
    )
  }
}

export default IndexMessage