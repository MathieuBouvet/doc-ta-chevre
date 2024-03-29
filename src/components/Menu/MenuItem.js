import React from "react"
import { Link } from "gatsby"
import "./MenuItem.css"

const isActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "menu-item active" } : null

export default ({ children, ...rest }) => (
  <Link {...rest} className="menu-item" getProps={isActive}>
    {children}
  </Link>
)
