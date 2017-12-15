import React from "react"
import accounting from "accounting"
import { wrap } from "tide"
import "./productview.css"

class Productview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemCount: 1
    }
  }

  componentDidMount() {
    console.log("this.proos", this.props)
    fetch(`https://api.tictail.com/v1.26/stores/5znw/products/${this.props.match.params.productId}`).then(response =>
      response.json()).then(product =>
      this.props.tide.actions.app.setCurrentProduct(product)
    )
  }

  componentWillUnmount() {
    this.props.tide.actions.app.setCurrentProduct(null)
  }

  reduceItemCount() {
    if (this.state.itemCount < 2) {
      return
    }

    const currentCount = this.state.itemCount

    this.setState({
      itemCount: currentCount - 1
    })
  }

  addItemCount() {
    const currentCount = this.state.itemCount

    this.setState({
      itemCount: currentCount + 1
    })
  }

  addToCart() {
    this.props.tide.actions.app.addToCart(
      this.state.itemCount,
      this.props.product.price / 100
    )
  }

  render() {
    console.log(this)

    if (!this.props.product) {
      return null
    }
    return (
      <div className="outerbox">
        <div id="name">
          <h1 id="nomargin">{this.props.product.title}</h1>
          <p id="psize" >{accounting.formatMoney(this.props.product.price / 100, `${this.props.product.currency} `, "2", " ")}</p>
        </div>
        <div className="productimage" style={{ backgroundImage: `url(${this.props.product.images[0].url})` }} />
        <div className="descriptioncontainer">

          <div className="description" id="mobiledescription">
            <div className="buttonqty">
              <button className="quantitybutton" type="button" onClick={this.reduceItemCount.bind(this)}> - </button>
              <span className="numberbutton"> {this.state.itemCount} </span>
              <button className="quantitybutton" type="button" onClick={this.addItemCount.bind(this)}> + </button>
            </div>
            {this.props.product.description}
          </div>

          <div className="description">
            <div className="buttonqty">
              <button className="quantitybutton" type="button" onClick={this.reduceItemCount.bind(this)}> - </button>
              <span className="numberbutton"> {this.state.itemCount} </span>
              <button className="quantitybutton" type="button" onClick={this.addItemCount.bind(this)}> + </button>
            </div>
            <h1 id="h1smallsize">{this.props.product.title}</h1>
            <p id="psize">{accounting.formatMoney(this.props.product.price / 100, `${this.props.product.currency} `, "2", " ")}</p>
            <p id="margin">{this.props.product.description}</p>
          </div>
          <div className="buttondiv">
            <div className="button"> <button id="button" onClick={this.addToCart.bind(this)}>buy</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default wrap(Productview, {
  product: "product"
})
