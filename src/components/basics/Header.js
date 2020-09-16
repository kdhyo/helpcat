import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <a href="/"><img alt="logo" src="helpcat.png" width="95px" /></a>
            <li>
              <Link to="/"><ul>Message</ul></Link>
              <Link to="/"><ul>Alarm</ul></Link>
              <Link to={{pathname:"/login"}}><ul>Log-in</ul></Link>
            </li>
          </nav>
        </header>
      </>
    )
  }
}

export default Header