import { Link } from "react-router-dom"
import React from "react"
import classnames from 'classnames'
import {wrap} from 'tide'
import "./navigation.css"
import Cart from "../cart/cart.js"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      displayMenu: false,
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znw/categories").then(response =>
      response.json()).then(json =>
      this.setState({
        categories: json
      }))
  }

  onClickNavItem() {
    this.setState({
      displayMenu: false
    })
  }

  emptyCart() {
    this.props.tide.actions.app.delete()
  }

  renderNavigation() {
    const categories = this.state.categories
    const items = categories.map((category) => {
      return (
        <li key={category.id}><Link onClick={this.onClickNavItem.bind(this)} to={`/category/${category.slug}`} className="links sub-menu">{category.title}</Link></li>
      )
    })

    return (
      <ul>
        <li><Link onClick={this.onClickNavItem.bind(this)} to="/" className="links">Home</Link></li>
        <li><Link onClick={this.onClickNavItem.bind(this)} to="/products" className="links">Products</Link></li>
        <ul className="sub-menu">
          {items}
        </ul>
        <li><Link onClick={this.onClickNavItem.bind(this)} to="/" className="links">About</Link></li>
        <li><Link onClick={this.onClickNavItem.bind(this)} to="/" className="links">Contact</Link></li>
      </ul>
    )
  }

  toggleMenu() {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }


  render() {
    console.log('this.state', this.state.displayMenu)
    console.log('cartQuantity', this.props.cartQuantity)
    console.log('cartPrice', this.props.cartPrice)
    return (

      <nav id="menu">

        <div className="mobile-menu">

          <input id="hamburger" onClick={this.toggleMenu.bind(this)} className="hamburger-checkbox" />
          <Cart className="mobile-cart" horizontal/>
          <label
            className={classnames('hamburger', {
              'hamburger--isOpen': this.state.displayMenu
            })}
            htmlFor="hamburger"
          >
            <div className="bar bar1" />
            <div className="bar bar2" />
            <div className="bar bar3" />
          </label>


          {/* if (this.state.menu) {

          } else {

          }

          this.state.menu ? gör nått : gör nåt annat */}

          <div className={classnames("menu", {
            "menu--isOpen": this.state.displayMenu
          })}>
            {this.renderNavigation()}
            <Cart className="desktop-cart" displayPrice/>
          </div>

        </div>
      </nav>

    )
  }
}

export default wrap(Navigation, {
  cartQuantity: 'cartQuantity',
  cartPrice: 'cartPrice',
})
