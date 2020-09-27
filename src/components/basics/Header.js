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
              <div className="">
                {authToken ? (
                <>
              <img className="loginpng3" src="./dropbutton.png" title="메뉴"></img>
                  <Link to={{pathname:"/login"}}><ul><img className="loginpng2" src="./message.png" title="메시지"></img></ul></Link>
                  <Link to="/"><ul><img className="loginpng2" src="./alarm.png" title="알람"></img></ul></Link>
                  <ul
                   
                    onClick={() => {
                      localStorage.removeItem(AUTH_TOKEN);
                      this.props.history.push(`/`);
                    }}
                  >
                    <img className="loginpng2" src="./logout.png" title="로그아웃"></img>
                  </ul>
                  <Link to="/userUpdate"><ul><img className="loginpng2" src="./user.png" title="회원수정"></img></ul></Link>
                  <Mutation
                    mutation={USER_REMOVE_MUTATION}
                    onCompleted={() => this._userDelete()}
                  >
                    {(mutation) => (
                      <ul
                        onClick={mutation}
                      >
                        <img className="loginpng2" src="./userX.png" title="회원탈퇴"></img>
                      </ul>
                    )}
                  </Mutation>
                </>
                ) : (
                  <Link to="/login">
                    <img className="loginpng4" src="./login.png" title="로그인"></img>
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