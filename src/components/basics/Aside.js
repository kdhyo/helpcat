import React, { Component } from "react"

class Aside extends Component {
  render() {
      return (
        <>
      <aside>
        <a href="/"><div className="asider1"><img class="asiderpng" src="./guide.png" width="px" title="가이드" alt="가이드"></img></div></a>
        <a href="/"><div className="asider2"><img class="asiderpng" src="./service.png" width="px" title="고객센터" alt="고객센터"></img></div></a>
        <a href="/"><div className="asider3"><img class="asiderpng" src="./question.png" width="px" title="질문하기" alt="질문하기"></img></div></a>
        <a href="/">
          <div className="asider4">
            <img class="asiderpng" src="./write.png" width="px" title="글쓰기" alt="글쓰기"></img>
          </div>
        </a>
      </aside>
    </>
    )
  }
}
export default Aside