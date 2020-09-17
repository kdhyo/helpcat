import React, { Component } from "react"
import Header from "../basics/Header"
import BoardPage from "./BoardPage"
import Aside from "../basics/Aside"
import Footer from "../basics/Footer"



class IndexBoard extends Component {
  render() {
      return (
        <>
        <Header />
        <BoardPage />
        <Aside />
        <Footer />
    </>
    )
  }
}

export default IndexBoard