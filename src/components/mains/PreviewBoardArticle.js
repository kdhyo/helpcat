import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class PreviewBoardArticle extends Component {
  render() {
    const serviceBoardData = this.props.serviceBoardData;
    if (serviceBoardData.ansUser) {
      //수락자가 있다면 출력하기
      return (
        <>
          <Link
            to={{
              pathname: `/board/${serviceBoardData.id}`,
              serviceBoardData: serviceBoardData,
            }}
          >
            <article className="previewArea">
              <div className="pva-title">진행중</div>
              <div className="pva-sub1">
                <span className="pva-main">&nbsp;제 목</span> &nbsp;
                {serviceBoardData.title}
                <br></br>
                <span className="pva-main">&nbsp;가 격</span> &nbsp;
                {serviceBoardData.price}
                <br></br>
                <span className="pva-main">&nbsp;장 소</span> &nbsp;
                {serviceBoardData.address1}
              </div>
              <div className="pva-sub2">
                <span className="pva-main">닉네임</span>{" "}
                {serviceBoardData.reqUser.nickName}
                <br></br>
                <span className="pva-main">&nbsp;가 격</span> &nbsp;
                {serviceBoardData.price}&nbsp;&#8361;
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="pva-sub3">
                <span className="pva-main">&nbsp;시 작</span> &nbsp;
                <Moment format="YY년&nbsp;MM월&nbsp;DD일&nbsp;hh시&nbsp;mm분">
                  {serviceBoardData.startAt}
                </Moment>
              </div>
              <div className="pva-sub4">
                <span className="pva-main">&nbsp;종 료</span> &nbsp;
                <Moment format="YY년&nbsp;MM월&nbsp;DD일&nbsp;hh시&nbsp;mm분">
                  {serviceBoardData.endAt}
                </Moment>
              </div>
            </article>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link
            to={{
              pathname: `/board/${serviceBoardData.id}`,
              serviceBoardData: serviceBoardData,
            }}
          >
            <article className="previewArea">
              <div className="pva-title">모집중</div>
              <div className="pva-sub1">
                <span className="pva-main">&nbsp;제 목</span> &nbsp;
                {serviceBoardData.title}
                <br></br>
                <span className="pva-main">&nbsp;가 격</span> &nbsp;
                {serviceBoardData.price}
                <br></br>
                <span className="pva-main">&nbsp;장 소</span> &nbsp;
                {serviceBoardData.address1}
              </div>
              <div className="pva-sub2">
                <span className="pva-main">닉네임</span>{" "}
                {serviceBoardData.reqUser.nickName}
                <br></br>
                <span className="pva-main">&nbsp;가 격</span> &nbsp;
                {serviceBoardData.price}&nbsp;&#8361;
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="pva-sub3">
                <span className="pva-main">&nbsp;시 작</span> &nbsp;
                <Moment format="YY년&nbsp;MM월&nbsp;DD일&nbsp;hh시&nbsp;mm분">
                  {serviceBoardData.startAt}
                </Moment>
              </div>
              <div className="pva-sub4">
                <span className="pva-main">&nbsp;종 료</span> &nbsp;
                <Moment format="YY년&nbsp;MM월&nbsp;DD일&nbsp;hh시&nbsp;mm분">
                  {serviceBoardData.endAt}
                </Moment>
              </div>
            </article>
          </Link>
        </>
      );
    }
  }
}

export default PreviewBoardArticle;
