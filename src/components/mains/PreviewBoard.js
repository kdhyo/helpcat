import React, { Component } from "react";
import { Link } from "react-router-dom";
class PreviewBoard extends Component {
  render() {
    return (
      <>
        <section>
          <Link to={{pathname:"/board"}}>
            <div>전체보기</div>
          </Link>
          <div className="board">
            <article className="article">
              <div className="previewArea">부산</div>
              <div className="previewTitle">고양이 밥좀 주세요!</div>
            </article>
            <article className="article">
              <div className="previewArea">서울</div>
              <div className="previewTitle">강아지 밥좀 주세요!</div>
            </article>
            <article className="article">
              <div className="previewArea">안양</div>
              <div className="previewTitle">돌고래 밥좀 주세요!</div>
            </article>
          </div>
          <div className="board">
            <article className="article">
              <div className="previewArea">수원</div>
              <div className="previewTitle">미어캣 밥좀 주세요!</div>
            </article>
            <article className="article">
              <div className="previewArea">전주</div>
              <div className="previewTitle">앵무새 밥좀 주세요!</div>
            </article>
            <article className="article">
              <div className="previewArea">강릉</div>
              <div className="previewTitle">침팬치 밥좀 주세요!</div>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default PreviewBoard;
