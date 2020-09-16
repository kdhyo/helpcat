import React, { Component } from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Main from "./routes/Main"
import Board from "./routes/Board"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route path="/board" exact={true} component={Board} />
      </BrowserRouter>
    )
  }
}

export default App