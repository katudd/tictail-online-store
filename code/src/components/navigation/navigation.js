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
            <div className="bar bar3" />
          </label>

          <div className="menu">

            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/products"><li><label className="drop-icon" htmlFor="sm">Products</label></li></Link>
              <input type="checkbox" id="sm" />
              <ul className="sub-menu">
                <Link to="/klockor"><li>Klockor</li></Link>
                <Link to="/stolar"><li>Stolar</li></Link>
                <Link to="/tavlor"><li>Tavlor</li></Link>
              </ul>
              <Link to="/about"><li>About</li></Link>
              <Link to="/newsletter"><li>Newsletter</li></Link>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navigation
