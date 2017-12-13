import { Link } from "react-router-dom"
import React from "react"
import classnames from 'classnames'
import {wrap} from 'tide'
import "./cart.css"

class Cart extends React.Component {

  emptyCart() {
    this.props.tide.actions.app.delete()
  }

  render() {
    return (
      <div className={classnames('cart', this.props.className, {
        'cart--horizontal': this.props.horizontal
      })}>
        <div className="bag"><span className="bagcount">{this.props.cartQuantity}</span></div>
        {this.props.displayPrice ? <div>{this.props.cartPrice} sek</div> : null }
        <button className="trash" onClick={this.emptyCart.bind(this)}></button>
      </div>
    )
  }
}

export default wrap(Cart, {
  cartQuantity: 'cartQuantity',
  cartPrice: 'cartPrice',
})
