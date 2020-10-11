import React, { Component } from "react"
import { Link } from "react-router-dom";

class MessageUserDetail extends Component {
  render() {
    const myData = this.props.myData.me; // 로그인 된 내 정보
    const opponentData = this.props.value // 개인 채팅 ROOM 정보
    console.log(opponentData.UserOnRoom)
    if(Number(opponentData.UserOnRoom[0].user[0].id) === Number(myData.id) || Number(opponentData.UserOnRoom[1].user[0].id) === Number(myData.id)) {
      const roomId = opponentData.UserOnRoom[0].roomId
      return (
        <>
        <Link to={`/message/${roomId}`}>
          <div className="chatting-box">
            <li className="chatting-user">{Number(opponentData.UserOnRoom[0].user[0].id) ===  Number(myData.id)? opponentData.UserOnRoom[1].user[0].nickName : opponentData.UserOnRoom[0].user[0].nickName}</li><br></br>
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