import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import * as styles from "../styles/socials.module.css"

export default function Socials() {
  let resumeLink =
    "https://drive.google.com/uc?export=download&id=1Zhhsg-H7Jq7GCKNrAEL_wQrTT2sGittp"

  return (
    <div className={styles.socials}>
      <a className={styles.link} href={resumeLink}>
        <FontAwesomeIcon icon={faFileAlt} /> Resume
      </a>
      <a className={styles.link} href="https://github.com/munjoonteo">
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/mun-joon-teo-850586195/"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </div>
  )
}
