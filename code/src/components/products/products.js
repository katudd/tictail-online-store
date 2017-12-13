import React from "react"
import "./products.css"
import Product from "../product/product"

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
      // category: 'Watches'
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znw/products").then(response =>
      response.json()).then(json =>
      this.setState({
        products: json
      }))
  }

  render() {
    console.log('this.state.products', this.state.products)
    console.log('this.props', this.props)


    // 1. Hitta kategorin
    const categoryId = this.props.match.params.categoryId
    console.log(categoryId)
    // 2. Ta bort allt som ite har den kateogrin
    // 3. Skriv ut alla produkter
    return (
      <div className="products">
        {this.state.products
          // This makes category filter work!
          .filter((product) => {
            if (categoryId) {
            return product.categories[0].slug === categoryId
          } return true
          })

          .map(item =>
            <Product
              key={item.id}
              id={item.id}
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
