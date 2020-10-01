import React, { Component } from "react"
import { Link } from "react-router-dom";



class UserInforList extends Component {
  render() {
    return (
      <>
        <ul className="UserInformation-ul">의뢰 게시글<br/>
          <Link to={{pathname:"/userInfor/request"}}>
            <li className="UserInformation-li">진행 중</li><br/>
          </Link>
          <Link to={{pathname:"/userInfor/reqComplete"}}>
            <li className="UserInformation-li">완료 게시글</li><br/>
          </Link>
        </ul>
        <ul className="UserInformation-ul">수락 게시글 <br/>
          <Link to={{pathname:"/userInfor/accept"}}>
            <li className="UserInformation-li">진행 중</li><br/>
          </Link>
          <Link to={{pathname:"/userInfor/accComplete"}}>
            <li className="UserInformation-li">완료 게시글</li><br/>
          </Link>
        </ul>
        <ul className="UserInformation-ul">회원정보<br/>
          <Link to={{pathname:"/userInfor/pwdEdit"}}>
            <li className="UserInformation-li">비밀번호 수정</li><br/>
          </Link>
          <Link to={{pathname:"/userInfor/userEdit"}}>
            <li className="UserInformation-li">정보 수정</li><br/>
          </Link>
          <Link to={{pathname:"/userInfor/userWithdrawal"}}>
            <li className="UserInformation-li">회원 탈퇴</li><br/>
          </Link>
        </ul>
      </>
    )
  }
}


export default UserInforList