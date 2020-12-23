import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div className="app">
      <Helmet bodyAttributes={{ style: "background-color: #e5e5e5" }}>
        <title>Mun Joon Teo</title>
      </Helmet>
      <div className="header">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/contact/">Contact</Link>
        </div>
      </div>
      <div className="body">{children}</div>
    </div>
  )
}
