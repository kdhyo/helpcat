import React, { Component } from "react"
import Map from "./Map";
import Aside from "../basics/Aside";
import PreviewBoard from "./PreviewBoard";
import Slider from "./Slider";
import Footer from "../basics/Footer";

class IndexMain extends Component {
  render() {
    return (
      <>
        <Map lat={37.403517} lng={126.930044}/>
        <Aside />
        <PreviewBoard />
        <Slider />
        <Footer />
      </>
    )
  }
}


export default IndexMain