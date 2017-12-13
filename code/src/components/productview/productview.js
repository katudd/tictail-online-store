import React from "react"
import accounting from "accounting"
import "./productview.css"

class Productview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null
    }
  }

  componentDidMount() {
    fetch(`https://api.tictail.com/v1.26/stores/5znw/products/${this.props.match.params.productId}`).then(response =>
      response.json()).then(json =>
      this.setState({
        product: json
      }))
  }

  render() {
    if (!this.state.product) {
      return null
    }
    return (
      <div className="outerbox">
        {/* <div id="name">
          <h1 id="nomargin">{this.state.product.title}</h1>
          <p id="psize" >{accounting.formatMoney(this.state.product.price / 100, "sek ", "2", " ")}</p>
        </div> */}
        <div className="productimage" style={{ backgroundImage: `url(${this.state.product.images[0].url})` }} />
        <div className="descriptioncontainer">
          <div className="description">
            <h1>{this.state.product.title}</h1>
            <p id="psize">{accounting.formatMoney(this.state.product.price / 100, "sek ", "2", " ")}
            </p>{this.state.product.description}</div>

          <div className="buttondiv">
            <div className="button"> <button id="button">buy</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Productview
