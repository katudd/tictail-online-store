import React from "react"

class Products extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.description}
        {this.props.price}
      </div>
    )
  }
}

export default Products
