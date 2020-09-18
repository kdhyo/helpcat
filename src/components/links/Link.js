import React, { Component } from "react"

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          ID : {this.props.link.id} / {this.props.link.description} / Link : {this.props.link.url}
        </div>
      </div>
    )
  }
}

export default Link