import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Socials from "../components/socials"
import Projects from "../components/projects"
import * as styles from "../styles/index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.heading}>Mun Joon Teo</div>
        <div className={styles.subheading}>
          Software engineering student and musician{"\n"}
        </div>
        <Bio />
        <Socials />
        <Projects />
      </div>
    </Layout>
  )
}
