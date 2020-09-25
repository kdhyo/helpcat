import React, { Component } from "react"
import { Route } from "react-router-dom"
import Main from "./routes/Main"
import Board from "./routes/Board"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import Write from "./routes/Write"
import Header from "./components/basics/Header"
import UserUpdate from "./routes/UserUpdate"
import ValidateEmail from "./components/mains/ValidateEmail"

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route path="/update" exact={true} component={UserUpdate} />
        <Route path="/board" exact={true} component={Board} />
        <Route path="/Write" exact={true} component={Write} />
        <Route path="/validateEmail" exact={true} component={ValidateEmail} />
      </>
    )
  }
}

export default App