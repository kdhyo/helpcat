import React, { Component } from "react"
import Aside from "../basics/Aside";
import Footer from "../basics/Footer";
import UserInformation from "./UserInformation";



class IndexUsers extends Component {
  render() {
    console.log(this.props)
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