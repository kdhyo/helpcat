import React, { Component } from "react"
import { Route } from "react-router-dom"
import IndexBoard from "../components/board/IndexBoard";
import "../css/reset.css";
import "../css/main.css";


class Board extends Component {
  render() {
		return (
			
      <Route component={IndexBoard} />
      
    )
  }
}

export default Board