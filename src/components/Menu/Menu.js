import React from "react"
import "./Menu.css"
import MenuItem from "./MenuItem"

export default () => (
  <ul className="main-menu">
    <li>
      <MenuItem to="/plop">plop oui</MenuItem>
    </li>
    <li>
      <MenuItem to="/plop2">plop2</MenuItem>
    </li>
    <li>
      <MenuItem to="/plop3">plop3et plop</MenuItem>
    </li>
  </ul>
)
