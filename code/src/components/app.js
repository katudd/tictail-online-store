import { BrowserRouter, Route } from "react-router-dom"
import React from "react"
import { wrap } from "tide"
import Products from "./products/products"
import Productview from "./productview/productview"
import Categorygrid from "./categorygrid/categorygrid"
import Navigation from "./navigation/navigation"
import Logo from "./logo/logo"
import Hero from "./hero/hero"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      className: "logo-big"
    }
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 20) {
      this.setState({
        className: "logo-small"
      })
    } else {
      this.setState({
        className: "logo-big"
      })}
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Logo className={this.state.className} />
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

export default wrap(App)
