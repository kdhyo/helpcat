import React, { Component } from "react"
import IndexBoard from "../components/board/IndexBoard";
import "../css/reset.css";
import "../css/main.css";

class Board extends Component {
  render() {
		return (
			<>
      <IndexBoard />
			</>
    )
  }
}

export default Board