import { Link } from "react-router-dom"
import React from "react"
import "./categorygrid.css"

class Categorygrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      products: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znw/categories").then(response =>
      response.json()).then(json =>
      this.setState({
        categories: json
      }))
    fetch("https://api.tictail.com/v1.26/stores/5znw/products").then(response =>
      response.json()).then(json =>
      this.setState({
        products: json
      }))
  }

  getCategoryImage(categoryId) {
    const categoryProducts = this.state.products.filter((product) => {
      return product.images.length !== 0 && product.categories[0].id === categoryId
    })
  console.log("categoryId", categoryId)
    const selectedProduct = categoryProducts[0]

    console.log("selectedProduct", selectedProduct)

    const productImage = selectedProduct ? selectedProduct.images[0].url : "./images/dandelion09_akihiro_yoshida.jpg"
    return { backgroundImage: `url(${productImage})` }
  }

  renderCategories() {
    const categories = this.state.categories
    const items = categories.map((category) => {
      return (
        <Link key={category.id} className="category" to={`/category/${category.slug}`}>
          <h2 className="headingCategory">{category.title}</h2>
          <div className="imageCategory" style={this.getCategoryImage(category.id)} alt="" />
        </Link>
      )
    })

    return (
      <div className="categories">
        {items}
      </div>
    )
  }

  render() {
    return this.renderCategories()
  }
}

export default Categorygrid
