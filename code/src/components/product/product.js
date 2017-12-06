import React from "react"
import "./product.css"

class Product extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div className="product-overlay">
          {this.props.title}
          {/* {this.props.description} */}
          {this.props.price}
        </div>
        <div className="image-product" style={{backgroundImage: `url(${this.props.image})`}} alt="name" />
      </div>
    )
  }
}

export default Product
