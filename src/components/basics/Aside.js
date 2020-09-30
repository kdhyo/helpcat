import React, { Component } from "react"
import { Link } from "react-router-dom"

class Aside extends Component {
  render() {
      return (
        <>
      <aside>
        <Link to="/testtt"><div className="asider1"><img className="asiderpng" src="./guide.png" width="px" title="가이드" alt="가이드"></img></div></ Link>
        <Link to="/"><div className="asider2"><img className="asiderpng" src="./service.png" width="px" title="고객센터" alt="고객센터"></img></div></ Link>
        <Link to="/"><div className="asider3"><img className="asiderpng" src="./question.png" width="px" title="질문하기" alt="질문하기"></img></div></ Link>
        <Link to="/Write"><div className="asider4"><img className="asiderpng" src="./write.png" width="px" title="글쓰기" alt="글쓰기"></img></div></ Link>
      </aside>
    </>
    )
  }
}
export default Aside