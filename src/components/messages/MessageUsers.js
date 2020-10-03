import React, { Component } from "react"
import { Link } from "react-router-dom";



class MessageUsers extends Component {
  render() {
    return (
      <>
        <ul className="UserInformation-ul">의뢰 게시글<br/>
          <Link to={{pathname:"/userInfor"}}>
            <li className="UserInformation-li">진행 중</li><br/>
          </Link>
          <Link to={{pathname:"/userInfor/reqComplete"}}>
            <li className="UserInformation-li">완료 게시글</li><br/>
          </Link>
        </ul>
      </>
    )
  }
}


export default MessageUsers