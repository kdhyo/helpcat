import React, { Component } from "react"
import { Route } from "react-router-dom"
import WritePage from "./WritePage"
import Aside from "../basics/Aside"
import Footer from "../basics/Footer"



class IndexWrite extends Component {
  render() {
      return (
        <>
        <Route component={WritePage} />
        <Aside />
        <Footer />
    </>
    )
  }
}

export default IndexWrite