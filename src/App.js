import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Main from "./routes/Main"
import Board from "./routes/Board"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import CreateLink from "./components/links/CreateLink"
import LinkList from "./components/links/LinkList"
import AllLink from "./components/AllLink"
import LoginTest from "./components/logins/LoginTest"


class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact={true} component={Main} />
        <AllLink />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route path="/board" exact={true} component={Board} />
        <Route path="/create" exact={true} component={CreateLink} />
        <Route path="/link" exact={true} component={LinkList} />
        <Route path="/logintest" exact={true} component={LoginTest} />
      </>
    )
  }
}

export default App