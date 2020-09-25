import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(userid: $email, password: $password) {
      token
    }
  }
`;

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    name: "",
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <>
        <div className="login">
          {/* Help Cat */}
          <div className="loginform">
          <img alt="로그인" className="nomargin" src="logincat.png" width="80px"></img>
            <div className="loginInput">
              <div className="loginID">
                <input
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="text"
                  placeholder="&nbsp;아이디를 입력하세요"
                />
              </div>
              <div className="loginPW">
                <input
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="&nbsp;비밀번호를 입력하세요"
                />
              </div>
              <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, password, name }}
                onCompleted={(data) => this._confirm(data)}
              >
                {(mutation) => (
                  <button className="signButton" onClick={mutation}>
                    로그인
                  </button>
                )}
              </Mutation>
            </div>
            <div className="miniID">
              <div className="newID">
                <Link to="/signup">회원가입</Link>
              </div>&nbsp;/&nbsp;
              <div className="findID">ID찾기</div>
            </div>
            <div className="GroupSNS">
              <div className="GoogleID"><img alt="googlelogo" src="googlelogo.png" width="100px"></img></div>
              <div className="NaverID"><img alt="naverlogo" src="naverlogo.svg" width="100px"></img></div>
              <div className="FacebookID"><img alt="facebooklogo" src="facebooklogo.png" width="100px"></img></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  _confirm = async data => {
    const { token } = data.login
      this._saveUserData(token)
      this.props.history.push(`/`)
  };

  _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default LoginPage;
