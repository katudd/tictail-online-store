import { Link } from "react-router-dom"
import React from "react"
import "./navigation.css"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znw/categories").then(response =>
      response.json()).then(json =>
      this.setState({
        categories: json
      }))
  }

  renderNavigation() {
    const categories = this.state.categories
    const items = categories.map((category) => {
      return (
        <li key={category.id}><Link to={`/category/${category.slug}`} className="links sub-menu">{category.title}</Link></li>
      )
    })

    return (
      <ul>
        <li><Link to="/" className="links">Home</Link></li>
        <li><Link to="/products" className="links">Products</Link></li>
        <ul className="sub-menu">
          {items}
        </ul>
        <li><Link to="/about" className="links">About</Link></li>
        <li><Link to="/newsletter" className="links">Contact</Link></li>
      </ul>
    )
  }

  render() {
    console.log('this.state', this.state)
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
            {this.renderNavigation()}
          </div>
        </div>
      </nav>

    )
  }
}

export default Navigation
