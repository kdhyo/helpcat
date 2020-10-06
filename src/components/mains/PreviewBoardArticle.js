import React, { Component } from "react";
import { Link } from "react-router-dom";

class PreviewBoardArticle extends Component {
  render() {
    const serviceBoardData = this.props.serviceBoardData;
      if (serviceBoardData.ansUser) {//수락자가 있다면 출력하기
        return (
          <>
            <Link
              to={{
                pathname: `/board/${serviceBoardData.id}`,
                serviceBoardData: serviceBoardData,
              }}
            >
              <article className="previewArea">
                진행중<br />
                title : {serviceBoardData.title}
                <br />
                contents : {serviceBoardData.contents}
                <br />
                price : {serviceBoardData.price}
                <br />
                address : {serviceBoardData.address1}, {serviceBoardData.address2}
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
      } else {
        return(
          <>
            <Link
              to={{
                pathname: `/board/${serviceBoardData.id}`,
                serviceBoardData: serviceBoardData,
              }}
            >
              <article className="previewArea">
                모집중<br />
                title : {serviceBoardData.title}
                <br />
                contents : {serviceBoardData.contents}
                <br />
                price : {serviceBoardData.price}
                <br />
                address : {serviceBoardData.address1}, {serviceBoardData.address2}
                <br />
                시작일 : {serviceBoardData.startAt}
                <br />
                종료일 : {serviceBoardData.endAt}
                <br />
                닉네임: {serviceBoardData.reqUser.nickName}
              </article>
            </Link>
          </>
        )
      }
  }
}

export default PreviewBoardArticle;
