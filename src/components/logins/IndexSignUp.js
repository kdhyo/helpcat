import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignupPage from "./SignupPage";
import Aside from "../basics/Aside";
import Footer from "../basics/Footer";

class IndexSignUp extends Component {
  render() {
    return (
      <>
        <Route component={SignupPage} />
        <Aside />
        <Footer />
      </>
    );
  }
}

export default IndexSignUp;
