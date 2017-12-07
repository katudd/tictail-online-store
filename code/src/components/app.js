import React from "react"
import Products from "./products/products"
import Productview from "./productview/productview"
import Categorygrid from "./categorygrid/categorygrid"

class App extends React.Component {

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

  // Method to update selectd category
  // setCategory(category) {
  //   this.setState({
  //     category
  //   })
  // }

  render() {
    return (

      <div>
        <Categorygrid />
        <div className="content">
          <Products products={this.state.products}
            // filter={this.state.category}
          />
          <Productview product={this.state.products[0]} />
        </div>
      </div>
    )
  }

}

export default App
