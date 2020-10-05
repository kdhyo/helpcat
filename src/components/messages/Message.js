import React, { Component } from "react"
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import MessageText from "./MessageText";

const MESSAGE_VIEW_QUERY = gql`
  query {
    seeRoom(roomId:1) {
      UserOnRoom{
        user{
          id
          nickName
        }
      }
      message{
        id
        text
        from
        createdAt
      }
    }
  }
`;

class Message extends Component {
  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    return (
      <>
      <Query query={MESSAGE_VIEW_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <>
                </>
              );
            if (error){
              return (
              <>
              </>
              );
            }
            return (
              <div className="map4">
                <div className="chat-input-box">
                  <MessageText meData={this.props.meData} message={data.seeRoom.message} />
                <input className="chat-input"></input>
                </div>
              </div>
            )
          }}
        </Query>

      </>
    )
  }
}


export default Message