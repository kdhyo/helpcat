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
import BoardUpdate from "./components/board/BoardUpdate"
import IndexUsers from "./components/Users/IndexUsers"
import ReviewWrite from "./components/reviews/ReviewWrite"

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route path="/board" exact={true} component={Board} />
        <Route path="/board/:id" exact={true} component={BoardDetail} />
        <Route path="/board/update/:id" exact={true} component={BoardUpdate} />
        <Route path="/write" exact={true} component={Write} />
        <Route path="/validateEmail" exact={true} component={ValidateEmail} />
        <Route path="/userInfor" component={IndexUsers} />
        <Route path="/reviewWrite" component={ReviewWrite} />
      </>
    )
  }
}

export default App