import React, { Component } from 'react'
import Header from '../basics/Header';
import Map from './Map';
import Aside from '../basics/Aside';
import PreviewBoard from './PreviewBoard';
import Slider from './Slider';
import Footer from '../basics/Footer';


class IndexMain extends Component {
  render() {
    return (
      <>
        <Header />
        <Map />
        <Aside />
        <PreviewBoard />
        <Slider />
        <Footer />
      </>
    )
  }
}


export default IndexMain