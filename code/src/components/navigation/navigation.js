import React from "react"
import "./navigation.css"

class Navigation extends React.Component {
  render() {
    return (

      <nav id="menu">


        <div className="mobile-menu">

          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

          <label className="hamburger" htmlFor="hamburger">
            <div className="bar bar1" />
            <div className="bar bar2" />
            <div className="bar bar3" />
          </label>

        </div>

        <div className="menu">

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#"> <label className="drop-icon" htmlFor="sm">Products</label></a></li>
            <input type="checkbox" id="sm" />
            <ul className="sub-menu">
              <li><a href="#">Klockor</a></li>
              <li><a href="#">Stolar</a></li>
              <li><a href="#">Tavlor</a></li>
            </ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>

        </div>

        {/* <div className="content"> */}

        {/* <div className="heroimage" /> */}

        {/* </div> */}

      </nav>

    )
  }
}

export default Navigation
