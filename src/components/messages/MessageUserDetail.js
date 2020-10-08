import React, { Component } from "react"
import { Link } from "react-router-dom";

class MessageUserDetail extends Component {
  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    const opponentData = this.props.value // 상대방 정보
    console.log(opponentData)
    if(opponentData.UserOnRoom[0].user[0].id == meData.id || opponentData.UserOnRoom[1].user[0].id == meData.id) {
      const roomId = opponentData.UserOnRoom[0].roomId
      return (
        <>
        <Link to={`/message/${roomId}`}>
          <div className="chatting-box">
            <li className="chatting-user">{opponentData.UserOnRoom[0].user[0] ==  meData.id? opponentData.UserOnRoom[1].user[0].nickName : opponentData.UserOnRoom[0].user[0].nickName}</li><br></br>
            {/* <li className="chatting-text">{roomId}</li> */}
          </div>
        </Link>
        </>
      );
      }else{
    }
  }
}


export default MessageUserDetail