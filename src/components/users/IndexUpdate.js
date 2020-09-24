import React, { Component } from "react"
import { Route } from "react-router-dom"
import Aside from "../basics/Aside";
import Footer from "../basics/Footer";
import UserUpdatePage from "./UserUpdatePage";

class IndexUpdate extends Component {
  render() {
    return (
      <>
        <Route component={UserUpdatePage} />
        <Aside />
        <Footer />
      </>
    )
  }
}


export default IndexUpdate