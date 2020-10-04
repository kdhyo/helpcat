import React, { Component } from "react"
import { Link } from "react-router-dom";


class MessageUserDetail extends Component {
  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    const opponentData = this.props.value.UserOnRoom[0].user[0] // 상대방 정보
    console.log(this.props.value)
    if(this.props.value.UserOnRoom[0].user[0].id !== meData.id){
      return (
        <>
          <div className="chatting-box">
            <li className="chatting-user">{opponentData.nickName}</li><br></br>
            <p className="chatting-text">부재중</p>
            <p className="chatting-time">4:33 PM</p>
          </div>
        </>
      );
    }else{
      return(<></>)
    }
  }
}


export default MessageUserDetail