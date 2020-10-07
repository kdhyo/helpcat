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

const NEW_SERVICE_SUBSCRIPTION = gql`
  subscription {
    newMessage(roomId:1) {
      id
      text
      to
      from
      createdAt
    }
  }
`;

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  _subscribeToNewLinks = (subscribeToMore) => {
    subscribeToMore({
      document: NEW_SERVICE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessageData = subscriptionData.data.newMessage;
        const exists = prev.seeRoom.message[prev.seeRoom.message.length-1].id === newMessageData.id;
        console.log(prev.seeRoom.message, newMessageData)
        if (exists) return prev;

        return Object.assign({}, prev.seeRoom, {
          message: [newMessageData, ...prev.seeRoom.message],
        });
      },
    });
  };

  render() {
    const meData = this.props.meData.me; // 로그인 된 내 정보
    const { message } = this.state
    const room = Number(this.props.roomId)
    console.log(room, message, this.props)
    return (
      <>
      <Query query={MESSAGE_VIEW_QUERY}>
          {({ loading, error, data, subscribeToMore }) => {
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
            if (data) {
              this.state = data.seeRoom;
            }
            this._subscribeToNewLinks(subscribeToMore);
            console.log(this.state)
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