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
    }
  }
`;

class BoardPage extends Component {
  state = {
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
          {({ loading, error, data }) => {
            if (loading) return <><div>Loading...</div></>
            if (error) return console.log(error)
            if (data){
              this.state = data.serviceAll.reverse()
            }
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