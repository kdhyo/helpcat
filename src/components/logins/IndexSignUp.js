import React, { Component } from 'react'
import Header from '../basics/Header'
import SignupPage from './SignupPage'
import Aside from '../basics/Aside'
import Footer from '../basics/Footer'



class IndexSignUp extends Component {
  render() {
      return (
        <>
        <Header />
        <SignupPage />
        <Aside />
        <Footer />
    </>
    )
  }
}

export default IndexSignUp