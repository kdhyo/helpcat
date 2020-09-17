import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <a classname="logo" href="/"><img alt="logo" src="helpcat.png" width="45px" height="45px"/></a>
            <li>
              <Link to={{pathname:"/board"}}><ul>게시판</ul></Link>
              <Link to="/"><ul>알람</ul></Link>
              <Link to={{pathname:"/login"}}><ul>로그인</ul></Link>
            </li>
          </nav>
        </header>
      </>
    )
  }
}

export default Header