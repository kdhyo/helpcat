import React, { Component } from "react"




class WritePage extends Component {
  render() {
      return (
        <>
        <div className="writeform">
        <img className="nomargin" src="writecat.png" width="80px"></img>
          <div className="writetitle">제목</div>
          <input className="writetitleinput"></input>
          <div className="writecontent">내용</div>
          <textarea className="writecontentinput"></textarea>
          <form className="writeday" action="" method="">
            기간<br></br>
          <input className="startday" type="datetime-local" id="" name=""></input>
          <p>부터</p>
          <input className="endday" type="datetime-local" id="" name=""></input>
          <p>&nbsp;&nbsp;&nbsp;까지</p>
          </form>
          <form>
            <input className="writesubmit" type="submit"></input>
            <input className="writereset" type="reset"></input>
          </form>
        </div>
        </>
    )
  }
}

export default WritePage