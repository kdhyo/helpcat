import React, { Component } from "react"
import { Link } from "react-router-dom";



class MessageUsers extends Component {
  render() {
    return (
      <>
        <ul className="chatting-title">
          <div className="chattitle">대화 상대</div><br/>
          <Link to={{pathname:""}}>
            <div className="chatting-box">
            <li className="chatting-user">문승익</li><br></br>
            <p className="chatting-text">부재중</p>
            <p className="chatting-time">4:33 PM</p>
            </div>
          </Link>
          <Link to={{pathname:""}}>
          <div className="chatting-box">
            <li className="chatting-user">최지율</li><br></br>
            <p className="chatting-text">죽고 싶다.</p>
            <p className="chatting-time">4:30 PM</p>
            </div>
          </Link>
          <Link to={{pathname:""}}>
          <div className="chatting-box">
            <li className="chatting-user">김동효</li><br></br>
            <p className="chatting-text">롤토체스</p>
            <p className="chatting-time">4:27 PM</p>
            </div>
          </Link>
        </ul>
      </>
    )
  }
}


export default MessageUsers