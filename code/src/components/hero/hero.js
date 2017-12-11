import React from "react"
import "./hero.css"

export default class Hero extends React.Component {
  render() {
    return (
      <div className="herocontainer" style={{ backgroundImage: "url(./images/black-wall-dining-room.jpg)" }}>
        {/* <div className="hero" /> */}
        <button className="herobutton">SHOP ALL</button>
      </div>
    )
  }
}
