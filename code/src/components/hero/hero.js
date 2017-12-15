import { Link } from "react-router-dom"
import React from "react"
import "./hero.css"

export default class Hero extends React.Component {
  render() {
    return (
      <div className="herocontainer">
        <button className="herobutton"><Link to="/products">SHOP ALL</Link></button>
      </div>
    )
  }
}
