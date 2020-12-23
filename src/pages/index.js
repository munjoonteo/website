import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Socials from "../components/socials"
import "../styles/index.css"

export default function Home() {
  return (
    <Layout>
      <div className="main">
        <div className="heading">Mun Joon Teo</div>
        <div className="subheading">
          Software engineering student and musician
          <br />
        </div>
        <Bio />
        <Socials />
      </div>
    </Layout>
  )
}
