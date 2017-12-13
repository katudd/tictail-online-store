import { Link } from "react-router-dom"
import React from "react"
import "./categorygrid.css"

class Categorygrid extends React.Component {
  render() {

    return (
      <div className="categories">
        <Link className="category" to="/watches">
          <h2 className="headingCategory">CLOCKS</h2>
          <div className="imageCategory" style={{ backgroundImage: "url(./images/dandelion09_akihiro_yoshida.jpg)" }} alt="Category:Watches" />
        </Link>
        <Link className="category" to="/chairs">
          <h2 className="headingCategory">CHAIRS</h2>
          <div className="imageCategory" style={{ backgroundImage: "url(./images/11276-8204036.jpg)" }} alt="Category:Chairs" />
        </Link>
        <Link className="category" to="/art">
          <h2 className="headingCategory">ART</h2>
          <div className="imageCategory" style={{ backgroundImage: "url(./images/Rogue-one_issa_2.jpg)" }} alt="Category:Art" />
        </Link>
      </div>
    )
  }
}

export default Categorygrid
