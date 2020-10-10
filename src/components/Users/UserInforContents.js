import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { Query } from "react-apollo";
import gql from "graphql-tag";
import UserAccComplete from "./UserAccComplete";
import UserAccept from "./UserAccept";
import UserEdit from "./UserEdit";
import UserPwdEdit from "./UserPwdEdit";
import UserReqComplete from "./UserReqComplete";
import UserRequest from "./UserRequest";
import UserWithdrawal from "./UserWithdrawal";

const USER_DATA_QUERY = gql`
  query {
    me {
      id
      email
      userName
      address1
    }
  }
`;

class UserInforContents extends Component {
  render() {
    return (
      <>
        <Query query={USER_DATA_QUERY}>
          {({ loading, error, data }) => {
            if (loading){
              return (
                <div>Loading...
                </div>
              )
            }
            if (error){console.log(error)}
            return(
              <div className="map3">
              <Switch>
                <Route path="/userInfor/" exact render={() => <UserRequest me={data}/>} />
                <Route path="/userInfor/reqComplete" exact render={() => <UserReqComplete me={data}/>} />
                <Route path="/userInfor/accept" exact render={() => <UserAccept me={data}/>} />
                <Route path="/userInfor/accComplete" exact render={() => <UserAccComplete me={data}/>} />
                <Route path="/userInfor/pwdEdit" exact component={UserPwdEdit} />
                <Route path="/userInfor/userEdit" exact component={UserEdit} />
                <Route path="/userInfor/userWithdrawal" exact render={() => <UserWithdrawal me={data}/>} />
              </Switch>
              </div>
            )
          }}
        </Query>
      </>
    )
  }
}


export default UserInforContents