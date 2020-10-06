import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PreviewBoardArticle from "./PreviewBoardArticle";

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
    }
  }
`;

class PreviewBoard extends Component {
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
        console.log(prev);
        if (!subscriptionData.data) return prev;
        const newServiceData = subscriptionData.data.newService;
        const exists = prev.showServices.find(({ id }) => id === newServiceData.id);
        if (exists) return prev;

        return Object.assign({}, prev, {
          showServices: [newServiceData, ...prev.showServices],
        });
      },
    });
  };


  render() {
    const proceeding = this.state.proceeding;
    const mapToComponent = (data) => {
      if (data[0]) {
        return data.map((serviceBoardData, i) => {
          if (!serviceBoardData.progress) {
            return (
              <PreviewBoardArticle
                serviceBoardData={serviceBoardData}
                key={i}
                Proceeding={proceeding}
              />
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
            if (data) {
              this.state = data.showServices;
            }
            this._subscribeToNewLinks(subscribeToMore);
            // this.state = data.serviceAll.reverse() // graphql query 셀렉트로 가져온 값
            return (
              <>
                <a href="/board">
                  <div className="viewall">더보기</div>
                </a>
                <div>
                  <section className="previewsection">
                    <div className="article">{mapToComponent(this.state)}</div>
                  </section>
                </div>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default PreviewBoard;
