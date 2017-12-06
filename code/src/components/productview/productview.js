import React from "react"
import "./productview.css"

class Productview extends React.Component {
  render() {
    if (!this.props.product) {
      return null
    }
    return (
      <div>
        <h1>{this.props.product.title} </h1>
      </div>
    )
  }
}

export default Productview
