import React, { Component } from "react";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import MessageText from "./MessageText";

const MESSAGE_VIEW_QUERY = gql`
  query messages($room: Int!) {
    messages(room: $room) {
      id
      text
      to
      from
      createdAt
    }
  }
`;

const ROOM_DATA_QUERY = gql`
  query seeRoom($room: Int!) {
    seeRoom(roomId: $room) {
      id
      UserOnRoom {
        roomId
        user {
          id
          nickName
        }
        service {
          title
        }
      }
    }
  }
`;

const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageMutation($room: Int, $message: String!, $to: Int!) {
    sendMessage(room: $room, message: $message, to: $to) {
      text
    }
  }
`;

const newMessage = gql`
  subscription newMessage($roomId: Int!) {
    newMessage(roomId: $roomId) {
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
      to: "",
    };
  }

  settingTo(data, myId) {
    if (this.state.to === "") {
      if (data[0].user[0].id === myId) {
        this.setState({
          to: Number(data[1].user[0].id),
        });
      } else if (data[1].user[0].id === myId) {
        this.setState({
          to: Number(data[0].user[0].id),
        });
      }
    }
  }

  render() {
    const myData = this.props.myData.me; // 로그인 된 내 정보
    const myId = myData.id;
    const { message } = this.state;
    const room = Number(this.props.roomId);
    return (
      <>
        <Query
          query={ROOM_DATA_QUERY}
          variables={{
            room: room,
          }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <div>Loading...</div>;
            }
            if (error) return <></>;
            const roomData = data;
            return (
              <>
                <Query
                  query={MESSAGE_VIEW_QUERY}
                  variables={{
                    room: room,
                  }}
                >
                  {({ loading, error, data, subscribeToMore, refetch }) => {
                    if (loading) return <></>;
                    if (error) {
                      return <></>;
                    }
                    if (!unsubscribe) {
                      unsubscribe = subscribeToMore({
                        document: newMessage,
                        variables: {
                          roomId: room,
                        },
                        updateQuery: (prev, { subscriptionData }) => {
                          if (!subscriptionData.data) {
                            return prev;
                          }
                          const { newMessage } = subscriptionData.data;
                          return {
                            ...prev,
                            messages: [...prev.messages, newMessage],
                          };
                        },
                      });
                      refetch();
                    }
                    refetch();
                    this.settingTo(roomData.seeRoom.UserOnRoom, myId);
                    const to = this.state.to;
                    return (
                      <div className="map4">
                        <div className="chat-title">
                          방제목 :{" "}
                          {roomData.seeRoom.UserOnRoom[0].service.title}
                        </div>
                        <div className="chat-input-box">
                          <div className="map5">
                            <MessageText
                              myData={this.props.myData}
                              roomData={roomData}
                              message={data}
                            />
                          </div>
                          <Mutation
                            mutation={SEND_MESSAGE_MUTATION}
                            onCompleted={() => this._confirm()}
                          >
                            {(mutation) => (
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  mutation({
                                    variables: { room, message, to },
                                  });
                                }}
                              >
                                <input
                                  className="chat-input"
                                  value={message}
                                  onChange={(e) =>
                                    this.setState({ message: e.target.value })
                                  }
                                ></input>
                                <button
                                  type="submit"
                                  className="writesubmit2"
                                  readOnly
                                >
                                  제출
                                </button>
                              </form>
                            )}
                          </Mutation>
                        </div>
                      </div>
                    );
                  }}
                </Query>
              </>
            );
          }}
        </Query>
      </>
    );
  }
  _confirm = async (data) => {
    this.setState({
      message: "",
    });
  };
}

export default Message;
