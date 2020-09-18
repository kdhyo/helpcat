import React, { Component } from "react"
import BoardPage from "./BoardPage"
import Aside from "../basics/Aside"
import Footer from "../basics/Footer"



class IndexBoard extends Component {
  render() {
      return (
        <>
        <BoardPage />
        <Aside />
        <Footer />
    </>
    )
  }
}

export default IndexBoard