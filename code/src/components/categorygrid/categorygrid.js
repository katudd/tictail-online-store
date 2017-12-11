import { Link } from "react-router-dom"
import React from "react"
import "./categorygrid.css"

class Categorygrid extends React.Component {
  render() {
    return (
      <div className="categories">
        <Link className="category" to="/watches">
          {/* <div className="category"> */}
            <h2 className="headingCategory">WATCHES</h2>
            <div className="imageCategory" style={{ backgroundImage: "url(./images/dandelion09_akihiro_yoshida.jpg)" }} alt="Category:Watches" />
          {/* </div> */}
        </Link>
        <Link className="category" to="/chairs">
          {/* <div > */}
            <h2 className="headingCategory">CHAIRS</h2>
            <div className="imageCategory" style={{ backgroundImage: "url(./images/11276-8204036.jpg)" }} alt="Category:Chairs" />
          {/* </div> */}
        </Link>
        <Link className="category" to="/art">
          {/* <div className="category"> */}
            <h2 className="headingCategory">ART</h2>
            <div className="imageCategory" style={{ backgroundImage: "url(./images/Rogue-one_issa_2.jpg)" }} alt="Category:Art" />
          {/* </div> */}
        </Link>
      </div>
    )
  }
}

export default Categorygrid
