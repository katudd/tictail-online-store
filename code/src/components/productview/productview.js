import React from "react"
import "./productview.css"

class Productview extends React.Component {
  render() {
    if (!this.props.product) {
      return null
    }
    return (
      <div className="outerbox">
          <div id="name">
            <h1>{this.props.product.title}</h1>
            <h1 id="center">${this.props.product.price}</h1>
          </div>
          <div className="image" style={{backgroundImage: `url(${this.props.product.images[0].url})`}} />
          <div className="descriptioncontainer">
            <div className="description">{this.props.product.description}</div>
            <div className="buttondiv">
                <div className="button"> <button id="button">buy</button>
              </div>
            </div>
        </div>
         </div>
    )
  }
}

export default Productview
