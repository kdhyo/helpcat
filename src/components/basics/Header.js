import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router";
import { AUTH_TOKEN } from '../../constants'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const USER_REMOVE_MUTATION = gql`
  mutation UserRemoveMutaion{
    removeUser
  }
`;

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <>
        <header>
          <nav>
          <Link to={{pathname:"/"}}><img className="logopng" alt="Home" src="logo.png"/></Link>
            <li>
              <div className="flex flex-fixed">
                {authToken ? (
                <>
                  <Link to={{pathname:"/login"}}><ul>메세지</ul></Link>
                  <Link to="/"><ul>알람</ul></Link>
                  <ul
                    className="ml1 pointer black"
                    onClick={() => {
                      localStorage.removeItem(AUTH_TOKEN);
                      this.props.history.push(`/`);
                    }}
                  >
                    logout
                  </ul>
                  <Mutation
                    mutation={USER_REMOVE_MUTATION}
                    onCompleted={() => this._userDelete()}
                  >
                    {(mutation) => (
                      <ul
                        onClick={mutation}
                      >
                        회원탈퇴
                      </ul>
                    )}
                  </Mutation>
                  <Link to="/userUpdate"><ul>회원수정</ul></Link>
                </>
                ) : (
                  <Link to="/login">
                    <img className="loginpng" src="./login.png" title="로그인" alt="로그인"></img>
                  </Link>
                )}
              </div>
            </li>
          </nav>
        </header>
      </>
    )
  }
  _userDelete = async => {
    localStorage.removeItem(AUTH_TOKEN);
    window.location="/"
  };
}

export default withRouter(Header);