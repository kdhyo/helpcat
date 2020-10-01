import React, { Component } from "react"
import UserInforList from "./UserInforList";
import UserInforContents from './UserInforContents';



class UserInformation extends Component {
  render() {
    return (
      <>
        <div className="UserInformation">
          <div className="UserInformation-article1">
            <UserInforList />
          </div>
          <div className="UserInformation-article2">
           <UserInforContents />
          </div>
        </div>
      </>
    )
  }
}


export default UserInformation