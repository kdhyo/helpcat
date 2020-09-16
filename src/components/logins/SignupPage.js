import React, { Component } from "react"


class SignupPage extends Component {
  render() {
      return (
        <>
      <div className="signup">Sign Up
        <div className="signupform">
            <div className="userName">userName<input></input></div>
            <div className="password">password<input></input></div>
            <div className="nickName">nickName<input></input></div>
            <div className="gender">gender<input type="radio"></input><input type="radio"></input></div>
            <div className="birh">birh<input></input></div>
            <div className="email">email<input></input></div>
            <div className="phone">phone<input></input></div>
            <div className="address">address<input></input></div>
            <button className="submit">Submit</button>
            <button className="reset">Reset</button>
        </div>
      </div>
    </>
    )
  }
}

export default SignupPage