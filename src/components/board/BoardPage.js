import React, { Component } from "react"
import { Link } from "react-router-dom"




class BoardPage extends Component {
  render() {
      return (
        <>
      <section className="boardmain">
          <div className="board">
          <article className="article"> </article>
          <article className="article"></article>
          <article className="article"></article>
          </div>
          <div className="board">
          <article className="article"></article>
          <article className="article"></article>
          <article className="article"></article>
          </div>  
          <div className="board">
          <article className="article"></article>
          <article className="article"></article>
          <article className="article"></article>
          </div>  
      </section>
    </>
    )
  }
}

export default BoardPage