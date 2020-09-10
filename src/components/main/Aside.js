import React, { Component } from 'react'
import '../../css/reset.css';
import '../../css/main.css';



class Aside extends Component {
  render() {
      return (
        <>
      <aside>
        <a href="#"><div class="asider1">Write</div></a>
        <a href="#"><div class="asider2">Guide</div></a>
        <a href="#"><div class="asider3">FAQ</div></a>
        <a href="#"><div class="asider4">Service</div></a>
      </aside>
    </>
    )
  }
}
  

export default Aside