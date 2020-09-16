import React, { Component } from 'react'



class PreviewBoard extends Component {
  render() {
      return (
        <>
      <section>
          <div className="board">
          <article className="article1">Gallery 1</article>
          <article className="article2">Gallery 2</article>
          <article className="article3">Gallery 3</article>
          </div>
          <div className="board">
          <article className="article4">Gallery 4</article>
          <article className="article5">Gallery 5</article>
          <article className="article6">Gallery 6</article>
          </div>
      </section>
    </>
    )
  }
}

export default PreviewBoard