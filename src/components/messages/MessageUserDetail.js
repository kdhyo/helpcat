import React, { Component } from "react"
import { Link } from "react-router-dom";


class MessageUserDetail extends Component {
  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    const opponentData = this.props.value.UserOnRoom[0].user[0] // 상대방 정보
    const lastData = (this.props.value.message.length - 1)
    const message = this.props.value.message[lastData]
console.log(meData,opponentData,lastData,message)
    const messageTime = () => {
      if (message) {
        const messaget = message.createdAt
        let a = messaget.substring(0,8);
        let b = Number(messaget.substring(8,10));
        let c = Number(messaget.substring(11,13))+9;
        var d = messaget.substring(13,16);
        if(c>=24){
          if(c <= 33){
            c = "0"+(c-24);
          }else if(c == 24){
            c= "00";
          }else{
            c = c-24
          }
          if(b<9){
            b = "0"+(b+1);
          }else if(b>=30){
            b = "00"
          }else{
            b = b+1
          }
        }
        const messageFinishTime = a+b+" "+c+d
        return (
          {messageFinishTime}
        )
      } else {
        return <></>;
      }
    };

    if(this.props.value.UserOnRoom[0].user[0].id !== meData.id){
      return (
        <>
          <div className="chatting-box">
            <li className="chatting-user">{opponentData.nickName}</li><br></br>
            <p className="chatting-text">{message.text}</p>
            <p className="chatting-time">{messageTime(this.state)}</p>
          </div>
        </>
      );
    }else{
      return(<></>)
    }
  }
}


export default MessageUserDetail