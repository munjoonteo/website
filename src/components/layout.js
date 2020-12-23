import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "../styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Helmet bodyAttributes={{ style: "background-color: #e5e5e5" }}>
        <title>Mun Joon Teo</title>
      </Helmet>
      <div className={styles.header}>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/contact/">Contact</Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}