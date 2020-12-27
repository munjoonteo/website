import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "../styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Helmet bodyAttributes={{ style: "background-color: #f2f5ff" }}>
        <title>Mun Joon Teo</title>
      </Helmet>
      <div className={styles.header}>
        <div className={styles.links}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/contact/">
            Contact
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
