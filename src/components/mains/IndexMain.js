import React, { Component } from "react"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"

import Map from "./Map";
import Aside from "../basics/Aside";
import PreviewBoard from "./PreviewBoard";
import Slider from "./Slider";
import Footer from "../basics/Footer";

class IndexMain extends Component {
  render() {
    return (
      <>
        <Route component={Map} />
        <Aside />
        <PreviewBoard />
        <Slider />
        <Footer />
      </>
    )
  }
}


export default IndexMain