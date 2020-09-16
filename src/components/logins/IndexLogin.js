import React, { Component } from "react"
import LoginPage from "./LoginPage";
import Header from "../basics/Header";
import Footer from "../basics/Footer";
import Aside from "../basics/Aside";



class IndexLogin extends Component {
  render() {
		return (
      <>
				<Header />
				<LoginPage />
				<Aside />
				<Footer />
			</>
    )
  }
}

export default IndexLogin