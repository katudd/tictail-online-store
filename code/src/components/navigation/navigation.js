import { Link } from "react-router-dom"
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
            <div clasName="bar bar3" />
          </label>

          <div className="menu">

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products </a></li>
              <li><a href="#">Products</a></li>

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
        </div>
      </nav>

    )
  }
}

export default Navigation
