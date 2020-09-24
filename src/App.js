import React, { Component } from "react"
import { Route } from "react-router-dom"
import Main from "./routes/Main"
import Board from "./routes/Board"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import Write from "./routes/Write"
import CreateLink from "./components/links/CreateLink"
import LinkList from "./components/links/LinkList"
import LoginTest from "./components/logins/LoginTest"
import Header from "./components/basics/Header"

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route path="/board" exact={true} component={Board} />
        <Route path="/create" exact={true} component={CreateLink} />
        <Route path="/link" exact={true} component={LinkList} />
        <Route path="/logintest" exact={true} component={LoginTest} />
        <Route path="/Write" exact={true} component={Write} />
      </>
    )
  }
}

export default App