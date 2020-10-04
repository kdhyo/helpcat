import React, { Component } from "react"
import MessageUsers from "./MessageUsers"
import Message from "./Message"


class MessageMain extends Component {
  render() {
    return (
      <>
        <div className="UserInformation">
          <div className="UserInformation-article1">
            <MessageUsers />
          </div>
          <div className="UserInformation-article2">
            <Message />
          </div>
        </div>
      </>
    )
  }
}


export default MessageMain