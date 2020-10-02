import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserBoardArticle extends Component {
  render() {
    const serviceBoardData = this.props.serviceBoardData;
    return (
      <>
        <Link
          to={{
            pathname: `/board/${serviceBoardData.id}`,
            serviceBoardData: serviceBoardData,
          }}
        >
          <article
            className={
              serviceBoardData.progress
                ? "articleUBA3"
                : serviceBoardData.ansUser
                ? "articleUBA1"
                : "articleUBA2"
            }
          >
            {serviceBoardData.progress ? (
              <h1>심부름 완료!</h1>
            ) : serviceBoardData.ansUser ? (
              <h1>진행중!</h1>
            ) : (
              <h1>모집중!</h1>
            )}
            title : {serviceBoardData.title}
            <br />
            contents : {serviceBoardData.contents}
            <br />
            price : {serviceBoardData.price}
            <br />
            address : {serviceBoardData.address}
            <br />
            시작일 : {serviceBoardData.startAt}
            <br />
            종료일 : {serviceBoardData.endAt}
            <br />
            닉네임: {serviceBoardData.reqUser.nickName}
          </article>
        </Link>
      </>
    );
  }
}

export default UserBoardArticle;
