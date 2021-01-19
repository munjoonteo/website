import React from "react"
import styles from "../styles/bio.module.css"

export default function Bio() {
  return (
    <div className={styles.bio}>
      {"\n"}Hello! I am a penultimate (3rd) year Software Engineering student at the
      University of New South Wales, Sydney. I have a passion for web development and
      classical music.{"\n\n"}In my spare time, I play the piano and the bassoon
      as the Principal Bassoonist of the Sydney Youth Philharmonic Orchestra.
      {"\n\n"}
    </div>
  )
}
