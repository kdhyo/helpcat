import React, { Component } from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";
import KakaoMap from "./KakaoMap";

const USER_DATA_QUERY = gql`
  query{
    me{
      id,
      email,
      userName,
      address1
    }
  }
`;

class MapMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: "",
      meData: "",

    };
  }

  render(){
    const serviceData = this.props.serviceData.showServices
    return (
      <>
        <Query query={USER_DATA_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <><div className="map2">Loading...</div></>
            if (error) return <KakaoMap serviceData={serviceData} meData={undefined}/>
            const meData = data;
            return (
              <>
                <KakaoMap serviceData={serviceData} meData={meData}/>
              </>
            )
          }}
        </Query>

      </>
    )
  }
}

export default MapMain