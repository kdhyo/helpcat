import React, { Component } from 'react'
import { Link } from 'react-router-dom'




class LoginPage extends Component {
  render() {
      return (
        <>
      <div className="login">Log in
        <div className="loginform">Help Cat
          <div className="loginInput">
            <div className="loginID">ID<input></input></div>
            <div className="loginPW">PW<input></input></div>
            <button className="signButton">Log In</button>
          </div>
          <div className="miniID">
            <div className="newID"><Link to="/signup">Sign Up</Link></div>&nbsp;/&nbsp;
            <div className="findID">Find ID</div>
          </div>
          <span>SNS</span>
            <div className="GroupSNS">
              <div className="NaverID">Naver</div>
              <div className="KakaoID">Kakao</div>
              <div className="FacebookID">Facebook</div>
            </div>
        </div>
      </div>
    </>
    )
  }
}

export default LoginPage