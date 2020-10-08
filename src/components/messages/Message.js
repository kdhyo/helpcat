import React, { Component } from "react"
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import MessageText from "./MessageText";

const MESSAGE_VIEW_QUERY = gql`
  query seeRoom($roomId: Int!) {
    seeRoom(roomId:$roomId) {
      UserOnRoom{
        user{
          id
          nickName
        }
      }
      message{
        id
        text
        to
        from
        createdAt
      }
    }
  }
`;

const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageMutation(
    $room: Int
    $message: String!
    $to: Int!
  ) {
    sendMessage(
      room: $room
      message: $message
      to: $to
    ){
      text
    }
  }
`;

const newMessage = gql`
  subscription newMessage($roomId: Int!) {
    newMessage(roomId:$roomId) {
      id
      text
      to
      from
      createdAt
    }
  }
`;

let unsubscribe = null;

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    const { message } = this.state
    const room = Number(this.props.roomId)
    return (
      <>
      <Query
        query={MESSAGE_VIEW_QUERY}
        variables={{
          roomId: room,
        }}
      >
          {({ loading, error, data, subscribeToMore, refetch }) => {
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
            if (!unsubscribe) {
              unsubscribe = subscribeToMore({
                document: newMessage,
                variables: {
                  roomId:room
                },
                updateQuery: (prev, { subscriptionData }) => {
                  if (!subscriptionData.data) {
                    return prev;
                  }
                  const { newMessage } = subscriptionData.data;
                  console.log(newMessage, prev)
                  return {
                    ...prev.seeRoom,
                    message: [...prev.seeRoom.message, newMessage]
                  };
                }
              });
              refetch();
            }
            refetch();
            // console.log(this.state)
            if(meData.id == data.seeRoom.UserOnRoom[0].user[0].id){
              const to = Number(data.seeRoom.UserOnRoom[1].user[0].id)
              return (
                <div className="map4">
                  <div className="chat-input-box">
                    <MessageText meData={this.props.meData} message={data.seeRoom.message} />
                    <input
                      className="chat-input"
                      onChange={(e) => this.setState({ message: e.target.value })}
                    ></input>
                    <Mutation
                      mutation={SEND_MESSAGE_MUTATION}
                      variables={{ room, message, to }}
                    >
                      {(mutation) => (
                        <input className="writesubmit" onClick={mutation} value="제출" readOnly></input>
                      )}
                    </Mutation>
                  </div>
                </div>
              )
            }else{
              const to = Number(data.seeRoom.UserOnRoom[0].user[0].id)
              return (
                <div className="map4">
                  <div className="chat-input-box">
                    <MessageText meData={this.props.meData} message={data.seeRoom.message} />
                    <input
                      className="chat-input"
                      onChange={(e) => this.setState({ message: e.target.value })}
                    ></input>
                    <Mutation
                      mutation={SEND_MESSAGE_MUTATION}
                      variables={{ room, message, to }}
                    >
                      {(mutation) => (
                        <input className="writesubmit" onClick={mutation} value="제출" readOnly></input>
                      )}
                    </Mutation>
                  </div>
                </div>
              )
            }
          }}
        </Query>
      </>
    )
  }
}


export default Message