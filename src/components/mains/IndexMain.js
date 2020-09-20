import React, { Component } from "react"
import { Route } from "react-router-dom"

import Aside from "../basics/Aside";
import PreviewBoard from "./PreviewBoard";
import Slider from "./Slider";
import Footer from "../basics/Footer";
import MapMain from "./MapMain";

class IndexMain extends Component {
  render() {
    return (
      <>
        <Route component={MapMain} />
        <Aside />
        <PreviewBoard />
        <Slider />
        <Footer />
      </>
    )
  }
}


export default IndexMain