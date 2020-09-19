import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $userName: String!,
    $nickName: String!, $gender: String!, $phone: String!, $address: String!, $birh: String!) {
    signup(email: $email, password: $password, userName: $userName, nickName: $nickName,
      gender: $gender, phone:$phone, address: $address, birh: $birh) {
      token
    }
  }
`;

class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    nickName: "",
    gender: "",
    phone: "",
    address: "",
    birh: ""
  };
  render() {
    const { email, password, userName, nickName, gender, phone, address, birh } = this.state;
    return (
      <>
        <div className="signup">
          회원가입
          <form className="signupform">
          <div className="email">
              이메일
              <input
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                type="text"
                placeholder="ex)123@gmail.com"
              />
            </div>
            <div className="nickName">
              닉네임
              <input
                value={nickName}
                onChange={(e) => this.setState({ nickName: e.target.value })}
                type="text"
                placeholder="닉네임을 입력하세요"
              />
            </div>
            <div className="userName">
              이름
              <input
                value={userName}
                onChange={(e) => this.setState({ userName: e.target.value })}
                type="text"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="password">
              비밀번호
              <input
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div className="passwordcheck">
              비밀번호 확인
              <input
                type="password"
                placeholder="비밀번호를 재입력하세요"
              ></input>
            </div>
            <div className="gender">
              성별
              <input
                value={gender}
                onChange={(e) => this.setState({ gender: e.target.value })}
                type="text"
                placeholder="ex) 남자, 여자"
              />
            </div>
            <div className="birth">
              생년월일
              <input
                value={birh}
                onChange={(e) => this.setState({ birh: e.target.value })}
                type="text"
                placeholder="ex)2000-01-01"
              />
            </div>
            <div className="phone">
              전화번호
              <input
                value={phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
                type="text"
                placeholder="ex)12345678"
              />
            </div>
            <div className="address">
              주소
              <input
                value={address}
                onChange={(e) => this.setState({ address: e.target.value })}
                type="text"
                placeholder="ex)경기도 안양시 동안구 임곡로 29, 전산관 5층"
              />
            </div>

            <div>
              <Mutation
                mutation={SIGNUP_MUTATION}
                variables={{ email, password, userName, nickName, gender, phone, address, birh }}
                onCompleted={(data) => this._confirm(data)}
              >
                {(mutation) => (
                  <div className="submit" onClick={mutation}>
                    가입
                  </div>
                )}
              </Mutation>
            </div>
            <Link to="/login">
              <div type="reset" className="reset">
                취소
              </div>
            </Link>
          </form>
        </div>
      </>
    );
  }
  _confirm = async (data) => {
    const { token } = data.signup;
    this._saveUserData(token);
    this.props.history.push(`/`);
  };

  _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default SignupPage;
