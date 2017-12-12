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
              <li><Link to="/products" className="links">Products</Link></li>
              {/* <ul className="sub-menu"> */}
              <li><Link to="/klockor" className="links sub-menu">Clocks</Link></li>
              <li><Link to="/stolar" className="links sub-menu">Chairs</Link></li>
              <li><Link to="/tavlor" className="links sub-menu">Art</Link></li>
              {/* </ul> */}
              <li><Link to="/about" className="links">About</Link></li>
              <li><Link to="/newsletter" className="links">Contact</Link></li>
            </ul>

          </div>
        </div>
      </nav>

    )
  }
}

export default Navigation
