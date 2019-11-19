import React from "react"
import "./Menu.css"
import MenuItem from "./MenuItem"

export default () => (
  <ul className="main-menu">
    <li>
      <MenuItem to="/not-ready-yet">Features</MenuItem>
    </li>
    <li>
      <MenuItem to="/not-ready-yet">Ressources</MenuItem>
    </li>
    <li>
      <MenuItem to="/not-ready-yet">Routes</MenuItem>
    </li>
  </ul>
)
