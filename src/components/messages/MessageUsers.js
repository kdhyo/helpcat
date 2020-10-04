import React, { Component } from "react"
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import MessageUserDetail from "./MessageUserDetail";


const MESSAGES_VIEW_QUERY = gql`
  query {
    seeRooms {
      roomId
      UserOnRoom{
        user{
          id
          nickName
        }
      }
      message{
        text
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
          <Link to={{pathname:""}}>
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
            return data.seeRooms.map((messageData, i) => {
              console.log(messageData.roomId)
              return (
                <MessageUserDetail key={messageData.roomId} value={messageData} meData={this.props.meData} />
              );
            })
          }}
        </Query>

          </Link>
        </ul>
      </>
    )
  }
}


export default MessageUsers