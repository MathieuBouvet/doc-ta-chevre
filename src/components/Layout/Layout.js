import React from "react"
import { Link } from "gatsby"
import "./Layout.css"

const Layout = ({ children }) => (
  <div className="app">
    <header className="app-header">
      <Link to="/" className="app-title">
        Doc ta chevre
      </Link>
    </header>
    <section className="app-body">{children}</section>
  </div>
)

export default Layout
