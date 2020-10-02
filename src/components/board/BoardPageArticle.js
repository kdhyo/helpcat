import React, { Component } from "react";
import { Link } from "react-router-dom";

class BoardPageArticle extends Component {
  render() {
    const serviceBoardData = this.props.serviceBoardData;
    if (this.props.Proceeding) {
      if (serviceBoardData.ansUser) {
        //수락자가 없다면 출력하기
        return (
          <>
            <Link
              to={{
                pathname: `/board/${serviceBoardData.id}`,
                serviceBoardData: serviceBoardData,
              }}
            >
              <article className="articleBPA">
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
                게시자: {serviceBoardData.reqUser.userName}
                <br />
                닉네임: {serviceBoardData.reqUser.nickName}
              </article>
            </Link>
          </>
        );
      } else {
        return <></>;
      }
    } else {
      if (!serviceBoardData.ansUser) {
        //수락자가 없다면 출력하기
        return (
          <>
            <Link
              to={{
                pathname: `/board/${serviceBoardData.id}`,
                serviceBoardData: serviceBoardData,
              }}
            >
              <article className="articleBPA">
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
                게시자: {serviceBoardData.reqUser.userName}
                <br />
                닉네임: {serviceBoardData.reqUser.nickName}
              </article>
            </Link>
          </>
        );
      } else {
        return <></>;
      }
    }
  }
}

export default BoardPageArticle;
