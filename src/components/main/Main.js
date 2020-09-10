import React, { Component } from 'react'
import Header from './Header'
import Map from './Map'
import Board from './Board'
import Slider from './Slider'
import Aside from './Aside'
import Footer from './Footer'
import '../../css/reset.css';
import '../../css/main.css';


class Main extends Component {
  render() {
      return (
        <>
        <Header />
        <Map />
        <Board />
        <Slider />
        <Aside />
        <Footer />
    </>
    )
  }
}
  

export default Main