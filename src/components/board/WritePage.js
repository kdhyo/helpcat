import React, { Component } from "react"




class WritePage extends Component {
  render() {
      return (
        <>
        <div className="writeform">
          <div className="writeheader">글쓰기</div>
          <div className="writetitle">제목</div>
          <input className="writetitleinput"></input>
        </div>
        </>
    )
  }
}

export default WritePage