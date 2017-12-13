import { BrowserRouter, Route } from "react-router-dom"
import React from "react"
import Products from "./products/products"
import Productview from "./productview/productview"
import Categorygrid from "./categorygrid/categorygrid"
import Navigation from "./navigation/navigation"
import Logo from "./logo/logo"
import Hero from "./hero/hero"

class App extends React.Component {

  // Method to update selectd category
  // setCategory(category) {
  //   this.setState({
  //     category
  //   })
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Logo />
          <div className="content">
            <Route path="/" exact component={Hero} />
            <Route path="/" exact component={Categorygrid} />
            <Route path="/products" component={Products} />
            <Route path="/product/:productId" component={Productview} />
            <Route path="/category/:categoryId" component={Products} />
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
