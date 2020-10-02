import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BoardPageArticle from "./BoardPageArticle";

const VIEW_SERVICES_BOARD_QUERY = gql`
  query {
    showServices(orderBy: desc) {
      id
      title
      contents
      price
      address
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
      address
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

class BoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
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
        console.log(prev)
        if (!subscriptionData.data) return prev;
        const newServiceData = subscriptionData.data.newService;
        const exists = prev.showServices.find(
          ({ id }) => id === newServiceData.id
        );
        if (exists) return prev;

        return Object.assign({}, prev, {
          showServices: [newServiceData, ...prev.showServices],
        });
      },
    });
  };

  nowProceeding() {
    this.setState({
      proceeding: true,
    });
  }
  notProceeding() {
    this.setState({
      proceeding: false,
    });
  }

  render() {
    const proceeding = this.state.proceeding
    const mapToComponent = (data) => {
      if (data[0]) {
        return data.map((serviceBoardData, i) => {
          if(!serviceBoardData.progress){
            return (
              <BoardPageArticle
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
                {proceeding ? <>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button onClick={this.notProceeding.bind(this)}>
                  진행 중
                  </button>
                </> : <>
                <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button onClick={this.nowProceeding.bind(this)}>
                    모집 중
                  </button>
                </>}
                <div>
                  <section className="boardmain">
                    <div className="board">{mapToComponent(this.state)}</div>
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

export default BoardPage;
