import React, { Component } from "react"
import Aside from "../basics/Aside";
import Footer from "../basics/Footer";
import UserInformation from "./UserInformation";



class IndexUsers extends Component {
  render() {
    return (
      <>
        <UserInformation />
        <Aside />
        <Footer />
      </>
    )
  }
}


export default IndexUsers