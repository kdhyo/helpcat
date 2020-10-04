import React, { Component } from "react"
import { Route } from "react-router-dom"
import BoardWrite from "./BoardWrite"
import Aside from "../basics/Aside"
import Footer from "../basics/Footer"



class IndexWrite extends Component {
  render() {
    return (
    <>
      <Route component={BoardWrite} />
      <Aside />
      <Footer />
    </>
    )
  }
}

export default IndexWrite