import React from "react"
import accounting from "accounting"
import { Link } from "react-router-dom"
import "./product.css"

class Product extends React.Component {
  render() {
    return (
      <Link className="product-box" to={`/product/${this.props.id}`}>
        <div className="product-title">{this.props.title}</div>
        <div className="product-price">{accounting.formatMoney(this.props.price / 100, `${this.props.currency} `, "2", " ")}</div>
        <div className="image-product" style={{ backgroundImage: `url(${this.props.image})` }} alt="name" />
      </Link>
    )
  }
}

export default Product
