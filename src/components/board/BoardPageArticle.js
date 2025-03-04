import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

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
              }}
            >
              <article className="previewArea2">
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
                  <span className="pva-main"> 시 작</span> &nbsp;
                  <Moment format="MM월 DD일 hh시 mm분">
                    {serviceBoardData.startAt}
                  </Moment>
                </div>
                <div className="pva-sub4">
                  <span className="pva-main"> 종 료</span> &nbsp;
                  <Moment format="MM월 DD일 hh시 mm분">
                    {serviceBoardData.endAt}
                  </Moment>
                </div>
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
              <article className="previewArea2">
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
                  <span className="pva-main"> 시 작</span> &nbsp;
                  <Moment format="MM/DD hh:mm">
                    {serviceBoardData.startAt}
                  </Moment>
                </div>
                <div className="pva-sub4">
                  <span className="pva-main">&nbsp;종 료</span> &nbsp;
                  <Moment format="MM/DD hh:mm">{serviceBoardData.endAt}</Moment>
                </div>
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
