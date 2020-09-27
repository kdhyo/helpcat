import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
  mutation signup($email: Email!, $password: String!, $userName: String!,
    $nickName: String!, $gender: String!, $phone: String!, $address: String!, $birh: String!) {
    signup(email: $email, password: $password, userName: $userName, nickName: $nickName,
      gender: $gender, phone:$phone, address: $address, birh: $birh)
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
          <form className="signupform">
          <img alt="회원가입" className="nomargin" src="signupcat.png" width="80px"></img>
          <div className="email">
              <input className="signupinput1"
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                type="text"
                placeholder="ex)123@gmail.com"
              />
            </div>
            <div className="nickName">
              <input
                value={nickName}
                onChange={(e) => this.setState({ nickName: e.target.value })}
                type="text"
                placeholder="닉네임을 입력하세요"
              />
            </div>
            <div className="userName">
              <input
                value={userName}
                onChange={(e) => this.setState({ userName: e.target.value })}
                type="text"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="password">
              <input
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div className="passwordcheck">
              <input
                type="password"
                placeholder="비밀번호를 재입력하세요"
              ></input>
            </div>
            <div className="gender">
              <input
                value={gender}
                onChange={(e) => this.setState({ gender: e.target.value })}
                type="text"
                placeholder="ex) 남자, 여자"
              />
            </div>
            <div className="birth">
              <input
                value={birh}
                onChange={(e) => this.setState({ birh: e.target.value })}
                type="text"
                placeholder="ex)2000-01-01"
              />
            </div>
            <div className="phone">
              <input
                value={phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
                type="text"
                placeholder="ex)12345678"
              />
            </div>
            <div className="address">
              <input
                value={address}
                onChange={(e) => this.setState({ address: e.target.value })}
                type="text"
                placeholder="ex)경기도 안양시 동안구 임곡로 29, 전산관 5층"
              />
            </div>
              <Mutation
                mutation={SIGNUP_MUTATION}
                variables={{ email, password, userName, nickName, gender, phone, address, birh }}

              >
                {(mutation) => (
                  <Link to="/">
                    <button className="submit" onClick={mutation}>제출</button>
                  </Link>
                )}
              </Mutation>
            <Link to="/login">
              <button type="reset" className="reset">초기화</button>
            </Link>
          </form>
        </div>
      </>
    );
  }
  _confirm = async () => {
    this.props.history.push('/');
  };

}

export default SignupPage;
