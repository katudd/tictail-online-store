import React from "react"
import Products from "./products/products"
import Productview from "./productview/productview"
import Categorygrid from "./categorygrid/categorygrid"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
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
    return (
      <div>
        <Categorygrid />
        <Products products={this.state.products} />
        <Productview product={this.state.products[0]} />
      </div>
    )
  }

}

export default App
