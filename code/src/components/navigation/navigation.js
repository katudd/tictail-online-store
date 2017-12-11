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
              <li><Link to="/" className="links">Home</Link></li>
              <li><Link to="/products" className="links"> <label className="drop-icon" htmlFor="sm">Products</label></Link></li>
              <input type="checkbox" id="sm" />
              <ul className="sub-menu">
                <li><Link to="/klockor" className="links">Clocks</Link></li>
                <li><Link to="/stolar" className="links">Chairs</Link></li>
                <li><Link to="/tavlor" className="links">Art</Link></li>
              </ul>
              <li><Link to="/about" className="links">About</Link></li>
              <li><Link to="/newsletter" className="links">Newsletter</Link></li>
            </ul>

          </div>
        </div>
      </nav>

    )
  }
}

export default Navigation
