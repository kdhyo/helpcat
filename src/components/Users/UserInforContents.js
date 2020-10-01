import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { Link } from "react-router-dom";
import UserAccComplete from "./UserAccComplete";
import UserAccept from "./UserAccept";
import UserEdit from "./UserEdit";
import UserPwdEdit from "./UserPwdEdit";
import UserReqComplete from "./UserReqComplete";
import UserRequest from "./UserRequest";
import UserWithdrawal from "./UserWithdrawal";



class UserInforContents extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/userInfor/request" exact component={UserRequest} />
          <Route path="/userInfor/reqComplete" exact component={UserReqComplete} />
          <Route path="/userInfor/accept" exact component={UserAccept} />
          <Route path="/userInfor/accComplete" exact component={UserAccComplete} />
          <Route path="/userInfor/pwdEdit" exact component={UserPwdEdit} />
          <Route path="/userInfor/userEdit" exact component={UserEdit} />
          <Route path="/userInfor/userWithdrawal" exact component={UserWithdrawal} />
        </Switch>
      </>
    )
  }
}


export default UserInforContents