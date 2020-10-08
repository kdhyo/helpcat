import React, { Component } from "react";
import { Link } from "react-router-dom";

class MessageText extends Component {
  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    const message = this.props.message;
    console.log(message)

    return message.messages.map((message, i) => {
      const mtime = message.createdAt;
      if(message.from == this.props.meData.me.id){
        let a = mtime.substring(0,8);
        let b = Number(mtime.substring(8,10));
        let c = Number(mtime.substring(11,13))+9;
        var d = mtime.substring(13,16);
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
        const messageTime = a+b+" "+c+d
        return (
          <>
            <div className="my-message">
            <span className="bigfont">{message.text}</span><br></br>
            <span className="smallfont">{messageTime}</span>
            </div>
          </>
        )
      }else{
        let a = mtime.substring(0,8);
        let b = Number(mtime.substring(8,10));
        let c = Number(mtime.substring(11,13))+9;
        var d = mtime.substring(13,16);
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
        const messageTime = a+b+" "+c+d
        return (
          <>
            <div key={i} className="your-message">
              <span className="bigfont">{message.text}</span><br></br>
              <span className="smallfont">{messageTime}</span>
            </div>
          </>
        )
      }
    })
  }
}

export default MessageText;
