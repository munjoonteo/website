import React from "react"
import Layout from "../components/layout"
import headerStyles from "../styles/index.module.css"
import cardStyles from "../styles/contact.module.css"

export default function Contact() {
  const [currName, setName] = React.useState("")
  const [currEmail, setEmail] = React.useState("")
  const [currMessage, setMessage] = React.useState("")

  return (
    <Layout>
      <div className={headerStyles.main}>
        <div className={headerStyles.heading}>Contact</div>
        <div className={headerStyles.subheading}>
          I'm always interested in making new things!{"\n"}Let's talk!
        </div>
        <div className={cardStyles.card}>
          <div className={cardStyles.field_name}>name</div>
          <div className={cardStyles.field_name}>email</div>
          <div className={cardStyles.field_name}>message</div>
        </div>
      </div>
    </Layout>
  )
}
