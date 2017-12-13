import React from "react"
import "./logo.css"

import logo from "../../images/homebound_logo_green.svg"
import house from "../../images/housecircle.png"
import art from "../../images/art.png"
import chairs from "../../images/chairdarkgreen.png"
import clocks from "../../images/clockslightgreen_1.png"
import products from "../../images/productsdarkgreen.png"
import PropTypes from 'prop-types';

class Logo extends React.Component {


  render() {
    let logoImage
    if (this.context.router.route.location.pathname.endsWith("/art")){
      logoImage = art
    } else if (this.context.router.route.location.pathname.endsWith("/chairs")){
      logoImage = chairs
    } else if (this.context.router.route.location.pathname.endsWith("/clocks")){
      logoImage = clocks
    } else if (this.context.router.route.location.pathname.endsWith("/products")){
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

export default Logo
