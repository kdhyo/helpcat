import React, { Component } from "react"
import gql from "graphql-tag";
import { Query } from "react-apollo";
import MessageUserDetail from "./MessageUserDetail";


const MESSAGES_VIEW_QUERY = gql`
  query {
    seeRooms {
      UserOnRoom{
        id
        roomId
        user{
          id
          nickName
        }
      }
      message{
        id
        text
        createdAt
      }
    }
  }
`;

class MessageUsers extends Component {
  render() {
    return (
      <>
        <ul className="chatting-title">
          <div className="chattitle">대화 상대</div><br/>
          <Query query={MESSAGES_VIEW_QUERY}>
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
            console.log(data)
            return data.seeRooms.map((messageData, i) => {
              return (
                <MessageUserDetail value={messageData} meData={this.props.meData} />
              );
            })
          }}
        </Query>
        </ul>
      </>
    )
  }
}


export default MessageUsers