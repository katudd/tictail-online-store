import React from "react"
import Products from "./products/products"

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
        <div className="products">
          {this.state.products.map(item =>
            <Products
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              category={item.categories.title} />)}
        </div>
      </div>
    )
  }

}

export default App
