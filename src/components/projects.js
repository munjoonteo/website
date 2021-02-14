import React from "react"
import styles from "../styles/projects.module.css"

const projectData = [
  {
    title: "Interactive Chess Game",
    desc:
      "A web app for two players to play chess with each other. Developed using vanilla Javascript and the p5 Javascript library. In the future, I will also add an AI for single-player games.",
    link: "https://github.com/munjoonteo/chess_v2",
    try: "https://mj-chess.netlify.app/",
  },
  {
    title: "We’re Not Really Strangers Web",
    desc:
      "A web app to play the card game We’re Not Really Strangers on your browser. Written using vanilla React.",
    link: "https://github.com/munjoonteo/wnrs",
    try: "https://munjoonteo.github.io/wnrs/",
  },
  {
    title: "Japanese Vocabulary List Builder",
    desc:
      "A web app to look up Japanese words and add them to a word list, which can then be downloaded as a text file. The text file can be imported into Anki, a Spaced Repetition System (SRS). Powered by the Jisho API and written in vanilla React.",
    link: "https://github.com/munjoonteo/vocab_list",
    try: "https://munjoonteo.github.io/vocab_list/",
  },
  {
    title: "Calculator",
    desc:
      "A simple calculator written in vanilla Javascript. Keyboard input with both the numpad and number row keys is supported.",
    link: "https://github.com/munjoonteo/calculator/",
    try: "https://munjoonteo.github.io/calculator/",
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
      <div className={styles.projects}>{cards}</div>
    </div>
  )
}
