import React, { Component } from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";


const TEST_QUERY = gql`
  {
    showServices(orderBy:desc){
    title @client
    id @client
    }
  }
`;

const VIEW_SERVICES_BOARD_QUERY = gql`
  query{
    showServices(orderBy:desc){
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


class Testtt extends Component {
  render() {
    return (
      <>
        <Query query={TEST_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <><div>Loading...</div></>
            if (error) return console.log(error)
            console.log(data)
            console.log("data라고..")
            return (
              <div>
                <section className="boardmain">
                  <div className="board">
                    <div>aaa</div>
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

export default Testtt