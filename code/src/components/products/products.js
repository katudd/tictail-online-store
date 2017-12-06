import React from "react"

class Products extends React.Component {
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

export default Products
