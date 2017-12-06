import React from "react"
import "./product.css"

class Product extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.description}
        {this.props.price}
        <img src={this.props.image} alt="name" />
      </div>
    )
  }
}

export default Product
