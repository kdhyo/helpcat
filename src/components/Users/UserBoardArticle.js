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
              <h1 className="colorblue2">심부름 완료</h1>
            ) : serviceBoardData.ansUser ? (
              <h1 className="colorblue2">진행중</h1>
            ) : (
              <h1 className="colorblue2">모집중</h1>
            )}
            <span className="colorblue">제목</span> : {serviceBoardData.title}
            <br />
            <span className="colorblue">내용</span> : {serviceBoardData.contents}
            <br />
            <span className="colorblue">가격</span> : {serviceBoardData.price}
            <br />
            <span className="colorblue">주소</span> : {serviceBoardData.address1}, {serviceBoardData.address2}
            <br />
            <span className="colorblue">시작일</span> : {serviceBoardData.startAt}
            <br />
            <span className="colorblue">종료일</span> : {serviceBoardData.endAt}
            <br />
            <span className="colorblue">닉네임</span>: {serviceBoardData.reqUser.nickName}
          </article>
        </Link>
      </>
    );
  }
}

export default UserBoardArticle;
