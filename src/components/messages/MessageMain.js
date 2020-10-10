import React, { Component } from "react";
import MessageUsers from "./MessageUsers";
import Message from "./Message";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorNotLogin from "../basics/ErrorNotLogin";

const USER_DATA_QUERY = gql`
  query {
    me {
      id
      email
      userName
    }
  }
`;

class MessageMain extends Component {
  render() {
    return (
      <>
        <Query query={USER_DATA_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <div>Loading...</div>
            }
            if (error) return (
              <ErrorNotLogin />
            )
            if (data) {
              const myData = data;
              return (
                <>
                <div className="UserInformation">
                  <div className="UserInformation-article1">
                    <MessageUsers myData={myData} roomId={this.props.match.params.id} />
                  </div>
                  <div className="UserInformation-article2">
                    <Message myData={myData} roomId={this.props.match.params.id} />
                  </div>
                </div>
                </>
              );
            }
          }}
        </Query>
      </>
    );
  }
}

export default MessageMain;