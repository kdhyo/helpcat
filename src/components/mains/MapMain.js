import React, { Component } from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";
import KakaoMap from "./KakaoMap";


const USER_DATA = gql`
  query{
    user{
      id,
      userName,
      address
    }
  }
`;

class MapMain extends Component {
  render(){
    return (
      <>
        <Query query={USER_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <><div className="map2">Loading...</div></>
            if (error) return <KakaoMap/>
            return (
              <KakaoMap data={data}/>
            )
          }}
        </Query>

      </>
    )
  }
}

export default MapMain