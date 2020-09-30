import React, { Component } from "react"
import { Route } from "react-router-dom"
import Main from "./routes/Main"
import Board from "./routes/Board"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import Write from "./routes/Write"
import Header from "./components/basics/Header"
import ValidateEmail from "./components/mains/ValidateEmail"
import BoardDetail from "./components/board/BoardDetail"
import IndexUpdate from "./components/logins/IndexUpdate"
import BoardUpdate from "./components/board/BoardUpdate"
import Testtt from "./components/board/Testtt"

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Route path="/" exact={true} component={Main} />
        <Route path="/testtt" exact={true} component={Testtt} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route path="/userUpdate" exact={true} component={IndexUpdate} />
        <Route path="/board" exact={true} component={Board} />
        <Route path="/board/:id" exact={true} component={BoardDetail} />
        <Route path="/board/update/:id" exact={true} component={BoardUpdate} />
        <Route path="/write" exact={true} component={Write} />
        <Route path="/validateEmail" exact={true} component={ValidateEmail} />

      </>
    )
  }
}

export default App