import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../styles/404.module.css"

export default function NoPage() {
  return (
    <Layout>
      <div className={styles.heading}>Page Not Found</div>
      <div className={styles.body}>
        Oops! The page you are looking for does not exist.
      </div>
      <Link className={styles.home} to="/">
        Return to the home page
      </Link>
    </Layout>
  )
}
