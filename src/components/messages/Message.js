import React, { Component } from "react"
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import MessageText from "./MessageText";

const MESSAGE_VIEW_QUERY = gql`
  query messages($room: Int!) {
    messages(room:$room) {
      id
      text
      to
      from
      createdAt
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
          room: room,
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
            console.log(data)
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
                    ...prev,
                    messages: [...prev.messages, newMessage]
                  };
                }
              });
              refetch();
            }
            refetch();
            // if(meData.id == data.messages[0].id){
              const to = 1
              return (
                <div className="map4">
                  <div className="chat-title">서비스 제목</div>
                  <div className="chat-input-box">
                    <MessageText meData={this.props.meData} message={data} />
                    <input
                      className="chat-input"
                      onChange={(e) => this.setState({ message: e.target.value })}
                    ></input>
                    <Mutation
                      mutation={SEND_MESSAGE_MUTATION}
                      variables={{ room, message, to }}
                    >
                      {(mutation) => (
                        <input className="writesubmit2" onClick={mutation} value="제출" readOnly></input>
                      )}
                    </Mutation>
                  </div>
                </div>
              )
            // }
            // else{
            //   const to = Number(data.messages[0].id)
            //   return (
            //     <div className="map4">
            //       <div className="chat-input-box">
            //         <MessageText meData={this.props.meData} message={data.messages} />
            //         <input
            //           className="chat-input"
            //           onChange={(e) => this.setState({ message: e.target.value })}
            //         ></input>
            //         <Mutation
            //           mutation={SEND_MESSAGE_MUTATION}
            //           variables={{ room, message, to }}
            //         >
            //           {(mutation) => (
            //             <input className="writesubmit" onClick={mutation} value="제출" readOnly></input>
            //           )}
            //         </Mutation>
            //       </div>
            //     </div>
            //   )
            // }
          }}
        </Query>
      </>
    )
  }
}


export default Message