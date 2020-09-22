import React, { Component } from "react";
import { Link } from "react-router-dom";
class PreviewBoard extends Component {
  render() {
    return (
      <>
        <section>

          <div className="board">
            <article className="article">
              <div className="previewArea">부산</div>
              <div className="previewTitle">lorem ipsum is simply</div>
            </article>
            <article className="article">
              <div className="previewArea">서울</div>
              <div className="previewTitle">lorem ipsum is simply</div>
            </article>
            <article className="article">
              <div className="previewArea">안양</div>
              <div className="previewTitle">lorem ipsum is simply</div>
            </article>
          </div>
          <div className="board">
            <article className="article">
              <div className="previewArea">수원</div>
              <div className="previewTitle">lorem ipsum is simply</div>
            </article>
            <article className="article">
              <div className="previewArea">전주</div>
              <div className="previewTitle">lorem ipsum is simply</div>
            </article>
            <article className="article">
              <div className="previewArea">강릉</div>
              <div className="previewTitle">lorem ipsum is simply</div>
            </article>
          </div>
          <Link to={{pathname:"/board"}}>
            <div className="viewall">더보기</div>
          </Link>
        </section>
      </>
    );
  }
}

export default PreviewBoard;
