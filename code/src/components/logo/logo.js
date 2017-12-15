import React from "react"
import { wrap } from "tide"
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types"
import "./logo.css"
import logo from "../../images/homebound_logo_green.svg"
import house from "../../images/housecircle.png"
import art from "../../images/artdark.png"
import chairs from "../../images/chairdarkgreen.png"
import clocks from "../../images/watchdark.png"
import products from "../../images/productsdarkgreen.png"

class Logo extends React.Component {

  render() {
    const { pathname } = this.context.router.route.location
    const category = this.props.product ? this.props.product.categories[0].slug : null
    console.log(pathname, category)
    console.log(category === 'art')
    let logoImage
    if (pathname.endsWith("/art") || category == "art") {
      console.log('art')
      logoImage = art
    } else if (pathname.endsWith("/chairs") || category === "chairs") {
      logoImage = chairs
    } else if (pathname.endsWith("/clocks") || category === "clocks") {
      logoImage = clocks
    } else if (pathname.endsWith("/products") || category === "products") {
      logoImage = products
    } else {
      logoImage = house
    }
    return (

      <div className="logo-container">
        <div className="logo">
          <img src={logo} className={this.props.className} alt="symbol for productcategory" />
        </div>

        <div className="symbol">
          <img src={logoImage} alt="symbol for productcategory" />
        </div>
      </div>

    )
  }
}

Logo.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(wrap(Logo, {
  product: "product"
}))
