import React from "react"
import "./logo.css"

import logo from "../../images/homebound_logo_green.svg"
import house from "../../images/houseorange.png"

class Logo extends React.Component {
  render() {
    return (

      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="symbol for productcategory" />
        </div>

        <div className="symbol">
          <img src={house} alt="symbol for productcategory" />
        </div>
      </div>

    )
  }
}

export default Logo
