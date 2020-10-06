import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Aside from "../basics/Aside";
import PreviewBoard from "./PreviewBoard";
import MainPageReview from "./MainPageReview";
import Footer from "../basics/Footer";
import MapMain from "./MapMain";

const VIEW_SERVICES_BOARD_QUERY = gql`
  query {
    showServices(orderBy: desc) {
      id
      title
      contents
      price
      address1
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

class IndexMain extends Component {
  render() {
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
            if (error)
              return (
                <>
                  <MapMain serviceData={undefined} />
                  <Aside />
                  <PreviewBoard serviceData={undefined} />
                  <MainPageReview />
                  <Footer />
                </>
              );
            if (data) {
              return (
                <>
                  <MapMain serviceData={data} />
                  <Aside />
                  <PreviewBoard serviceData={data} />
                  <MainPageReview />
                  <Footer />
                </>
              );
            }
          }}
        </Query>
      </>
    );
  }
}

export default IndexMain;
