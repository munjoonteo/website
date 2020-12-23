import React from "react"
import styles from "../styles/projects.module.css"

const projectData = [
  {
    title: "Calculator",
    desc:
      "A simple calculator written in vanilla Javascript. Keyboard input with both the numpad and number row keys is supported.",
    link: "https://github.com/munjoonteo/calculator/",
    try: "https://munjoonteo.github.io/calculator/",
  },
  {
    title: "Interactive Chess Game",
    desc:
      "A web app for two players to play chess with each other. Developed using the p5 Javascript library. In the future, I will also add an AI for single-player games.",
    link: "https://github.com/munjoonteo/chess_v2",
    try: "https://munjoonteo.github.io/chess_v2/",
  },
  {
    title: "We’re Not Really Strangers Web",
    desc:
      "A web app to play the card game We’re Not Really Strangers on your browser. Written using vanilla React.",
    link: "https://github.com/munjoonteo/wnrs",
    try: "",
  },
  {
    title: "Mahjong Points Counter",
    desc:
      "A mobile app to keep track of the points scored by each player in a Hong Kong Mahjong game, including a history of the points scored each round. Developed using React Native and Expo.",
    link: "https://github.com/munjoonteo/mahjong",
    try: "",
  },
]

const cards = projectData.map(project => (
  <div className={styles.card} key={project.link}>
    <div className={styles.title}>{project.title}</div>
    <div className={styles.body}>{project.desc}</div>
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
    </div>
  </div>
))

export default function Projects() {
  return (
    <div>
      <div className={styles.heading}>My Projects</div>
      <div className={styles.projects}>
        <div>{cards}</div>
      </div>
    </div>
  )
}
