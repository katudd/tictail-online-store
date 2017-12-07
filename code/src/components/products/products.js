import React from "react"
import "./products.css"
import Product from "../product/product"

class Products extends React.Component {
  render() {
    console.log(this.props.products)
    return (
      <div className="products">
        {this.props.products
          // This makes category filter work!
          // .filter(product => {
          //   return !this.props.filter || product.categories[0].title === this.props.filter
          // })
          .map(item =>
            <Product
              key={item.id}
              title={item.title}
              image={item.images[0].url}
              description={item.description}
              price={item.price}
              category={item.categories.title} />)}
      </div>
    )
  }
}

export default Products
