import React from "react"
import "./logo.css"

class Logo extends React.Component {
  render() {
    return (

      <div className="logo-container">

        <div className="logo">
          <img src="./images/homebound_logo_green.svg" alt="logo" />
        </div>

        <div className="symbol">
          <img src="https://cdn.shopify.com/s/files/1/0225/2573/t/15/assets/eggLogo.png?271592091679784299" alt="symbol for productcategory" />
        </div>
      </div>

    )
  }
}

export default Logo
