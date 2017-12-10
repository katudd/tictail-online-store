import React from "react"
import "./categorygrid.css"

class Categorygrid extends React.Component {
  render() {
    return (
      <div className="categories">
        <div className="category">
          <h2 className="headingCategory">WATCHES</h2>
          <div className="imageCategory" style={{ backgroundImage: "url(./images/dandelion09_akihiro_yoshida.jpg)" }} alt="Category:Watches" />
        </div>
        <div className="category">
          <h2 className="headingCategory">CHAIRS</h2>
          <div className="imageCategory" style={{ backgroundImage: "url(./images/11276-8204036.jpg)" }} alt="Category:Chairs" />
        </div>
        <div className="category">
          <h2 className="headingCategory">ART</h2>
          <div className="imageCategory" style={{ backgroundImage: "url(./images/Rogue-one_issa_2.jpg)" }} alt="Category:Art" />
        </div>
      </div>
    )
  }
}

export default Categorygrid
