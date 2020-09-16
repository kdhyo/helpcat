import React, { Component } from 'react'
import '../../css/reset.css';
import '../../css/main.css';



class Login extends Component {
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
          <div class="miniID">
            <div class="newID">Sign Up</div>&nbsp;/&nbsp;
            <div class="findID">Find ID</div>
          </div>
          <span>SNS</span>
            <div className="GroupSNS">
              <div class="NaverID">Naver</div>
              <div class="KakaoID">Kakao</div>
              <div class="FacebookID">Facebook</div>
            </div>  
        </div>
      </div>
    </>
    )
  }
}
  

export default Login