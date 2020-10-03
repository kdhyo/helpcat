import React, { Component } from "react"
import Aside from "../basics/Aside";
import Footer from "../basics/Footer";
import MessageMain from "./MessageMain"


class IndexMessage extends Component {
  render() {
    return (
      <>
        <Aside />
        <MessageMain />
        <Footer />
      </>
    )
  }
}

export default IndexMessage