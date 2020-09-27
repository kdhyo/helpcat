import React, { Component } from "react"
import { Link } from "react-router-dom";

class BoardPageArticle extends Component {
  render() {
    const serviceBoardData = this.props.serviceBoardData;
    return (
      <>
        <Link
          to={
            {
              pathname:`/board/${serviceBoardData.id}`,
              serviceBoardData: serviceBoardData
            }
          }
        >
          <article className="articleBPA">
            title : {serviceBoardData.title}<br />
            contents : {serviceBoardData.contents}<br />
            price : {serviceBoardData.price}<br />
            address : {serviceBoardData.address}<br />
            시작일 : {serviceBoardData.startAt}<br />
            종료일 : {serviceBoardData.endAt}
          </article>
        </Link>
      </>
    )
  }
}


export default BoardPageArticle