import React from "react"
import * as styles from "../styles/bio.module.css"

export default function Bio() {
  return (
    <div className={styles.bio}>
      {"\n"}Hello! I am a final (4th) year Software Engineering student at
      the University of New South Wales, Sydney. I have a passion for web
      development and classical music.{"\n"}In my spare time, I play the
      bassoon for the UNSW Wind Symphony and occasionally the piano too.
      {"\n\n"}
    </div>
  )
}
