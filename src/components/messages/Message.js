import React, { Component } from "react"
import { Mutation } from "react-apollo";
import gql from "graphql-tag";



class Message extends Component {
  render() {
    return (
      <>
        <div className="map4">
          <div className="chat-input-box">
            <div className="your-message">안녕!<br></br></div>
            <div className="my-message">반가워!<br></br></div>
          <input className="chat-input"></input>
          </div>
        </div>
      </>
    )
  }
}


export default Message