import React from "react"
import { Link } from "gatsby"
import "./Layout.css"
import Menu from "../Menu"

const Layout = ({ children }) => (
  <div className="app">
    <header className="app-header">
      <Link to="/" className="app-title">
        Doc ta Chèvre
      </Link>
      <Menu />
    </header>
    <section className="app-body">{children}</section>
  </div>
)

export default Layout
