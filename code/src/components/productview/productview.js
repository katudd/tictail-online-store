import React from "react"
import "./productview.css"

class Productview extends React.Component {
  render() {
    if (!this.props.product) {
      return null
    }
    return (
      <div className="outerbox">
        <h1>{this.props.product.title}</h1>
          <div className="image" style={{backgroundImage: `url(${this.props.product.images[0].url})`}} />
        </div>
    )
  }
}

export default Productview
