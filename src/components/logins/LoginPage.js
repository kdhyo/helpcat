import React, { Component } from "react"
import { Link } from "react-router-dom"




class LoginPage extends Component {
  render() {
      return (
        <>
      <div className="login">Help Cat
        <div className="loginform">회원이신가요?
          <div className="loginInput">
            <div className="loginID">ID<input></input></div>
            <div className="loginPW">PW<input></input></div>
            <button className="signButton">로그인</button>
          </div>
          <div className="miniID">
            <div className="newID"><Link to="/signup">회원가입</Link></div>&nbsp;/&nbsp;
            <div className="findID">ID 찾기</div>
          </div>
          <span>SNS</span>
            <div className="GroupSNS">
              <div className="GoogleID">Google</div>
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