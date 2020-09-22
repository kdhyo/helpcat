import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router";
import { AUTH_TOKEN } from '../../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <>
        <header>
          <nav>
          <Link to={{pathname:"/"}}><img class="logopng" alt="logo" src="logo.png" width="180px" height="40px"/></Link>
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
                </>
                ) : (
                  <Link to="/login">
                    <img class="loginpng" src="./login.png" width="45px" title="로그인" alt="로그인"></img>
                  </Link>
                )}
              </div>
            </li>
          </nav>
        </header>
      </>
    )
  }
}

export default withRouter(Header);