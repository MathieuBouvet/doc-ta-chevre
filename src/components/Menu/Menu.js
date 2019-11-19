import React from "react"
import "./Menu.css"
import MenuItem from "./MenuItem"

export default () => (
  <ul className="main-menu">
    <li>
      <MenuItem to="/plop">plop</MenuItem>
    </li>
  </ul>
)
