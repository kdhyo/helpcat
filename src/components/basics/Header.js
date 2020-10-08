import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router";
import { AUTH_TOKEN } from '../../constants'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const USER_DATA_QUERY = gql`
  query {
    me {
      id
      email
      userName
      nickName
    }
  }
`;

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <>
        <Query query={USER_DATA_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <>
                </>
              );
            if (error){
              return(
              <>
                <header>
                  <nav>
                  <div className="helpcatlogomain">
                    <Link to={{pathname:"/"}}><img className="logopng" alt="Home" src="/logo.png"/></Link>
                  </div>
                    <li>
                      <div className="">
                        {authToken ? (
                        <>
                          <ul
                            onClick={() => {
                              localStorage.removeItem(AUTH_TOKEN);
                              window.location.href="/";
                            }}
                          >
                            <span className="loginpng2">로그아웃</span>
                          </ul>

                        </>
                        ) : (
                          <Link to="/login">
                            <span className="loginpng4">로그인</span>
                          </Link>
                        )}
                      </div>
                    </li>
                  </nav>
                </header>
              </>
              )
              }
            if(data){
              return(
              <header>
                <nav>
                <div className="helpcatlogomain">
                  <Link to={{pathname:"/"}}><img className="logopng" alt="Home" src="logo.png"/></Link>
                </div>
                  <li>
                    <div className="">
                      {authToken ? (
                      <>
                        <div className="welcome">환영합니다 <span className="welcomenick">{data.me.nickName}</span>님</div>
                        <ul
                          onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN);
                            window.location.href="/";
                          }}
                        >
                          <span className="loginpng2">로그아웃</span>
                        </ul>
                      </>
                      ) : (
                        <Link to="/login">
                          <span className="loginpng4">로그인</span>
                        </Link>
                      )}
                    </div>
                  </li>
                </nav>
              </header>
              )
            }
          }}
        </Query>
      </>
    )
  }
  _userDelete = async => {
    localStorage.removeItem(AUTH_TOKEN);
    window.location="/"
  };
}

export default withRouter(Header);