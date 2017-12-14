import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import "./index.css"
import createTide from './tide'
import {Component as TideComponent} from 'tide'

const appContainer = (
  <TideComponent tide={createTide()}>
    {(props) => <App />}
  </TideComponent>
)


ReactDOM.render(appContainer, document.getElementById("root"))
