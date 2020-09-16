import React, { Component } from 'react'
import '../../css/reset.css';
import '../../css/main.css';



class Header extends Component {
  render() {
      return (
        <>
        <header>
          <nav>
            <a href="/"><img alt="logo" src="helpcat.png" width="95px" /></a>
            <li>
              <a href="/"><ul>Board</ul></a>
              <a href="/"><ul>Alarm</ul></a>
              <a href="/"><ul>Log-in</ul></a>
            </li>
          </nav>
        </header>
    </>
    )
  }
}
  

export default Header