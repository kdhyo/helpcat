import React, { Component } from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BoardPageArticle from "./BoardPageArticle";

const SELECT_SERVICE_BOARD = gql`
  query{
    serviceAll{
      id
      title
      contents
      price
      address
      startAt
      endAt
    }
  }
`;

const NEW_LINKS_SUBSCRIPTION = gql`
subscription{
  newService{
    id
    title
    contents
    price
    address
    startAt
    endAt
  }
}
`;

class BoardPage extends Component {
  _subscribeToNewLinks = (subscribeToMore) => {
    subscribeToMore({
      document: NEW_LINKS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        console.log(prev)
        console.log(subscriptionData.data)
        if (!subscriptionData.data) return prev;
        const newServiceData = subscriptionData.data.newService;
        const exists = prev.serviceAll.find(({ id }) => id === newServiceData.id);
        if (exists) return prev;

        return Object.assign({}, prev, {
          serviceAll: [newServiceData, ...prev.serviceAll],
        });
      },
    });
  };

  render() {
    const mapToComponent = data => {
      if(data[0]){
        return data.map((serviceBoardData, i) => {
          return (
            <BoardPageArticle serviceBoardData={serviceBoardData} key={i}/>
          );
        });
      }else{
        return <div>등록된 게시글이 없습니다.</div>
      }
    };

    return (
      <>
        <Query query={SELECT_SERVICE_BOARD}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <><div>Loading...</div></>
            if (error) return console.log(error)
            if (data){
              this.state = data.serviceAll
            }

            this._subscribeToNewLinks(subscribeToMore);

            // this.state = data.serviceAll.reverse() // graphql query 셀렉트로 가져온 값
            return (
              <div>
                <section className="boardmain">
                  <div className="board">
                    {mapToComponent(this.state)}
                  </div>
                </section>
              </div>
            );
          }}
        </Query>
      </>
    )
  }
}

export default BoardPage