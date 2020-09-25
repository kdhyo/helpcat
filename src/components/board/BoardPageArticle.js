import React, { Component } from "react"
import { Link } from "react-router-dom";

class BoardPageArticle extends Component {
  render() {
    return (
      <>
        <Link
          to={
            {
              pathname:`/board/${this.props.serviceBoardData.id}`,
              serviceBoardData: this.props.serviceBoardData
            }
          }
        >
          <article className="article">
            title : {this.props.serviceBoardData.title}<br />
            contents : {this.props.serviceBoardData.contents}<br />
            price : {this.props.serviceBoardData.price}<br />
            address : {this.props.serviceBoardData.address}
          </article>
        </Link>
      </>
    )
  }
}


export default BoardPageArticle