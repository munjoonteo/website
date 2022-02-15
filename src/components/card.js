import React from "react"
import * as styles from "../styles/card.module.css"

export default function Card(props) {
  let project = props.project
  return (
    <div className={styles.card} key={project.link}>
      <div className={styles.title}>{project.title}</div>
      <div className={styles.body}>{project.desc}</div>
      {buttons(project)}
    </div>
  )
}

function buttons(project) {
  return (
    <div className={styles.buttons}>
      <div>
        <a
          className={styles.button}
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
      </div>
      {project.try === "" ? (
        <div></div>
      ) : (
        <div>
          <a
            className={styles.button}
            href={project.try}
            target="_blank"
            rel="noreferrer"
          >
            try it out!
          </a>
        </div>
      )}
    </div>
  )
}
