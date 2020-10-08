import React, { Component } from "react"
import { Link } from "react-router-dom";


class MessageUserDetail extends Component {
  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    const opponentData = this.props.value // 상대방 정보
    const lastData = (this.props.value.message.length - 1)
    const message = this.props.value.message[lastData]
    console.log(opponentData)
    if(this.props.value.UserOnRoom[0].user[0].id !== meData.id){
      return (
        <>
          <div className="chatting-box">
            <li className="chatting-user">{opponentData.nickName}</li><br></br>
          </div>
        </>
      );
    }else{
      return(<></>)
    }
  }
}


export default MessageUserDetail