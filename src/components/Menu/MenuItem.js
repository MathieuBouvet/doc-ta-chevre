import React from "react"
import { Link } from "gatsby"
import "./MenuItem.css"

export default ({ children, ...rest }) => (
  <Link {...rest} className="menu-item">
    {children}
  </Link>
)
