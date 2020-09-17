import React, { Component } from "react"

class Aside extends Component {
  render() {
      return (
        <>
      <aside>
        <a href="/"><div className="asider1">가이드</div></a>
        <a href="/"><div className="asider2">고객센터</div></a>
        <a href="/"><div className="asider3">질문하기</div></a>
        <a href="/"><div className="asider4">Top</div></a>
      </aside>
    </>
    )
  }
}

export default Aside