import { BrowserRouter, Route } from "react-router-dom"
import React from "react"
import Products from "./products/products"
import Productview from "./productview/productview"
import Categorygrid from "./categorygrid/categorygrid"
import Navigation from "./navigation/navigation"
import Logo from "./logo/logo"
import Hero from "./hero/hero"

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
      <BrowserRouter>
        <div>
          <Navigation />
          <Logo />

          {/* <div className="content">
            <Route path="/" exact component={Hero} />
            <Route path="/" component={Categorygrid} />
            <Route path="/products" component={Products} />
            <Route path="/product" component={Productview} />
          </div>
          <div>
            <div className="content"> */}
              {/* <Hero /> */}
              {/* <Categorygrid /> */}
              {/* <div className="categories-main">
                <Route path="/watches" component={Categorygrid} />
                <Route path="/chairs" component={Categorygrid} />
                <Route path="/art" component={Categorygrid} />
              </div>
              <Products products={this.state.products} */}
              // filter={this.state.category}
              />
              <Productview product={this.state.products[0]} />
            </div>
          {/* </div> */}
        {/* </div> */}
      </BrowserRouter>
    )
  }

}

export default App
