import React, { Component } from "react"
import { Route } from "react-router-dom"
import LoginPage from "./LoginPage";
import Footer from "../basics/Footer";
import Aside from "../basics/Aside";



class IndexLogin extends Component {
  render() {
		return (
      <>
				<Route component={LoginPage} />
				<Aside />
				<Footer />
			</>
    )
  }
}

export default IndexLogin