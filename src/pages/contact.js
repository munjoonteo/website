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
        <form className={cardStyles.card}>
          <label className={cardStyles.field_name}>
            name
            <input type="text" />
          </label>
          <label className={cardStyles.field_name}>
            email
            <input type="text" />
          </label>
          <label className={cardStyles.field_name}>
            message
            <input type="text" />
          </label>
        </form>
      </div>
    </Layout>
  )
}
