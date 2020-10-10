import React, { Component } from "react"
import { Link } from "react-router-dom"
import AlarmPage from "./AlarmPage"

class Aside extends Component {
  render() {
    return (
      <>
        <aside>
          <Link to="/Write"><div className="asider4"><img className="asiderpng" src="/write.png" width="px" title="글쓰기" alt="글쓰기"></img></div></ Link>
          <Link to="/message"><div className="asider2"><img className="asiderpng" src="/message.png" width="px" title="채팅" alt="채팅"></img></div></ Link>
          <AlarmPage />
          <Link to="/userInfor"><div className="asider1"><img className="asiderpng" src="/user.png" width="px" title="마이페이지" alt="마이페이지"></img></div></ Link>
        </aside>
      </>
    )
  }
}
export default Aside