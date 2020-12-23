import React from "react"
import { Helmet } from "react-helmet"
import Bio from "../components/bio"
import Socials from "../components/socials"

export default function Home() {
  return (
    <div>
      <div>Mun Joon Teo</div>
      <div>Software engineering student and musician</div>
      <Bio />
      <Socials />
    </div>
  )
}
