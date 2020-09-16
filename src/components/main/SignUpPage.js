import React, { Component } from 'react'
import Header from './Header'
import Signup from './Signup'
import Aside from './Aside'
import Footer from './Footer'
import '../../css/reset.css';
import '../../css/main.css';


class Main extends Component {
  render() {
      return (
        <>
        <Header />
        <Signup />
        <Aside />
        <Footer />
    </>
    )
  }
}
  

export default Main