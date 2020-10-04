import React, { Component } from "react";
import MessageUsers from "./MessageUsers";
import Message from "./Message";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
              <div>로그인이 안되었습니다.</div>
            )
            if (data) {
              return (
                <>
                <div className="UserInformation">
                  <div className="UserInformation-article1">
                    <MessageUsers meData={data} />
                  </div>
                  <div className="UserInformation-article2">
                    <Message meData={data} />
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
