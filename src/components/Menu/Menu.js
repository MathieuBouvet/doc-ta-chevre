import React from "react"
import "./Menu.css"
import MenuItem from "./MenuItem"

export default () => (
  <ul className="main-menu">
    <li>
      <MenuItem to="/features">Features</MenuItem>
    </li>
    <li>
      <MenuItem to="/ressources">Ressources</MenuItem>
    </li>
    <li>
      <MenuItem to="/routes">Routes</MenuItem>
    </li>
  </ul>
)
