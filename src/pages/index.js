import React from "react"
import { Helmet } from "react-helmet"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Socials from "../components/socials"

export default function Home() {
  return (
    <Layout>
      <div>
        <div>Mun Joon Teo</div>
        <div>Software engineering student and musician</div>
        <Bio />
        <Socials />
      </div>
    </Layout>
  )
}
