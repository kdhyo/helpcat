import React, { Component } from 'react'
import Header from './Header'
import Login from './Login'
import Aside from './Aside'
import Footer from './Footer'
import '../../css/reset.css';
import '../../css/main.css';


class Main extends Component {
  render() {
      return (
        <>
        <Header />
        <Login />
        <Aside />
        <Footer />
    </>
    )
  }
}
  

export default Main