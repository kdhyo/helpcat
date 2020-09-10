import React, { Component } from 'react'
import '../css/reset.css';
import '../css/main.css';



class Main extends Component {
  render() {
      return (
        <>
        <header>Header</header>
      <main>
          Main
          <div class="map">Map</div>
      </main>
      <section>
          <div class="board">
          <article class="article1">Gallery 1</article>
          <article class="article2">Gallery 2</article>
          <article class="article3">Gallery 3</article>
          </div>
          <div class="board">
          <article class="article4">Gallery 4</article>
          <article class="article5">Gallery 5</article>
          <article class="article6">Gallery 6</article>
          </div>
      </section>
      
      <aside>Aside</aside>
      <footer>Footer</footer>
    </>
    )
  }
}
  

export default Main