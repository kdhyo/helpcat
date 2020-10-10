import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const VIEW_SERVICES_BOARD_QUERY = gql`
  query {
    showServices(orderBy: desc) {
      id
      title
      contents
      price
      address1
      address2
      lat
      lon
      startAt
      endAt
      progress
      reqUser {
        id
        userName
        nickName
      }
      ansUser {
        id
        userName
        nickName
      }
      serviceimgfiles {
        id
        imglink
      }
    }
  }
`;

const NEW_SERVICE_SUBSCRIPTION = gql`
  subscription {
    newService {
      id
      title
      contents
      price
      address1
      address2
      lat
      lon
      startAt
      endAt
      progress
      reqUser {
        id
        userName
        nickName
      }
      ansUser {
        id
        userName
        nickName
      }
      serviceimgfiles {
        id
        imglink
      }
    }
  }
`;

class AlarmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: "",
      address2: "",
      ansUser: "",
      contents: "",
      endAt: "",
      id: Number,
      price: Number,
      reqUser: "",
      startAt: "",
      title: "",
      proceeding: "",
    };
  }

  _subscribeToNewLinks = (subscribeToMore) => {
    subscribeToMore({
      document: NEW_SERVICE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newServiceData = subscriptionData.data.newService;
        console.log(prev, newServiceData)
        const exists = prev.showServices.find(({ id }) => id === newServiceData.id);
        this.state = newServiceData;
        if (exists) return prev;
          return Object.assign({}, prev, {
            showServices: [newServiceData],
          });
      },
    });
  };
  render() {
    const mapToComponent = (data) => {
      if (data[0]) {
        return data.map((serviceBoardData, i) => {
          if (!serviceBoardData.progress) {
            return (
              <></>
            );
          }
        });
      } else {
        return <div>등록된 게시글이 없습니다.</div>;
      }
    };

    return (
      <>
        <Query query={VIEW_SERVICES_BOARD_QUERY}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading)
              return (
                <>
                  <div>Loading...</div>
                </>
              );
            if (error) return console.log(error);
            this._subscribeToNewLinks(subscribeToMore);
            return (
              <ul> 알림창
                <li>
                  {this.state.title}
                </li>
              </ul>
            );
          }}
        </Query>
      </>
    );
  }
}

export default AlarmDetail;