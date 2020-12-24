import React from "react"
import Layout from "../components/layout"
import headerStyles from "../styles/index.module.css"
import cardStyles from "../styles/contact.module.css"
import axios from "axios"

export default function Contact() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "send",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "send",
    })
  }

  const formSubmit = e => {
    e.preventDefault()
    setData({
      ...data,
      buttonText: "sending",
    })

    axios
      .post("/api/sendmail", data)
      .then(res => {
        if (res.data.result !== "success") {
          setData({
            ...data,
            buttonText: "failed to send",
            sent: false,
          })
          setTimeout(() => {
            resetForm()
          }, 2000)
        } else {
          setData({
            ...data,
            buttonText: "sent",
            sent: true,
          })
          setTimeout(() => {
            resetForm()
          }, 2000)
        }
      })
      .catch(err => {
        setData({
          ...data,
          buttonText: "failed to send",
          sent: false,
        })
      })
  }

  return (
    <Layout>
      <div className={headerStyles.main}>
        <div className={headerStyles.heading}>Contact</div>
        <div className={headerStyles.subheading}>
          I'm always interested in making new things!{"\n"}Let's talk!
        </div>
        <form className={cardStyles.card}>
          <div className={cardStyles.field_group}>
            <div className={cardStyles.field_name}>name</div>
            <textarea
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className={cardStyles.textbox}
              wrap="off"
            />
          </div>
          <div className={cardStyles.field_group}>
            <div className={cardStyles.field_name}>email</div>
            <textarea
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              className={cardStyles.textbox}
              wrap="off"
            />
          </div>
          <div className={cardStyles.field_group}>
            <div className={cardStyles.field_name}>message</div>
            <textarea
              type="text"
              name="message"
              value={data.message}
              onChange={handleChange}
              className={`${cardStyles.message} ${cardStyles.textbox}`}
            />
          </div>
          <div className={cardStyles.button_container}>
            <div
              role="button"
              tabIndex="0"
              className={cardStyles.button}
              onClick={formSubmit}
              onKeyDown={formSubmit}
            >
              {data.buttonText}
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}
