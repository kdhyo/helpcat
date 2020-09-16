import React, { Component } from 'react'

class Aside extends Component {
  render() {
      return (
        <>
      <aside>
        <a href="/"><div className="asider1">Write</div></a>
        <a href="/"><div className="asider2">Guide</div></a>
        <a href="/"><div className="asider3">FAQ</div></a>
        <a href="/"><div className="asider4">Service</div></a>
      </aside>
    </>
    )
  }
}

export default Aside