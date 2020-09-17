import React, { Component } from "react"


class SignupPage extends Component {
  render() {
      return (
        <>
      <div className="signup">회원가입
        <form className="signupform">
            <div className="userName">아이디<input placeholder="아이디를 입력하세요"></input></div>
            <div className="password">비밀번호<input type="password" placeholder="비밀번호를 입력하세요"></input></div>
            <div className="passwordcheck">비밀번호 확인<input type="password" placeholder="비밀번호를 재입력하세요"></input></div>
            <div className="nickName">이름<input placeholder="이름을 입력하세요"></input></div>
            <div className="gender">성별<input placeholder="성별을 골라주세요"></input></div>
            <div className="birth">생년월일<input placeholder="생년월일을 골라주세요"></input></div>
            <div className="email">e-mail<input placeholder="e-mail을 입력하세요"></input></div>
            <div className="phone">전화번호<input placeholder="+82 010-0000-0000"></input></div>
            <div className="address">주소<input placeholder="주소를 입력하세요"></input></div>
            <input type="submit" className="submit" value="&nbsp;&nbsp;&nbsp;가입"></input>
            <input type="reset" className="reset" value="&nbsp;&nbsp;&nbsp;취소"></input>
      </form>
    </div>
    </>
    )
  }
}

export default SignupPage