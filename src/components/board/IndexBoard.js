import React, { Component } from "react"
import { Route } from "react-router-dom"
import BoardPage from "./BoardPage"
import Aside from "../basics/Aside"
import Footer from "../basics/Footer"



class IndexBoard extends Component {
  render() {
      return (
        <>
        <Route component={BoardPage} />
        <Aside />
        <Footer />
    </>
    )
  }
}

export default IndexBoard