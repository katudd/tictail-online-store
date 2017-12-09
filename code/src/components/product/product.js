import React from "react"
import "./product.css"

class Product extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div className="product-overlay">
          <div className="product-title">{this.props.title}</div>
          <div className="product-price">{this.props.price}</div>
        </div>
        <div className="image-product" style={{ backgroundImage: `url(${this.props.image})` }} alt="name" />
      </div>
    )
  }
}

export default Product
